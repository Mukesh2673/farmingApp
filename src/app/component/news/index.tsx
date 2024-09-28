"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/news/style.css";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import newsImage1 from '@/app/assets/images/newsImage1.png'
import newsImage2 from '@/app/assets/images/newsImage2.png'
import newsImage3 from '@/app/assets/images/nawsImage3.png'
import userIcon from '@/app/assets/icons/user.png'
import chatIcon from '@/app/assets/icons/chat.png'
import { Covered_By_Your_Grace } from 'next/font/google';
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ['latin'],
  weight: '400', // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <>
    <div className="newsWrapper container mt-5">
  <div className="newsContainer">
    <div className="newsheading">
        <span className={coveredByYourGrace.className}>from the Blog</span>
        <h1>News & Article</h1>
    </div>
    <div className="cardWrapper">
        {[newsImage1, newsImage2, newsImage3].map((image, index) => (
            <Card key={index} style={{ width: '22rem', border: 'none' }}>
                <Card.Body>
                    <div className="newsImageWrapper">
                        <Image
                            src={image}
                            alt={`feature${index + 1}`}
                            layout="responsive"
                            width={700} // Maintain aspect ratio
                            height={400} // Maintain aspect ratio
                            className="cardImage"
                        />
                    </div>
                    <div className="newsbutton">
                    <button>5 july 2025</button>    
                    </div>
                    <div className="text-wrapper">
                        <div className="userAction">
                        <Image
                            src={userIcon}
                            alt={`feature${index + 1}`}
                            width={20} // Maintain aspect ratio
                            height={20} // Maintain aspect ratio
                            className="cardIcon"
                        />
                        <span>kevin marth</span>
                         <Image
                            src={chatIcon}
                            alt={`feature${index + 1}`}
                            width={20} // Maintain aspect ratio
                            height={20} // Maintain aspect ratio
                            className="cardIcon"
                        />
                        <span>1 comment</span>
                        </div>
                        <div className="serviceCardHeading">
                            <span>Agriculture Product</span>
                        </div>
                        <div className="productDescription">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempora ullam dicta, sint deserunt reiciendis esse quaerat eligendi officia sed, praesentium quo.
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        ))}
    </div>
</div>


    </div>
    
        </>
  );
}
