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