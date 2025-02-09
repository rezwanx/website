import Link from 'next/link'
import React from 'react'

function Home4Contact() {
  return (
    <div className="home4-contact-area pt-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-wrapper text-center magnetic-item">
            <h2 className="title">Work With Us</h2>
            <h2 className="content">Let’s Talk</h2>
            <div className="contact-btn">
              <Link legacyBehavior  href="/contact">
                <a className="magnetic-item">
                Contact With Us.
                <svg width={32} height={32} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home4Contact
