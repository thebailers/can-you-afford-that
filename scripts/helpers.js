let helpers =  {
  formatPrice :  function(pence) {
    return '£' + ( (pence / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
  }
}

export default helpers;
