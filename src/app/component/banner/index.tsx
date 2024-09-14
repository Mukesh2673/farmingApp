'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/component/banner/style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import featureImage1 from '@/app/assets/images/featureImage1.png'
import featureImage2 from '@/app/assets/images/featureImage2.png'
import featureImage3 from '@/app/assets/images/featureImage3.png'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Covered_By_Your_Grace } from 'next/font/google';

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ['latin'],
  weight: '400', // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <div className="banner">
    <div className='bannerWrapper'>
    <div className='text'>
        <p>WELECOME TO AGRO FARMING</p>
        <h2 className="cover-by-grace">Welcome Eco Farming</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo optio quod voluptatibus voluptates iusto obcaecati facilis, maxime atque quasi velit voluptatum reprehenderit id similique non officia eligendi blanditiis delectus!</p>
    </div>
    </div>
    <div className='cardWrapper'>    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        
        <Card.Title  className='bannerCard'><span className={coveredByYourGrace.className}>feature 1</span></Card.Title>
       <div className='cardHeading'>
       <span> We're using a new technology</span>
       </div>
       <div className='imageWrapper'>
        <Image
                  src={featureImage1}
                  alt="feature1"
                  width={150}
                  height={150}
                />
                </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title  className='bannerCard'><span className={coveredByYourGrace.className}>feature 2</span></Card.Title>
        <div className='cardHeading'>

        <span>Good in smart organic Services</span>
        </div>

        <div className='imageWrapper'>
        <Image
                  src={featureImage2}
                  alt="feature1"
                  width={150}
                  height={150}
                />
                </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      
        <Card.Title  className='bannerCard'><span className={coveredByYourGrace.className}>feature 3</span></Card.Title>
               <div className='cardHeading'>

        <span>Reforming in the system</span>
        </div>      
        <div className='imageWrapper'>
        <Image
                  src={featureImage3}
                  alt="feature1"
                  width={150}
                  height={150}
                />
                </div>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}
