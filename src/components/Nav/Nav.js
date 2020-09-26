/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react'
import Link from 'gatsby-link'
import FluidImage from '../FluidImage'

import './nav.css'

function Nav() {
  const navRef = useRef()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [opacity, setOpacity] = useState(0.9)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return () => document.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    if (winScroll === 0) {
      setOpacity(0.9)
    }
    if (winScroll > 0) {
      setOpacity(1)
    }
  }   
 
  return (
    <nav
      ref={navRef}
      id="fixedTopNav"
      className="navbar navbar-fixed-top main-navigation navbar-solid"
      itemScope=""
      itemType="https://schema.org/SiteNavigationElement"
      role="navigation"
      style={{ opacity: opacity }}
    >
      <div className="container">
        <div className="navbar-header">
          <div
            className="navbar-brand"
            style={{ padding: '5px 15px 5px' }}
            itemScope=""
            itemType="https://schema.org/Organization"
          >
            <span className="sr-only">WieCare</span>
            <Link to="/">
              <FluidImage  
                fileName="wie_logo_white.png"                
                alt="WieCare Logo"
                className="logo_holder"
              />
              <div className="homeLink">Work Initiative And Entrepreneurship</div>
            </Link>
          </div>
          <button
            type="button"
            id="hamburger-1"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={`navbar-toggle collapsed hamburger ${isNavOpen ? 'is-active' : ''}`}
            aria-expanded={isNavOpen ? 'true' : 'false'}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="sr-only">WieCare</span>
          </button>
        </div>
        <div
          className={`navbar-collapse collapse ${isNavOpen ? 'in' : ''}`}
          id="main-nav-collapse"
          aria-expanded={isNavOpen ? 'true' : 'false'}
        >
          <ul className="nav navbar-nav navbar-right" role="menu">
            <li role="menuitem" className="donate">
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li role="menuitem" className="donate">
              <Link to="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li role="menuitem" className="donate">
              <Link to="/donate">
                <span>Get Involved</span>
              </Link>
            </li>
            <li role="menuitem" className="donate">
              <Link to="/programs">
                <span>Programs</span>
              </Link>
            </li> 
            <li role="menuitem" className="donate">
              <Link to="/projects">
                <span>Proyects</span>
              </Link>
            </li>
            <li role="menuitem" className="donate">
              <Link to="/events">
                <span>Events</span>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Nav
