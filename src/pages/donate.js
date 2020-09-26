/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'

function Donate() {
  return (
    <Layout>
      <PageHeader title="donate" />
      <section id="cause_singe" className="cause_single section bg-default single pad-regular">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Get Involved</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  W.I.E. operates on the volunteer, goodwill and philanthropic contributions from organizations and 
                  people like you. Your volunteering and donations help us provide structured and long-term 
                  individualized help to in-need and at-risk youth and young adults by offering them opportunities 
                  for success and positive life-changing experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Become a volunteer</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  Join the “WIE.CARE VOLUNTEER TEAM” to make a sustained and significant impact in the life of in-need 
                  r at-risk youth. You can volunteer as A COACH, A MENTOR, A COUNSELOR, AN EVENT SUPPORTER, LIFE-TIME S
                  UPPORTER, etc. What you do for A Youth, you do for the Community and Society at large.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Donate your birthday!</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  This year, do something great with your birthday. Give Back and Rally your Friends to give back by making a difference 
                  in the lives of in-need and at-risk youth. Start your next year of life with a sense of JOY that you’re helping 
                  change the Life of a youth for the Better. 
                </p>
              </div>
            </div>
          </div>
        </div>  

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Donate for an anniversary or REMEMBRANCE!</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  Donate to commemorate an important anniversary in your life or your family’s life.  Your special anniversary donation 
                  is a wonderful way of extending and honoring important memories and significant lives in your family. Your Anniversary 
                  donations will be accorded special recognition it requires in our organization. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="iframe-container embed-responsive">
                <iframe
                  src="https://donorbox.org/embed/wiecare-donation?show_content=true"
                  seamless="seamless"
                  name="donorbox"
                  scrolling="yes"
                  allowpaymentrequest="true"
                  frameBorder={0}
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="cause_single section bg-default single pad-regular"
        style={{ paddingTop: '0px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cause_section_content">
                <div className="testimonial-row">
                  <FluidImage
                    fileName="profile.png"
                    alt="Jhon Smith"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      &quot;Testimonial Here&quot;
                      <br /> - Jhon Smith, USA | Student, New York
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action-small" className="call-to-action-small">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
                 What you do for A Youth ? &nbsp;
                <a className="btn btn-charity-default" href="/donate">
                  DONATE
                </a>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Donate
