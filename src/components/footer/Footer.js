import React from 'react'
import {Link} from 'react-router-dom'

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import classes from './Footer.module.css'

// function Footer() {
//     return (
//         <div className='footer'>
//             <div className="container">
//                 <div className="top">
//                     <h3>SECOND CHANCE.</h3>
//                     <div className="social">
//                         <FaFacebook className='icon' />
//                         <FaInstagram className='icon' />
//                         <FaTwitter className='icon' />
//                         <FaPinterest className='icon' />
//                         <FaYoutube className='icon' />
//                     </div>
//                 </div>
//                 <div className="bottom">
//                     <div className="left">
//                         <ul>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </div>
//                     <div className="right">
//                         <ul>
//                             <li>Terms</li>
//                             <li>Policy</li>
//                             <li>Privacy</li>
//                             <li>Pricing</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Footer = (props) => {
    return (
      <footer>
        <section>
          <div className={classes.footer}>
            <ul>
              <h2>SECOND CHANCE.</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing.
              </p>
            </ul>
            <ul className={classes.one}>
              <h2>Company</h2>
              <Link>About</Link>
              <Link>Careers</Link>
              <Link>Mobile</Link>
            </ul>
            <ul className={classes.two}>
              <h2>Contact</h2>
              <Link>Help/FAQ</Link>
              <Link>Press</Link>
              <Link>Affilates</Link>
            </ul>
            <ul style={{display: 'flex', marginLeft: "15rem"}} className='footerIcon'>
                <li><FaFacebook /></li>
                <li><FaInstagram  /></li>
                <li><FaTwitter /></li>
                <li><FaPinterest /></li>
                <li><FaYoutube /></li>
            </ul>
          </div>
        </section>
      </footer>
    );
  };
export default Footer
