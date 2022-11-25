//import * as React from 'react'
import React, {useState} from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { 
  all,
  subA,
  subB,
  dingly
 } from '../../components/layout.module.css'

var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://root:mongoPass@cluster0.ddvbnxo.mongodb.net/?retryWrites=true&w=majority");
var nameSchema = new mongoose.Schema({
    str: String,
    con: String,
    dex: String,
    wis: String,
    int: String,
    cha: String,
});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});


function setRand(poop) 
{
  var numArray = [4] 
  numArray[0]=Math.floor((Math.random()*6)+1)
  numArray[1]=Math.floor((Math.random()*6)+1)
  numArray[2]=Math.floor((Math.random()*6)+1)
  numArray[3]=Math.floor((Math.random()*6)+1)

  var i = 0
  for(i; i < numArray.length - 1; i++)
  {
    if (numArray[i] < numArray[i+1])
    {
      var temp = numArray[i];
      numArray[i] = numArray[i+1];
      numArray[i+1] = temp;
      i = -1;
    }
  }

  document.getElementById(poop).value = numArray[0] + numArray[1] + numArray[2]; 
}

const BlogPage = ({ data }) => 
{
  return (
    <Layout pageTitle="Roll for Stats!!!">
      {
        data.allSite.nodes.map(node => (
          <article key={node.id}>          
              <div className={all}>
                <h2 className={subB}>Character Stats</h2>
                <form method="post" action="/addname">
                  <p>
                  <h3 className={subA}>Strength</h3>
                  <button onClick={()=>{setRand("str")}}>Roll!</button> <input className={dingly} type="text" id="str" size="20" placeholder='0'></input>
                  </p>
                  <p>
                  <h3 className={subA}>Dexterity</h3>
                  <button onClick={()=>{setRand("dex")}}>Roll!</button> <input className={dingly} type="text" id="dex" size="20" placeholder='0'></input>
                  </p>
                  <p>
                  <h3 className={subA}>Constitution</h3>
                  <button onClick={()=>{setRand("con")}}>Roll!</button> <input className={dingly} type="text" id="con" size="20" placeholder='0'></input>
                  </p>
                  <p>
                  <h3 className={subA}>Wisdom</h3>
                  <button onClick={()=>{setRand("wis")}}>Roll!</button> <input className={dingly} type="text" id="wis" size="20" placeholder='0'></input>
                  </p>
                  <p>
                  <h3 className={subA}>Intelligence</h3>
                  <button onClick={()=>{setRand("int")}}>Roll!</button> <input className={dingly} type="text" id="int" size="20" placeholder='0'></input>
                  </p>
                  <p>
                  <h3 className={subA}>Charisma</h3>
                  <button onClick={()=>{setRand("cha")}}>Roll!</button> <input className={dingly} type="text" id="cha" size="20" placeholder='0'></input>
                  <input type="submit" value="Save Stats"></input>
                  </p>
                </form>
              </div> 
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allSite {
      nodes {
        siteMetadata {
          title
        }
      }
    }
  }
`

export const Head = () => <Seo title="Roll for Stats" />

export default BlogPage