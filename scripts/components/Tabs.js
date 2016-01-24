import React from 'react';

const Tabs = React.createClass({
	propTypes: {
	    selected: React.PropTypes.number,
	    children: React.PropTypes.oneOfType([
	    	React.PropTypes.array,
	    	React.PropTypes.element
	    ]).isRequired
	},
	displayName: 'Tabs',
	getDefaultProps() {
	    return {
	        selected: 0
	    };
	},
	getInitialState() {
	    return {
	        selected: this.props.selected
	    };
	},
	renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'active' : '');
			return (
				<li key={index}>
					<a href="#"
						className={activeClass}
						onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}
		return (
			<ul className="tabs-labels">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	},
	renderContent() {
		return (
			<div className="tabs-content">
				{this.props.children[this.state.selected]}
			</div>
		);
	},
	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	},
	render() {
		return (
			<div className="tabs">
				{this.renderTitles()}
				{this.renderContent()}
			</div>
		);
	}
});

export default Tabs;
