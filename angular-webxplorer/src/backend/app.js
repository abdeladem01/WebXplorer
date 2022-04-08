const express = require ( 'express' );
const mongoose= require('mongoose')
const app=express();
const wayback = require('./wayback-master')
const { isAvailable } = require('./wayback-master');
const {httpGet, randomDate, random_item}=require("./wayback-master/examples/check-is-available.js");

socialmedia=["facebook.com", "twitter.com", "instagram.com", "youtube.com"]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use((req,res,next)=>{
  rand=randomDate(new Date(2010, 0, 1, 0, 0, 0), new Date(2022, 4, 4, 18, 28, 28));
  site=random_item(socialmedia)

  // check for specific timestamp, return if found else retun closest timestamp
  wayback.isAvailable(site,rand,function(err,data){
    if(err)
      console.log(err);
    //We get the url from the API
	  url=data.archived_snapshots.closest.url;
    //We get the html from the url
    html=httpGet(url);
    res.send(html)
  })

})

module.exports=app;
