import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  donkey
 } from './layout.module.css'

 const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div className={container}>
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
          <main className={donkey}>
            <h1 className={heading}>{pageTitle}</h1>
          </main>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
              <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
              <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Roll Stats</Link></li>
            </ul>
          </nav>
        {children}
      </div>
  )
}

export default Layout