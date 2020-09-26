import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Typed from 'react-typed'

function Header() {
  const data = useStaticQuery(graphql`
    query {
      codeImage: file(relativePath: { eq: "slide4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="site-header flexslider classic overlay main-overlay grey"
      fluid={data.codeImage.childImageSharp.fluid}
      style={{ height: '80vh' }}
    >
      <div className="header-classic wrapper-table">
        <div className="valign-center">
          <div className="container">
            <div className="col-md-10 col-md-offset-1">
              <div className="intro text-left" style={{ color: '#fff' }}>
                <h1>
                  <Typed
                    className="typedString"
                    strings={[
                      'Customized social competence for our youth and young adults',
                      'individualized access to skill andtechnical training',
                      'civic and economic development through access to coaching'
                    ]}
                    typeSpeed={70}
                    backSpeed={40}
                    smartBackspace
                    loop
                  />
                </h1>
                <p className="subtitle">With Work Initiative And Entrepreneurship</p>
                <div className="btn-cal-group">
                  <Link to="/apply" className="btn btn-charity-default">
                    Apply
                  </Link>
                  &nbsp;
                  <Link to="/donate" className="btn btn-charity-default">
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
