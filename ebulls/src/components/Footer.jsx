import React from 'react'
import "../style/Footer.css";
import logo from "../img/logo.png";
import { Link, useHistory } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footerbackground'>
    <footer className="footer">
  <div className="footer__addr">
    <div>
      <img src={logo} />
    </div>
    <div>
  <p>ebulls is a new, centralised cryptocurrency exchange that is <br/>
    looking to make a huge impact in the industry. The team <br/>
    behind ebulls is highly experienced. </p>
    </div>
        
  </div>
  
  <ul className="footer__nav">
    
  
    
    <li className="nav__item nav__item--extra">
  <h2 className="nav__title">Help And Support</h2>

<ul className="nav__ul">
  <li>
  <Link style={{color:'#ffff'}} to='/privacy'>Privacy Policy</Link>
  </li>

  <li>
  <Link style={{color:'#ffff'}} to='/faqs'>FAQs</Link>
  </li>
    
  <li>
  <a href="#">About Us</a>
  </li>
  <li>
  <Link style={{color:'#ffff'}} to='/terms'>Terms And Conditions</Link>
  </li>
       
      </ul>
    </li>

  <li className="nav__item nav__item--extra">
  <h2 className="nav__title"></h2>

<ul className="nav__ul">
  <li>
  <a href="#"></a>
  </li>

  <li>
  <a href="#"></a>
  </li>
    
  <li>
  <a href="#"></a>
  </li>
  <li>
  <a href="#"></a>
  </li>
       
      </ul>
    </li>


    
    <li className="nav__item">
      <h2 className="nav__title">SIGN UP FOR EMAIL UPDATE</h2>
      <div className='flex'>
        <div>
        <input className='emailinput'
        placeholder='Your e-mail address'
         />
         </div>
         <div>
          <button className='subcribe'>Subscribe</button>
         </div>
      </div>
         <p className='sbbb'>Subscribe us using your email address to receive news and <br/>
          updates.</p>
     
    </li>
  </ul>
  <hr className='divider' />
  
  <div className="legal">
    <div>
    <p>Copyright @ 2022 ebulls. All rights reserved.
</p>
</div>
<div className='gap'>
  <a>Market</a>
  <a>Exchange</a>
  <Link to='/staking' style={{color:'#ffff'}}>Stakng</Link>
  <a>Wallet</a>
</div>
  </div>
</footer>
  </div>

  )
}
