/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'

function Projects() {
  return (
    <Layout>
      <PageHeader title="projects" />
      <section id="cause_singe" className="cause_single section bg-default single pad-regular">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul style={{margin: '0 auto', maxWidth: '50%'}}>
                <li style={{listStyle:'disc'}}> <h4 className="cause_title">Youth Career and Value Access Project</h4></li>
              </ul>
             
              <br />
              <div className="cause_section_content">
                <p>
                  
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
              Get Involved &nbsp;
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

export default Projects
