import React from 'react'
import style from "../css/Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Footer = () => {
  return (

         <div className="footer-container">
    <footer className={style.main}>
      <div className="container">
        <div className={style.rowhidebelowtablet}>
          <div className="six columns">
            <h3 className={style.he3}>About Foodie</h3>

            <div>
              <div className={style.col}>
                <div className={style.column}>
                  <a className={style.link} href="about-taxtim">The Foodie Story</a>
                  <a className={style.link} href="data-security">Security and Trust</a>
                  <a className={style.link} href="affiliate-signup">Become an Affiliate</a>
                </div>

                <div className="column">
                  <a className={style.link} href="how-tim-works">How Foodie Works</a>
                  <a className={style.link} href="services">What Foodie Costs</a>
                  <a className={style.link} href="tos#refunds">Return Policy</a>
                  <a className={style.link} href="jobs">Jobs at Foodie</a>
                </div>

                <div className="column">
                  <a className={style.link} href="services/clerk-assist">Clerk Assist</a>
                  <a className={style.link} href="services/mobile-vehicle-logbook">
                    Vehicle Logbook
                  </a>
                  <a className={style.link} href="services/expense-tracker-app">
                    Expense Tracker App
                  </a>
                  <a className={style.link} href="small-business">Small Business Tax</a>
                </div>
              </div>
            </div>
          </div>

          <div className="four columns offset-by-two">
            <h3 className={style.he3}>fast Delivery Help</h3>

            <div className="col">
              <div className="column">
                <a className={style.link} href="help/ask-a-tax-question?source=footer">
                  Ask a Tax Question
                </a>

                <a className={style.link} href="calculators">Food near by you</a>
                <a className={style.link} href="help">Step-by-step Guides</a>
                <a className={style.link} href="answers/">Food Q &amp; A</a>
              </div>
              <div className="column">
                <a className={style.link} href="get-started?register">Register for Foodie</a>
                <a className={style.link} href="blog/">Foodie Blog</a>
                <a className={style.link} href="free-tax-season-reminders">Famous Food</a>
                <a className={style.link} href="contact-us">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="social-container">
          <a className={style.link} href="" target="_blank">
          <a className={style.link}><TwitterIcon/></a>
            {/* <i class="social fab fa-twitter"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="" target="_blank">
          <a className={style.link}><FacebookIcon/></a>
            {/* <i class="social fab fa-facebook"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="" target="_blank">
          <a className={style.link}><InstagramIcon/></a>
            
            {/* <i class="social fab fa-instagram"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="" target="_blank">
          <a className={style.link}><LinkedInIcon/></a>
            {/* <i class="social fab fa-linkedin"></i> */}
          </a>
        </div>

        <div className=" terms-container">
          <a className={style.link} href="tos">Terms of Service</a> |{" "}
          <a className={style.link} href="privacy">Privacy Policy</a> |{" "}
          <a className={style.link} href="sitemap">Sitemap</a>
          <br />
          Copyright ©️ 2023 TaxTim | Human Robot Pty Ltd. All Rights
          Reserved.
          <br />
          Supported by SARS Registered Tax Practitioner PR-0009352 | 32
          Kloof St, Gardens, Cape Town, South Africa | Site secured by
          Comodo Security.
        </div>
      </div>
    </footer></div>
  )
}
