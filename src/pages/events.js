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
              <h4 className="cause_title">Fund Raising Event October 2021</h4>
              <br /> 
              <div className="cause_section_content" >
                <p>
                   Details coming soon.
                </p>

                <div className="divider"></div>
                <p style={{textAlign:'center', marginTop:30}}>
                  <h3>Your donation will help the wholistic and long-term support and training of <br />in-need and at-risk youth and young adults.</h3>  
                  <h3>We don’t leave them until they succeed and be ready to help others. </h3>   
                  <h2>YOU ARE PART OF US! </h2>
                  <h2>WIE Organization thanks you for your donation! </h2> 
                </p>

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
