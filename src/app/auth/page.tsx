"use client";

import React, { useState, useEffect } from "react";
import Modal from "@/app/component/Modals";
import "@/app/auth/style.css";
import Otp from "@/app/component/auth/Otp"
import AddPassword from "@/app/component/auth/addPassword" 
import LoginForm from "@/app/component/auth/Login";
import RegisterForm from '@/app/component/auth/register'
import Bus from '@/app/utils/eventBus'


const Home: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false); // Start as false
  const [isHydrated, setIsHydrated] = useState(false); // To track hydration
  const [auth,setAuth]=useState('login')
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsHydrated(true);
    setShowLoginModal(true);
  }, []);
  useEffect(() => {
    const handleMyEvent = (data: { message: string }) => {
      console.error("dattaata!!!!!!!!!!!1",data)  
      setMessage(data.message);
    };

    // Subscribe to the event
    Bus.on('myEvent', handleMyEvent);

    // Cleanup the subscription on unmount
    return () => {
      Bus.off('myEvent', handleMyEvent);
    };
  }, []);
  const closeLoginModal = () => setShowLoginModal(false);
  const change=(data:string)=>{
    setAuth(data)
  }
  const handleSave = () => {
    console.log("Form Data Submitted:");
    setAuth('otp')
    // Close the modal or perform any other actions
  };
  const handleOTPSave = () => {
    console.log("Form Data Submitted:");
    setAuth('password')
    // Close the modal or perform any other actions
  };
  handleOTPSave
  if (!isHydrated) {
    return null; // Avoid rendering until component is hydrated
  }

  return (
    <>
    {/* <HeaderBar /> */}
  
    {auth === 'login' && ( // Correct the conditional check
      <div className="container text-center loginContainer">
        <Modal
          className="loginModal"
          show={showLoginModal}
          handleClose={closeLoginModal}
          size="lg"
          // headerSlot={<h2>Login to Your Account</h2>}
          bodySlot={<LoginForm />} // Ensure LoginForm is properly designed
          footerSlot={<button onClick={() => change('register')}>Register</button>}
        />
      </div>
    ) 
   }
    {auth === 'register' &&  (
      <div className="container text-center Register">
        <Modal
          className="registerModal"
          show={showLoginModal}
          handleClose={closeLoginModal}
          size="lg"
          // headerSlot={<h2>Login to Your Account</h2>}
          bodySlot={<RegisterForm onSave={handleSave} />} // Ensure LoginForm is properly designed
          footerSlot={<button onClick={() => change('login')}>Login</button>}
        />
      </div>
    )}
      {auth === 'otp' &&  (
      <div className="container text-center Otp">
        <Modal
          className="otpModal"
          show={showLoginModal}
          handleClose={closeLoginModal}
          size={"lg"}
          bodySlot={<Otp onSave={handleOTPSave} />} // Ensure LoginForm is properly designed
        />
      </div>
    )}
    {auth === 'password' &&  (
      <div className="container text-center Otp">
        <Modal
          className="otpModal"
          show={showLoginModal}
          handleClose={closeLoginModal}
          size={"lg"}
          bodySlot={<AddPassword />} // Ensure LoginForm is properly designed
        />
      </div>
    )}



    {/* <Footer /> */}
  </>
  
  );
};

export default Home;
