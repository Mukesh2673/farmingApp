"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/testimonial/style.css";
import Image from "next/image";
import chooseUsImage from "@/app/assets/images/chooseUsbanner.png";
import { Covered_By_Your_Grace } from "next/font/google";
import greentick from "@/app/assets/icons/greentickIcon.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import yellowtick from "@/app/assets/icons/yellowtick.png";
import parrottickIcon from "@/app/assets/icons/tickIcon.png";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400", // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <>
      <div className="testimonialWrapper container">
        <div className="testimonialDescription">
          <h2 className={coveredByYourGrace.className} id="title">
            Our Testimonial
          </h2>
          <div className="cardHeading">
            <h1>What They're Talking About Agrios</h1>
          </div>
          <div className="description">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don't look even.
            <button>View All Testimonial</button>
          </div>
        </div>
        <div className="testimonialsContainer">
          <div className="testimonials">
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some form by injected humor
              or random word which don't look even.
            </p>
            <div className="testimonialUser">
              <span>Bonnie Tolbert</span>
              <span id="star"></span>
            </div>
          </div>
          <div className="testimonailImage"></div>
        </div>
      </div>
      <div className="chooseUs container">
        <div className="chooseUsbannerWrapper">
          <div className="imageColumns">
            <Image
              src={chooseUsImage}
              alt="feature1"
              layout="responsive" /* Makes image responsive */
              width={20} /* Aspect ratio width */
              height={20} /* Aspect ratio height */
              className="cardImage"
            />
          </div>
          <div className="textColumn">
            <span className={coveredByYourGrace.className} id="title">
              Our Farm Benefits
            </span>
            <h1>Why Choose Agrios Market</h1>
            <p>
              There are many variations of passages of available but the
              majortity have sufferred alteration in some form by injected humor
              or random word which don't look even.
            </p>
            <div className="listWrapper">
              <div className="listWrapper">
                <table className="featureTable">
                  <tbody>
                    <tr>
                      <td>
                        <Image
                          src={greentick}
                          alt="Green Tick"
                          layout="responsive"
                          width={10}
                          height={10}
                          className="cardImage"
                        />
                      </td>
                      <td>
                        <h3>Quality Organic Food</h3>
                        <p>
                          There are variations. You need to be sure there is
                          nothing hidden in the middle of text.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src={parrottickIcon}
                          alt="Parrot Tick"
                          layout="responsive"
                          width={10}
                          height={10}
                          className="cardImage"
                        />
                      </td>
                      <td>
                        <h3>Fresh Ingredients</h3>
                        <p>
                          There are variations. You need to be sure there is
                          nothing hidden in the middle of text.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Image
                          src={yellowtick}
                          alt="Yellow Tick"
                          layout="responsive"
                          width={10}
                          height={10}
                          className="cardImage"
                        />
                      </td>
                      <td>
                        <h3>Eco-friendly Packaging</h3>
                        <p>
                          There are variations. You need to be sure there is
                          nothing hidden in the middle of text.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button>Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
}
