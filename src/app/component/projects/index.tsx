'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/component/projects/style.css'
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import projecImage1 from '@/app/assets/images/projects/project1.png'
import projecImage2 from '@/app/assets/images/projects/project2.png'
import projecImage3 from '@/app/assets/images/projects/project3.png'
import projecImage4 from '@/app/assets/images/projects/project4.png'
import { Covered_By_Your_Grace } from 'next/font/google';

import DropdownButton from 'react-bootstrap/DropdownButton';
const coveredByYourGrace = Covered_By_Your_Grace({
    subsets: ['latin'],
    weight: '400', // Customize this based on the font's available weights
  });
export default function Page() {
  return (
    <div className="projectsWrapper">
    <Container fluid="lg" className='custom-cfontainer'>
    <div className="text-center">
        <p className={coveredByYourGrace.className}>Recently completed</p>
        <h1>Explore Projects</h1></div>
    <div className='projectContainer'>
        <div>
        <Image
          src={projecImage1}
          alt="feature1"
          layout="responsive" /* Makes image responsive */
          width={320} /* Aspect ratio width */
          height={400} /* Aspect ratio height */
          className="cardImage"
        />
        </div>
        <div>
        <Image
          src={projecImage2}
          alt="feature1"
          layout="responsive" /* Makes image responsive */
          width={320} /* Aspect ratio width */
          height={400} /* Aspect ratio height */
          className="cardImage"
        />
        </div>
        <div>
        <Image
          src={projecImage3}
          alt="feature1"
          layout="responsive" /* Makes image responsive */
          width={320} /* Aspect ratio width */
          height={400} /* Aspect ratio height */
          className="cardImage"
        />
        </div>
        <div>
        <Image
          src={projecImage4}
          alt="feature1"
          layout="responsive" /* Makes image responsive */
          width={320} /* Aspect ratio width */
          height={400} /* Aspect ratio height */
          className="cardImage"
        />
        </div>
    </div>
    </Container>
    </div>
  );
}
