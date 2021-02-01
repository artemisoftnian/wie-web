/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import React, { Fragment } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileSignature,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'

import participantForm from '../assets/docs/wie_participant_application_form.pdf'

function Apply() {
  return (
    <Layout>
      <PageHeader title="Apply Now" />
      <div className="pad-regular bg-default">
        <section id="contact" className="section bg-default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="contactus-brief">
                  <h3>Participants</h3>
                  <p className="section-description">Welcome to the WIE-CARE application system:</p>
                  <div className="container">
                    <div className="col-md-6">
                        <div className="form-box">
                           <FontAwesomeIcon icon={faFileSignature} size="4x" />
                          <h5><a href={"#"} disabled target="_blank">Fill out an online application today!</a></h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-box">
                           <FontAwesomeIcon icon={faFilePdf} size="4x" />
                          <h5><a href={participantForm} download>Download the PDF Form</a></h5>
                        </div>                           
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       </div>
      <section id="call-to-action-small" className="call-to-action-small">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h3>
              Real generosity to the future lies in giving all to the present &nbsp;
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
export default Apply
