/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'

function Events() {
  return (
    <Layout>
      <PageHeader title="events" />
      <section id="cause_singe" className="cause_single section bg-default single pad-regular">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Skill and Technical Training (STT) Program</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  This program is for in-need or at-risk youth and young adults to improve their academic status 
                  and credentials, and their job market disadvantages, and career sustainability. The target population 
                  for this program is youth and young adults ages 14 – 30 years with at least two years post high school 
                  degree (post-secondary school degree) (Target #1); with at least high school (secondary school) education 
                  degree (Target #2); with less than high school (secondary school) education (Target #3).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Entrepreneurship Sponsorship and Investment (ESI) Program</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  This program is a micro to small scale entrepreneurship sponsorship and financial investment program for 
                  trained or skilled workers or business owners. The target population for the ESI program is young adults 
                  ages 18 – 45 years who are: trained or skilled workers or business owners in need of capital investment and 
                  support to grow and diversify their business and product (Target #1); skilled or non-skilled recent 10 years
                  or less university undergraduate degree holders between the ages of 21 – 40 who want to be entrepreneurs (Target #2); 
                  trained or skilled youth and young adults ages 14 – 30 who need specialized training and/or capital 
                  investment and support to grow and diversify their skills or product (Target #3).                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">Social Competence Skills Training (SCST) Program</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  This is a Counseling and Mentorship access program for all STT and ESI 
                  program beneficiaries. The goal is to keep participants consistently focused and to help them 
                  better manage their personal challenges, acquire necessary social, moral and self-competence skills 
                  to complement their academic and technical training, and to promote their work effectiveness 
                  and social responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>  

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">WORK INITIATIVE PARTNERSHIP AND INVESTMENT (WIPI) PROGRAM:</h4>
              <br />
              <div className="cause_section_content">
                <p>
                This is a micro to macro scale Work Initiative Partnership and Investment (WIPI) programs with local
                 and/or international institutions, organizations and government agencies to promote and create job 
                 opportunities in impoverished communities and for economically disadvantaged groups. 
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
              birthday? &nbsp;
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

export default Events
