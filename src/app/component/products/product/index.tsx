"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/component/products/product/style.css";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaStar } from "react-icons/fa"; 
import cartIcon from "@/app/assets/icons/cart.png";
import vag1 from '@/app/assets/images/products/onion.png';
import vag2 from '@/app/assets/images/products/vag2.jpg';
import vag3 from '@/app/assets/images/products/vag3.jpg';
import vag4 from '@/app/assets/images/products/vag4.jpg';
import vag5 from '@/app/assets/images/products/vag5.jpg';
import vag6 from '@/app/assets/images/products/vag6.jpg';

const products = [
  { id: 1, name: "Onion", category: "Vegetable", price: 10, originalPrice: 15, image: vag1, rating: 4 },
  { id: 2, name: "Vegetable 2", category: "Vegetable", price: 20, originalPrice: 30, image: vag2, rating: 5 },
  { id: 3, name: "Vegetable 3", category: "Vegetable", price: 15, originalPrice: 25, image: vag3, rating: 4.5 },
  { id: 4, name: "Vegetable 4", category: "Vegetable", price: 18, originalPrice: 28, image: vag4, rating: 4 },
  { id: 5, name: "Vegetable 5", category: "Vegetable", price: 12, originalPrice: 20, image: vag5, rating: 4 },
  { id: 6, name: "Vegetable 6", category: "Vegetable", price: 16, originalPrice: 22, image: vag6, rating: 5 },
];

const repeatedProducts = [...Array(10)].flatMap((_, index) => products.map(product => ({ ...product, id: index * products.length + product.id })));

export default function Product() {
  return (
    <div className="productsGrid container">
      <div className="row">
        {repeatedProducts.map(product => (
          <div className="col-md-3 mb-4" key={product.id}> {/* Use col-md-3 for 4 cards per row */}
            <Card className="productCard">
            <Image
                src={product.image}
                alt={product.name}
                width={300} // Fixed width
                height={200} // Fixed height
                className="cardImage"
                style={{ objectFit: 'cover' }} // Ensures the image fits the dimensions
              />
            <Card.Body>
                <div className="productDetails">
                  <span className="categoryTag">{product.category}</span>
                  <h1 className="productName">{product.name}</h1>
                  <div className="ratings">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} color={index < product.rating ? "#FFD700" : "#D3D3D3"} />
                    ))}
                    <span className="ratingValue">({product.rating})</span>
                  </div>
                  <span className="productBrand">By NestFood</span>
                  <div className="priceWrapper d-flex align-items-center">
                    <div>
                    <span className="originalPrice">${product.originalPrice}</span>
                    <span className="currentPrice ms-2">${product.price}</span>
                    </div>
                    <Button className="cartButton ms-2" style={{ backgroundColor: 'transparent', color: 'green', borderColor: 'green' }}>
                      <Image
                        src={cartIcon}
                        alt={`cart`}
                        width={24}
                        height={24}
                        className="cartIcon"
                      />{" "}
                      Add
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
