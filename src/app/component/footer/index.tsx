"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/footer/style.css";
import Image from "next/image";
import logo from "@/app/assets/icons/whitelogo.png";
import { Covered_By_Your_Grace } from "next/font/google";
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400", // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <>
   <div className="footerWrapper">
  <div className="footerContent">
    <div className="logoWrapper">
      <div className="logoIcon">
        <Image src={logo} alt='logo' width={160} height={80}/>
      </div>
      <p>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
    </div>
    
    <div className="footerExploreWrapper">
      <h1>Explore</h1>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Our Projects</li>
        <li>Meet the Farmers</li>
        <li>Latest News</li>
        <li>Contact</li> 
      </ul>
    </div>

    <div className="footerNewsWrapper">
      <div className="newsHeading">
        <h1>News</h1>
      </div>
      <div className="newsText">
        <h2>Bringing Food Production</h2>
        <h2>Back to Cities</h2>
        <span>July 5, 2022</span>
      </div>
    </div>
    
    <div className="footerContactWrapper">
      <div className="contactHeading">
        <h1>Contact</h1>
      </div>
      <ul className="contactText">
        <li>Phone</li>
        <li>Email</li>
        <li>Map</li>
        <li>Search</li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
}
