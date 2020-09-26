/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import FluidImage from '../components/FluidImage'
import PageHeader from '../components/PageHeader'
//import { FaTwitter, FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa'

import vwcGIF from '../images/vwc.gif'
import facebookVideo from '../video/vwc-facebook-reel.mp4'

function About() {
  const videoRef = useRef()

  function play() {
    videoRef.current.play()
    videoRef.current.onended = end
  }

  function end() {
    document.querySelector('.success-video').style.display = 'none'
    document.querySelector('.vwc-animated-gif').style.display = 'block'
  }

  return (
    <Layout>
      <PageHeader title="about" />
      <section id="about" className="small-top-pad section bg-default">
        <div className="container">
          <div className="row">
            <div className="col-md-12 lead-in">
              <h1 className="story-title">About Us</h1>
              <p>
                <i>
                  Sub Title here
                </i>
              </p>
            </div>
            <div className="col-md-12" style={{ marginBottom: 20 }}>
              <div className="success-video" style={{ position: 'relative', display:'none' }}>
                <video
                  onPlay={play}
                  ref={videoRef}
                  type="video/mp4"
                  className="img-responsive"
                  muted
                  controls
                >
                  <source src={facebookVideo} />
                </video>
              </div>
              <div
                className="vwc-animated-gif"
                style={{
                  backgroundImage: `url(${vwcGIF})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  display: 'none',
                }}
              />
            </div>
            <div className="col-md-12">
              <div className="success-story">
                <p className="story">
                  <h2>Who We Are</h2>
                  Work Initiative and Entrepreneurship (WIE) Inc., USA is a non-profit, non-political, 
                  direct engagement and individualized self-advancement and sustainable economic growth 
                  initiative for youth and young adults through work skill training, social competence 
                  skills coaching, entrepreneurship sponsorship and community-based job creation programs. 
                </p>
                
                <p className="story">
                <h2>Mission and Goal</h2>
                  Provide CUSTOMIZED, INDIVIDUALIZED, WHOLISTIC and LONG-TERM support to At-Risk and
                  In-Need youth and young adults through sustained coaching, mentorship and access to
                  resources andtraining in order for them to improve and succeed in their academic,
                  spiritual, social and economic interests and goals. 
                </p>

                <p className="story">
                  We build TRUST and give 
                  ENDURING ATTENTION to all aspects of our Youths Life to help them navigate through
                  challenges they face, and succeed where others fail, and become more capable, 
                  independent, responsible, and good.
                </p>

                <p className="story">
                 <h2>Our vision</h2>
                  Create opportunities for grassroot community civic and economic development through 
                  access to coaching (mentorship); skill training, entrepreneurship sponsorship and 
                  work creation investments.
                </p>

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
            <div className="col-md-12 lead-in">
              <h1 className="story-title">Our Team</h1>
              <p>
                <i>
                  Sub Title Here
                </i>
              </p>
            </div>
            <div className="col-md-12">
              <div className="cause_section_content">
                <div className="testimonial-row">
                  <FluidImage
                    fileName="Dr.-Martha-Sullivan-270x270.jpg"
                    alt="Dr. Martha A. Sullivan, DSW, MA"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      <h2>Dr. Martha A. Sullivan, DSW, MA</h2>
                      President
                    </p>
                    <p className="bio">
                      Bio - To be Provided                       
                    </p> 
                  </blockquote>
                </div>
                <div className="testimonial-row">
                  <FluidImage
                    fileName="anthony-270x270.jpg"
                    alt="Rev. Anthony C. Iroh, PhD"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      <h2>Rev. Anthony C. Iroh, PhD</h2>
                      Founder and Vice-president
                    </p>
                    <p className="bio">
                      Rev. Anthony Iroh is a Catholic priest ordained in 1994 in Nigeria.  He worked as a seminary formator (1994 – 1997); 
                      Parish administrator (1995 – 1997); Chaplain and Associate Pastor (1997 – 1999) before moving to the USA for further 
                      studies and ministry. Rev. A. Iroh served 10 years as associate pastor at St. Catherine of Genoa Church in Brooklyn 
                      and 10 years as a volunteer chaplain at Kingsbrook Jewish Medical Center, Brooklyn, New York. Rev. Iroh also worked
                       as associate pastor in two other churches in Queens and Brooklyn. Rev. Iroh got his doctoral degree in Psychology 
                       from Fordham University Bronx, New York in 2010 and subsequently taught at Fordham University, State University 
                       of NY (SUNY) at Westchester and SUNY at Purchase as adjunct professor of psychology. Rev. Iroh is interested in 
                       mental health initiative programs, family counselling, community development programs, and youth socio-moral 
                       development and decision-making process. Currently, Rev. Anthony Iroh is the associate pastor at St. Charles 
                       Borromeo Church in Manhattan, New York.                       
                    </p>
                  </blockquote>
                  
                </div>
                <div className="testimonial-row">
                  <FluidImage
                    fileName="lennix-Lewis-270x270.jpg"
                    alt="Mr. Lennix P. Lewis, MBA, CMRP"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      <h2>Mr. Lennix P. Lewis, MBA, CMRP</h2>
                      Secretary
                    </p>
                    <p className="bio">
                      Bio - To be Provided                       
                    </p>                    
                  </blockquote>
                </div>
                <div className="testimonial-row">
                  <FluidImage
                    fileName="Rodney-Beckford-270x270.jpg"
                    alt="Rev. Rodney Beckford"
                    style={{ height: 200, width: 200 }}
                  />
                  <blockquote className="testimonial-text">
                    <p>
                      <h2>Rev. Rodney Beckford</h2>
                      Treasurer
                    </p>
                    <p className="bio">
                      Mr. Rodney Beckford is a native son of Harlem NY. He attended Resurrection Roman Catholic School in Harlem and George Washington High School in Washington Heights in Manhattan. For most of his adult years he lived in the Bronx and raised his family for over 28 years in CO-OP City, while consistently staying connected to the Harlem Community. He attended The City College of New York, St. Joseph Seminary in Yonkers NY and has a Bachelor of Arts degree from The College of New Rochelle in Religious Studies. 
                      Mr. Beckford’s experience can be characterized as a diverse professional and social matrix spanning 48 years in business combined with extensive urban community involvement. Beginning as an office boy, for a Wall Street law firm Patterson, Belknap & Webb at age 16, he moved through the ranks to hold positions as an advertising executive, associate director of nutrition, The Executive Chief Steward at the United Nations and the North East regional Manager at an international beverage company, Vitality Inc. presently a division of Nestles Inc. 
                      Simultaneously Mr. Beckford served in numerous capacities for many community organizations such as Mind Builders Creative arts Center as an officer and board member and NYC Mission Society’s Board of Managers for Minisink Camp and Town House.  At present he is a board member of two affordable housing corporations established by the Archdiocese and Catholic Charities of New York, The St. John Paul II Houses in Manhattan and Saint Augustine Houses in the Bronx. Mr. Beckford also serves on numerous advisory councils, most notably The Archdiocesan Diaconal Council to the Cardinal Archbishop of NY.
                      In 1995 Mr. Beckford was accepted to study at St. Joseph Seminary and was ordained a Permanent Catholic Deacon in 2002 at St. Patrick’s Cathedral by Edward Cardinal Egan, Archbishop of New York, who assigned him to serve the Central Harlem Deanery at St. Charles Borromeo Church. At present Rev. Deacon Rodney Beckford is the Director of The Lieutenant Joseph P. Kennedy Jr. Center in Harlem, for Catholic Charities Community Services Inc. where he combines his vast business experience and his vocation call to ministry.  Married to Gail Daniels-Beckford for 39 years and father to Adia 38 and Danielle 33, Deacon Beckford’s mission is to serve those in need and live a life that reflects his call to the ministry of service.                        
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
              Anniversary or REMEMBRANCE ? &nbsp;
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

export default About
