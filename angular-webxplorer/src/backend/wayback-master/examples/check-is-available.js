const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
function pad2(n) {
  return n < 10 ? '0' + n : n
}

//Get a random timestamp
function randomDate(start, end) {
    a=new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    //to get the string for the timestamp
    date= a.getFullYear().toString() + pad2(a.getMonth() + 1) + pad2( a.getDate()) + pad2( a.getHours() ) + pad2( a.getMinutes() ) + pad2( a.getSeconds() )
    return date
}

//To get a random site from the list of sites
function random_item(items){
  return items[Math.floor(Math.random()*items.length)];
     }


module.exports= {httpGet, randomDate, random_item}
