import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from '@/app/component/headerBar'
import  NavBar  from '@/app/component/navBar';
import Banner from '@/app/component/banner';
import Product from '@/app/component/products'
import Introduction from '@/app/component/Introduction'
import Services from '@/app/component/services'
import Project from '@/app/component/projects'
import Testimonial from '@/app/component/testimonial'
import News from '@/app/component/news'
import Footer from '@/app/component/footer'
export default function page() {
  return (
    <>
    <HeaderBar/>
    <NavBar/>
    <Banner/>
    <Product/>

   <Footer/>
    </>
  
  )
}