"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/services/style.css";
import serviceImage1 from "@/app/assets/images/services/service1.png";
import serviceImage2 from "@/app/assets/images/services/service2.png";
import serviceImage3 from "@/app/assets/images/services/service3.png";
import tractorIcon from "@/app/assets/images/services/tractorIcon.png";
import plantIcon from "@/app/assets/images/services/plantIcon.png";
import homeIcon from "@/app/assets/images/services/homeIcon.png";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400", // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <>
      <div className="serviceWrapper container">
        <div className="serviceContainer">
          <p className={coveredByYourGrace.className}>Our Services</p>
          <h1>What We Offer</h1>
          <div className="cardWrapper mt-5">
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Body>
                <div className="imageWrapper">
                  <Image
                    src={serviceImage1}
                    alt="feature1"
                    layout="responsive" /* Makes image responsive */
                    width={700} /* Aspect ratio width */
                    height={400} /* Aspect ratio height */
                    className="cardImage"
                  />
                  <div className="Imageicon">
                    <Image
                      src={tractorIcon}
                      alt="feature2"
                      width={80} /* Aspect ratio width */
                      height={60} /* Aspect ratio height */
                      className="cardImage"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="serviceCardHeading">
                    <span> Agriculature Product</span>
                  </div>
                  <div className="productDescription">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati tempora ullam dicta, sint deserunt reiciendis
                      esse quaerat eligendi officia sed, praesentium quo. nt
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Body>
                <div className="imageWrapper">
                  <Image
                    src={serviceImage2}
                    alt="feature2"
                    layout="responsive" /* Makes image responsive */
                    width={850} /* Aspect ratio width */
                    height={400} /* Aspect ratio height */
                    className="cardImage"
                  />
                  <div className="Imageicon">
                    <Image
                      src={plantIcon}
                      alt="feature2"
                      width={80} /* Aspect ratio width */
                      height={60} /* Aspect ratio height */
                      className="cardImage"
                    />
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="serviceCardHeading ">
                    <span>Organic Product</span>
                  </div>
                  <div className="productDescription">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati tempora ullam dicta, sint deserunt reiciendis
                      esse quaerat eligendi officia sed, praesentium quo. nt
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Body>
                <div className="imageWrapper">
                  <div className="imageWrapper">
                    <Image
                      src={serviceImage3}
                      alt="feature2"
                      layout="responsive" /* Makes image responsive */
                      width={850} /* Aspect ratio width */
                      height={400} /* Aspect ratio height */
                      className="cardImage"
                    />
                    <div className="Imageicon">
                      <Image
                        src={homeIcon}
                        alt="feature2"
                        width={80} /* Aspect ratio width */
                        height={60} /* Aspect ratio height */
                        className="cardImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper">
                  <div className="serviceCardHeading ">
                    <span>Dairy Product</span>
                  </div>
                  <div className="productDescription">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati tempora ullam dicta, sint deserunt reiciendis
                      esse quaerat eligendi officia sed, praesentium quo. nt
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <section>
        <div className="sectionWrapper container">
          <div className="sectionContent">
            <span>Agriculture</span>
            <span>ProjectCompleted</span>
            <span>Satisfied Clients</span>
            <span>Exper Farmers</span>
          </div>
        </div>
      </section>
    </>
  );
}
