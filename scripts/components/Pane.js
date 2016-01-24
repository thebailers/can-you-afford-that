import React from 'react';

const Pane = React.createClass({
	propTypes: {
	    label: React.PropTypes.string.isRequired,
	    children: React.PropTypes.element.isRequired
	},
	displayName: 'Pane',
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

export default Pane;
