import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from '@/app/component/headerBar'
import  NavBar  from '@/app/component/navBar';
import Banner from '@/app/component/banner';
import Introduction from '@/app/component/Introduction'
import Services from '@/app/component/services'
import Project from '@/app/component/projects'
export default function page() {
  return (
    <>
    <HeaderBar/>
    <NavBar/>
    <Banner/>
    <Introduction/>
    <Services/>
    <Project/>
    </>
  
  )
}