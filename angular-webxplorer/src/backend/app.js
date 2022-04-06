const express = require ( 'express' );
const app=express();
const wayback = require('./wayback-master/index.js')
const { isAvailable } = require('./wayback-master/index.js');
const {httpGet, randomDate, random_item}=require("./wayback-master/examples/check-is-available.js");

//Make specific timestamps for each site
socialmedia=["facebook.com", "twitter.com", "instagram.com", "youtube.com", "pinterest.com"]

app.use((req,res,next)=>{
  //Gerer les dates en fonction des sites
  rand=randomDate(new Date(2000, 0, 1, 0, 0, 0), new Date(2022, 4, 4, 18, 28, 28));
  site=random_item(socialmedia)

  // check for specific timestamp, return if found else retun closest timestamp
  wayback.isAvailable(site,rand,function(err,data){
    if(err)
      console.log(err);
    //We get the url from the API
	  url=data.archived_snapshots.closest.url;
    //We get the html from the url
    html=httpGet(url);
    res.send(url)
  })

})

module.exports=app;
