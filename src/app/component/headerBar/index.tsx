import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/home/style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import logo from '@/app/assets/icons/logo.png'
import fbIcon from '@/app/assets/icons/socialIcon/facebook.png'
import instaIcon from '@/app/assets/icons/socialIcon/instagram.png'
import twitterIcon from '@/app/assets/icons/socialIcon/twitter.png'
import printrestIcon from '@/app/assets/icons/socialIcon/printrest.png'
import telephone from '@/app/assets/icons/telephone.png'
import email from '@/app/assets/icons/message.png'
import locationIcon from '@/app/assets/icons/mapIcon.png'
export default function page() {
  return (
    <div className='socialBar'> 
        <div className="logoWrapper">
          <div className="logoIcon">
          <Image src={logo} alt='logo' width={160} height={80}/>
          </div>
        </div>
        <div className="socialMediaGroup">
          <div className="fbIcon">
          <Image src={fbIcon} alt='logo' width={60} height={60}/>
          </div>
          <div className="instaIcon">
          <Image src={instaIcon} alt='logo' width={60} height={60}/>
          </div>
          <div className="twitterIcon">
          <Image src={twitterIcon} alt='logo' width={60} height={60}/>
          </div>
          <div className="printrestIcon">
          <Image src={printrestIcon} alt='logo' width={60} height={60}/>
          </div>
        </div>
        <div className="telephoneWrapper">
          <div className="telephonecontainer d-flex gap-3">
          <Image src={telephone} alt='logo' width={30} height={30}/>
          <div className='telephoneInfo'>
          <p>Call any time</p>
          <span>+91(000)-9630</span>
          </div>
          </div>
        </div>
        
        <div className="emailWrapper">
          <div className="emailContainer d-flex gap-3">
          <Image src={email} alt='logo' width={30} height={30}/>
          <div className='emailInfo'>
          <p>Send Email</p>
          <span>abd@gmail.com</span>
          </div>
          </div>
        </div>
        

        <div className="locationWrapper">
          <div className="locationContainer d-flex gap-3">
          <Image src={locationIcon} alt='logo' width={40} height={40}/>
          <div className="locationInfo">
          <p>380 st kida Road</p>
          <span>Melabod,Austrlia</span>
          </div>
          </div>
        </div>
  </div>
  )
}