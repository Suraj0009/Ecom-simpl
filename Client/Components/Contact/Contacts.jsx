import React from 'react'
import './Contact.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import PinterestIcon from '@mui/icons-material/Pinterest';
const Contacts = () => {
  return (
    <div className='contacts'>
        <div className='heading'>Be in touch with us</div>
        <div className='joinus'> 
           <div className="email"> <input type="email" placeholder='your mail' /></div>
            <button className='button'>Join us</button>
         </div>
        <div className='logos'>
            <InstagramIcon/>
            <PinterestIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
        </div>
    </div>
  )
}

export default Contacts
