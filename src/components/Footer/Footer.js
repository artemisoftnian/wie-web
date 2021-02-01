/* eslint-disable prettier/prettier */
import React from 'react'
import Link from 'gatsby-link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCodepen,
  FaGithub,
  FaHeart,
  FaRegCopyright,
} from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <section className="footer-widgets pad-extra">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widgets-content footer-widget-wrap">
                <h3 className="widgets-title">About WIE</h3>
                <h6 className="widgets-title">Address</h6>
                <p>
                  34 W 134th Street <br></br>
                  New York, NY 10037
                </p>
                <div className="footer-social" style={{display:'none'}}>
                  <a href="http://bit.ly/wiecare-facebook-link" aria-label="Facebook">
                    <i className="fa">
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="http://bit.ly/vets-who-code-twitter" aria-label="Twitter">
                    <i className="fa">
                      <FaTwitter />
                    </i>
                  </a>
                  <a href="http://bit.ly/2omsjdX" aria-label="Codepen">
                    <i className="fa">
                      <FaCodepen />
                    </i>
                  </a>
                  <a href="https://bit.ly/2sJ6W9f" aria-label="Instagram">
                    <i className="fa">
                      <FaInstagram />
                    </i>
                  </a>
                  <a href="https://bit.ly/2sFKi1u" aria-label="Linkedin">
                    <i className="fa">
                      <FaLinkedinIn />
                    </i>
                  </a>
                  <a href="http://bit.ly/vwc-github" aria-label="Github">
                    <i className="fa">
                      <FaGithub />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-widget-wrap">
                <div className="row">
                  <div className="col-md-11 col-md-offset-1">
                    <h3 className="widgets-title">Site Map</h3>
                  </div>
                  <div className="col-md-5 col-md-offset-1">
                    <div className="widgets-content">
                      <ul className="widgets-list">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/donate">Get Involved</Link>
                        </li>
                        <li>
                          <Link to="/programs">Programs</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="widgets-content">
                      <ul className="widgets-list">
                        <li>
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link to="/events">Evetns</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widgets-content">
                <h3 className="widgets-title">Contact Us</h3>
                <div className="office map">
                  <p>
                    <span>Hi, if you have any questions, please drop us a line.</span>
                    <br />
                    Email: wiecare.usa@gmail.com
                    <br />
                    Phone: (914) 346-6868
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p className="copyright">
                <FaRegCopyright color="#fff" />
                WieCare
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="footer-menu">
                <li>
                  Made with{' '}
                  <span className="fa fa-heart red">
                    <FaHeart color="red" />
                  </span>{' '}
                  By Artemisoftnian.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
