/* eslint-disable comma-spacing */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import SponsorSlider from '../components/SponsorSlider'
import Layout from '../components/Layout'
import '../components/fontawsome'
import Countdown from '../components/Countdown'
import Header from '../components/Header'
import FluidImage from '../components/FluidImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SubscribeForm, onSubmitSuccess, onSubmitError } from '../components/Forms'

function IndexPage() {
  useEffect(() => {
    let current = true
    if (current) {
      onClientEntry()
    }
    return () => (current = false)
  }, [])

  const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (window !== undefined) {
      if (window.IntersectionObserver === undefined) {
        require('intersection-observer')
      }
    }
  }

  return (
    <Layout>
      <Header />
      <section id="call-to-action" className="section bg-default call-to-action index">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-3">
              <Link to="/donate">
                <div
                  className="fluid-grid first-grid text-center"
                  style={{ backgroundColor: '#2D4778' }}
                >
                  <h2>HOW CAN YOU HELP</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/apply">
                <div
                  className="fluid-grid second-grid text-center"
                  style={{ backgroundColor: '#637BA9' }}
                >
                  <span>Make a donation</span>
                  <h2><FontAwesomeIcon icon={["far","coffe"]} />  #1</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/mentor">
                <div
                  className="fluid-grid third-grid text-center"
                  style={{ backgroundColor: '#647234' }}
                >
                  <span>Become a volunteer</span>
                  <h2><i className="fas fa-hand-holding-usd"></i> #2</h2>
                </div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/mentor">
                <div
                  className="fluid-grid fourth-grid text-center"
                  style={{ backgroundColor: '#858C4D' }}
                >
                  <span>Donate your birthday</span>
                  <h2>#3</h2>
                </div>
              </Link>
            </div>            
          </div>
        </div>
      </section>
      <section
        id="our_stories"
        className="section pad-regular bg-default our_stories small-top-pad"
      >
        <div className="container">
          <div className="row bg-dark">
            <div className="col-md-5 col-sm-12 no_left_pad no_right_pad">
              <FluidImage
                fileName="laptop-teaching.jpg"
                className="img-responsive"
                alt="Teach, Training, New Skill and More"
                style={{width:'100%'}}
              />
            </div>
            <div className="col-md-7 col-sm-12 our_story_content text-center">
              <div className="featured-heading">
                <h2>WIE Care, Can & Will</h2>
              </div>
              <p>
                  Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, direct engagement and individualized 
                  self-advancement and sustainable economic growth initiative for youth and young adults through work skill training, social 
                  competence skills coaching, entrepreneurship sponsorship and community-based job creation programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="our_missions" className="section pad-regular bg-light our_missions">
        <div className="container">
          <div className="row">
            <div className="featured-heading text-center">
              <h2 className="dark_color">
                <i className="fa fa-code" aria-hidden="true" /> LATEST
                <i className="fa fa-code" aria-hidden="true" /> PROJECT
              </h2>
            </div>
            <div className="col-sm-12 our_mission_content text-center">
              <blockquote>
                <p>
                  Youth Career and Value Access Project.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="event_card" className="section bg-dark pad-regular event_card">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 event_content">
              <h4>Countdown to next event: </h4>
              <div className="event_excerpt">
                <p>Sample: Event Title Goes Here!</p>
              </div>
            </div>
            <div className="col-sm-6 event_counter_container text-center">
              <Countdown />
              <Link className="btn btn-charity-default" to="/apply">
                Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter_card" className="section bg-light pad-regular newsletter_card">
        <div className="container">
          <div className="row">
            <div className="col-md-12 newsletter_wrapper">
              <div className="newsletter_inner_wrapper">
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="text-center" style={{ color: '#ECECEC' }}>
                      JOIN OUR EMAIL LIST
                    </h3>
                  </div>
                  <div className="col-sm-8">
                    <SubscribeForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section id="causes" className="section bg-default causes-card" style={{ padding: '75px 0', display:'none' }}>
        <div className="container">
          <div className="normal_heading text-center">
            <h2>Our Partners</h2>
          </div>
          <div className="row">
            <div className="col-sm-12 cause_content text-center" style={{ marginBottom: 40 }}>
              <h4 className="cause_title">Thank You For Working With WieCare!</h4>
              <hr />
              <h3 className="subtitle">
                We Are Grateful To Have These Companies Partner With Us On Our Journey To Train
                Veterans How To Code!
              </h3>
            </div>
          </div>
          <div style={{ minHeight: 100, height: 100 }}>
            <SponsorSlider />
          </div>
        </div>
      </section>
      */} 
    </Layout>
  )
}

export default IndexPage
