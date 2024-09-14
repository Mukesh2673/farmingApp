'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/component/navBar/style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import logo from '@/app/assets/icons/logo.png';
import fbIcon from '@/app/assets/icons/socialIcon/facebook.png';
import instaIcon from '@/app/assets/icons/socialIcon/instagram.png';
import twitterIcon from '@/app/assets/icons/socialIcon/twitter.png';
import printrestIcon from '@/app/assets/icons/socialIcon/printrest.png';
import telephone from '@/app/assets/icons/telephone.png';
import email from '@/app/assets/icons/message.png';
import locationIcon from '@/app/assets/icons/mapIcon.png';
import searchIcon from '@/app/assets/icons/search.png';
import cartIcon from '@/app/assets/icons/cart.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Page() {
  return (
    <div className="navWrapper">
    <Container fluid="lg" className='custom-container'>
      <Row className="justify-content-md-center">
        <Col xs={12} md={1}>
          <DropdownButton id="dropdown-item-button" title="Home" className="custom-dropdown">
  <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
</DropdownButton>

        </Col>
        <Col xs={12} md={1}>
          About
        </Col>
        <Col xs={12} md={1}>
        <DropdownButton id="dropdown-item-button" title="Services" className="custom-dropdown">
  <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
</DropdownButton>
        </Col>
        <Col xs={12} md={1}>
        <DropdownButton id="dropdown-item-button" title="Projects" className="custom-dropdown">
  <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
</DropdownButton>        </Col>
        <Col xs={12} md={1}>
        <DropdownButton id="dropdown-item-button" title="News" className="custom-dropdown">
  <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
</DropdownButton>           </Col>
        <Col xs={12} md={1}>
        <DropdownButton id="dropdown-item-button" title="Shop" className="custom-dropdown">
  <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
  <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
</DropdownButton>          </Col>
        <Col xs={12} md={1}>
          Contact
        </Col>

        <Col md={4}>
          <div className='IconWrapper d-flex gap-3 justify-content-end'>
            <div className="searchIcon">
              <Image src={searchIcon} alt='searchIcon' width={20} height={20}/>
            </div>
            <div className="cartIcon">
              <Image src={cartIcon} alt='cartIcon' width={20} height={20}/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
