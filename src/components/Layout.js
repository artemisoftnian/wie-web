/* eslint-disable max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet'

import Nav from './Nav'
import Footer from './Footer'

import 'react-toastify/dist/ReactToastify.css'
import '../assets/lib/bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/main.css'
import '../assets/css/custom.css'

import metaImage from '../images/meta-image.jpg'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Wie-Care</title>
      <meta
        name="description"
        content="Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, direct engagement and individualized 
        self-advancement and sustainable economic growth initiative for youth and young adults through work skill training, social competence 
        skills coaching, entrepreneurship sponsorship and community-based job creation programs."
      />

      <meta itemProp="name" content="WieCare 🇺🇸 " />
      <meta
        itemProp="description"
        content="Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, direct engagement and individualized 
        self-advancement and sustainable economic growth initiative for youth and young adults through work skill training, social competence 
        skills coaching, entrepreneurship sponsorship and community-based job creation programs."
      />
      <meta itemProp="image" content={metaImage} />

      <meta property="og:url" content="http://www.wiecare.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WieCare 🇺🇸 " />
      <meta
        property="og:description"
        content="Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, direct engagement and individualized 
        self-advancement and sustainable economic growth initiative for youth and young adults through work skill training, social competence 
        skills coaching, entrepreneurship sponsorship and community-based job creation programs."
      />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WieCare 🇺🇸 " />
      <meta
        name="twitter:description"
        content="Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, direct engagement and individualized 
        self-advancement and sustainable economic growth initiative for youth and young adults through work skill training, social competence 
        skills coaching, entrepreneurship sponsorship and community-based job creation programs."
      />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>

    <main className="main_container">
      <ToastContainer />
      <Nav />
      {children}
      <Footer />
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
