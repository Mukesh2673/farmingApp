"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/Introduction/style.css";
import cartYelloIcon from "@/app/assets/icons/cartyelloIcon.png";
import portYellowIcon from "@/app/assets/icons/potyellowIcon.png";
import parentImage from '@/app/assets/images/introudctonParentImage.png'
import childImage from '@/app/assets/images/IntroductionChildImage.png'
import tickIcon from "@/app/assets/icons/tickIcon.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { Covered_By_Your_Grace } from 'next/font/google';

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ['latin'],
  weight: '400', // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <div className="introductionWrapper container">
      
      <div className="col-md-6">
      <div className="imageWrapper">
        <div className='parentImage'>
        <Image
                  src={parentImage}
                  alt="cartIcon"
                  width={500}
                  height={500}
                />
        </div>
        <div className='childImage'>
        <Image
                  src={childImage}
                  alt="cartIcon"
                  width={210}
                  height={200}
                />
          </div>
             </div>
      </div>

      <div className="col-md-6">
        <div className="introductionText">
        <p className={coveredByYourGrace.className}>Our introduction</p>          <h1>Agriculture & Organic Product Farm</h1>
          <p id="title">Agrios is the largest global organic farm.</p>
          <p id="description">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don’t look even.
          </p>
          <div className="feature">
            <div className="growing">
              <div className="cartyellowIcon">
                <Image
                  src={cartYelloIcon}
                  alt="cartIcon"
                  width={120}
                  height={100}
                />
              </div>

              <h1>Growing fruits vegetables</h1>
              <div className="cartyellowIcon">
                <Image
                  src={portYellowIcon}
                  alt="cartIcon"
                  width={120}
                  height={100}
                />
              </div>
              <h1>Tips for ripening your fruits</h1>
            </div>

            <div className="footerText">
              <ul className="custom-list">
                <li> Lorem Ipsum is not simply random text.</li>
                <li> Making this the first true generator on the internet.</li>
              </ul>
            </div>
          </div>
          <button className="btn">Discover More</button>
        </div>
      </div>

    </div>
  );
}
