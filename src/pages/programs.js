/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'

function Programs() {
  return (
    <Layout>
      <PageHeader title="Our Programs" />
      <section id="cause_singe" className="cause_single section bg-default single pad-regular">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">BACK-TO-SCHOOL (BTS) PROGRAM</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  The Back-To-School (BTS) program is for youth and young adults ages 14 to 30 who dropped out of school, 
                  to help them register, reenter, stay in school, improve their Grade Point Average (GPA), and graduate. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">SKILL AND ACADEMIC ENHANCEMENT (SAE) PROGRAM</h4>
              <br />
              <div className="cause_section_content">
                <p>
                The Skill and Academic Enhancement (SAE) program and services are for active students ages 14 to 30 
                who are financially in-need and/or academically at-risk, to help them improve their academic Grade Point 
                Average (GPA), stay in school, and help them acquire at least one new professional or technical skill/training 
                while in school to boast their credentials, improve their job market advantages, and assist them secure a job for income.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">WORK AND ENTREPRENEURSHIP SPONSORSHIP (WES) PROGRAM</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  The Work and Entrepreneurship Sponsorship (WES) program is for Out-of-School youths and young adults ages 21 to 40 
                  who are unemployed or financially in-need, to sponsor them in at least one technical training to improve their 
                  skills and job market advantages and career sustainability, assist them find work, and when possible, to offer 
                  capital and/or professional support to those who want to be entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>  

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="cause_title">SOCIAL COMPETENCE SKILLS TRAINING (SCST) PROGRAM</h4>
              <br />
              <div className="cause_section_content">
                <p>
                  The Social Competence Skills Training (SCST) program involves at least monthly counseling and mentorship access and 
                  supervision for all BTS and SAE participants, and it is optional but encouraged for all WES participants. The goal is 
                  to keep participants consistently focused, build trust with the participant-mentor/counselor relationship, be under 
                  the supervision of trusting relationships to help them better manage their personal challenges, acquire necessary 
                  socio-moral and self-competence skills to complement their academic and technical training, and to promote their work 
                  effectiveness and social responsibility.                   
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


export default Programs
