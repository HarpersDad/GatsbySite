// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { 
  main
 } from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle = "Main">
        <StaticImage
        classname={main}
        alt="I often tell my kids 'I used to be cool once,' but they never believe me."
        src="../images/DnD.png"
      />
        <p>A simple tool to roll stats for your next D&D character.</p>
      </Layout>

  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Main"/>

// Step 3: Export your component
export default IndexPage