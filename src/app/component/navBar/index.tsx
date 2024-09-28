'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/component/navBar/style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import searchIcon from '@/app/assets/icons/search.png';
import cartIcon from '@/app/assets/icons/cart.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const navigateToShop = () => {
    router.push('/shop'); // Navigate to the shop page
  };
  const navigateToauth = () => {
    router.push('/auth'); // Navigate to the shop page
  };
  return (
    <div className="navWrapper">
      <Container fluid="lg" className='custom-container'>
        <Row className="justify-content-md-center">
          <Col xs={12} md={1}>
            <DropdownButton id="dropdown-item-button" title="Home" className="custom-dropdown">
              <Dropdown.Item as="button" className="hidden-button" onClick={navigateToauth}>auth</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col xs={12} md={1} className="withoutDropDownWrapper">
            <div className='withoutDropDown'>About</div>
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
            </DropdownButton>
          </Col>

          <Col xs={12} md={1}>
            <DropdownButton id="dropdown-item-button" title="News" className="custom-dropdown">
              <Dropdown.Item as="button" className="hidden-button">Action</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col xs={12} md={1}>
            <DropdownButton id="dropdown-item-button" title="Shop" className="custom-dropdown">
              <Dropdown.Item as="button" className="hidden-button" onClick={navigateToShop}>Shop</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Another action</Dropdown.Item>
              <Dropdown.Item as="button" className="hidden-button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col xs={12} md={1} className="withoutDropDownWrapper">
            <span className='withoutDropDown'>Contact</span>
          </Col>

          <Col md={4}>
            <div className='IconWrapper d-flex gap-3 justify-content-end'>
              <div className="searchIcon">
                <Image src={searchIcon} alt='searchIcon' width={20} height={20} />
              </div>
              <div className="cartIcon">
                <Image src={cartIcon} alt='cartIcon' width={20} height={20} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
