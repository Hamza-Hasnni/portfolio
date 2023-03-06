import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    {/* <div>
    <a href="www.google.fr"><BsTwitter /></a>  
    </div> */}
    <div>
     <a href="https://www.facebook.com/BaltiHamzza"><FaFacebookF /></a> 
    </div>
    <div>
    <a href="https://www.instagram.com/hamza_hasni.17/"><BsInstagram /></a>  
    </div>
  </div>
);

export default SocialMedia;