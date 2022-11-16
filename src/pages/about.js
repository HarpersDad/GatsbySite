// Step 1: Import React
import * as React from 'react'
import  Layout from '../components/layout'
import Seo from '../components/seo'
import { 
  all,
  subB
 } from '../components/layout.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle = "About">
      <div className={all}>
        <h2 className={subB}>Character Stat Roller</h2>
        <p>I wanted to create a page for nerds who had enough money for tech, but not enough for dice to roll stats.  This random stat generator uses the method to roll stats from 5E, using four 6-sided dice and dropping the lowest value.</p>
        <p>I hope to be able to flesh this site out in the future by adding more options for using different rule sets to create stats by, adding an option to create a full character sheet, and allowing a user to save their character sheet as a pdf.  I would also like to change the layout to something less vanilla, eventually.</p>
        <p>This site was created using weird tech magic, CBD, and prolific amounts of alcohol in an attempt to barely pass a class so I can graduate!</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About"/>

// Step 3: Export your component
export default AboutPage