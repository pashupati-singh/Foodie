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
                  <a className={style.link} href="#">The Foodie Story</a>
                  <a className={style.link} href="#">Security and Trust</a>
                  <a className={style.link} href="#">Become an Affiliate</a>
                </div>

                <div className="column">
                  <a className={style.link} href="#">How Foodie Works</a>
                  <a className={style.link} href="#">What Foodie Costs</a>
                  <a className={style.link} href="#">Return Policy</a>
                  <a className={style.link} href="#">Jobs at Foodie</a>
                </div>

                <div className="column">
                  <a className={style.link} href="#">Clerk Assist</a>
                  <a className={style.link} href="#">
                    Vehicle Logbook
                  </a>
                  <a className={style.link} href="#">
                    Expense Tracker App
                  </a>
                  <a className={style.link} href="#">Small Business Tax</a>
                </div>
              </div>
            </div>
          </div>

          <div className="four columns offset-by-two">
            <h3 className={style.he3}>fast Delivery Help</h3>

            <div className="col">
              <div className="column">
                <a className={style.link} href="#">
                  Ask a Tax Question
                </a>

                <a className={style.link} href="#">Food near by you</a>
                <a className={style.link} href="#">Step-by-step Guides</a>
                <a className={style.link} href="#">Food Q &amp; A</a>
              </div>
              <div className="column">
                <a className={style.link} href="#">Register for Foodie</a>
                <a className={style.link} href="#">Foodie Blog</a>
                <a className={style.link} href="#">Famous Food</a>
                <a className={style.link} href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>

        <div className="social-container">
          <a className={style.link} href="#" target="_blank">
          <a className={style.link}><TwitterIcon/></a>
            {/* <i class="social fab fa-twitter"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="#" target="_blank">
          <a className={style.link}><FacebookIcon/></a>
            {/* <i class="social fab fa-facebook"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="#" target="_blank">
          <a className={style.link}><InstagramIcon/></a>
            
            {/* <i class="social fab fa-instagram"></i> */}
          </a>{" "}
          &nbsp;
          <a className={style.link} href="#" target="_blank">
          <a className={style.link}><LinkedInIcon/></a>
            {/* <i class="social fab fa-linkedin"></i> */}
          </a>
        </div>

        <div className=" terms-container">
          <a className={style.link} href="#">Terms of Service</a> |{" "}
          <a className={style.link} href="#">Privacy Policy</a> |{" "}
          <a className={style.link} href="#">Sitemap</a>
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
