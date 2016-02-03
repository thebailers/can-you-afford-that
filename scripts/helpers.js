let helpers =  {
  formatPrice :  function(pence) {
    return '£' + ( (pence / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
  },
  monthNames :
    ["january", "february", "march", "april", "may", "june",
"july", "august", "september", "october", "november", "december"]
}

export default helpers;
