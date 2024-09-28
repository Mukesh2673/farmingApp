"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/services/style.css";
import Product from "@/app/component/products/product"
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400", // Customize this based on the font's available weights
});
export default function Page() {
  return (
    <>
      <div className="productsWrapper container">
        <div className="serviceContainer">
              <Product/>
        </div>
       </div>
    </>
  );
}
