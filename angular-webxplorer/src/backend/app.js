const express = require ( 'express' );
const { MongoClient } = require("mongodb");
const app=express();

const url='mongodb+srv://whitemerchant:Chakib111@webxplorerdb.ebfgn.mongodb.net/?retryWrites=true&w=majority'
insadocs=42
sportsdocs=80
socialmediadocs=157
everythingdocs=393
newsdocs=111 //mohamed doit rajouter
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



app.get('/site',(req, res, next)=>{
  let listOfScreens = [];
  const findItems = async () => {
    const client=await MongoClient.connect(url);
    var database = client.db("Webxplorerdb");
//i c'est la category
    let category = req.query.category;
    let nbScreen = req.query.nb;
    let randomNum;
    let site;
    let social;
    let i;
    if (category == 0) {
      social = database.collection('Social Media');

      for (i =0 ; i < nbScreen; i++) {
        randomNum = Math.floor(Math.random() * socialmediadocs);
        site = await social.findOne({_id: randomNum},
          function (err, result) {
            if (err) throw err;
            listOfScreens.push(result);
          })
      }
      setTimeout(function(){
        res.json(listOfScreens);
        client.close();
      },4000)
    } else if (category == 1) {
      sports = database.collection('Sports')
      let i;
      for (i =0 ; i < nbScreen; i++) {
        randomNum = Math.floor(Math.random() * sportsdocs);
        site = await sports.findOne({_id: randomNum},
          function (err, result) {
            if (err) throw err;
            console.log(result, i);
            listOfScreens.push(result)
          });
      }
      setTimeout(function(){
        res.json(listOfScreens);
        client.close();
      },4000)
    }
    else if (category == 2){
      news= database.collection('News')
      for (i=0;i<nbScreen;i++){
        randomNum=Math.floor(Math.random() * newsdocs);
        site=await news.findOne({_id:randomNum},
          function(err, result) {
            if (err) throw err;
            listOfScreens.push(result);
          })
      }
      setTimeout(function(){
        res.json(listOfScreens);
        client.close();
      },4000)
    }else if (category == 3){
      insa= database.collection('Insa')
      for (i=0;i<nbScreen;i++){
        randomNum=Math.floor(Math.random() * insadocs);
        site=await insa.findOne({_id:randomNum},
          function(err, result) {
            if (err) throw err;
            listOfScreens.push(result)
          })
      }
      setTimeout(function(){
        res.json(listOfScreens);
        client.close();
      },4000)
    }else if (category == 4) {
      every = database.collection('Everything');
      for (i = 0; i < nbScreen; i++) {
        randomNum = Math.floor(Math.random() * everythingdocs);
        site = await every.findOne({_id: randomNum},
          function (err, result) {
            if (err) throw err;
            listOfScreens.push(result)
          })
      }
      setTimeout(function(){
        res.json(listOfScreens);
        client.close();
      },4000)
    }
                }
    findItems();
}
);
module.exports=app;
