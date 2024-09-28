"use client";
import { useState, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { MdEmail,MdCloudUpload,MdOutlineAttachFile } from "react-icons/md";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'; // Import the library's CSS
import '@/app/component/auth/register/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store'; // Adjust path as necessary
import { setRegisterFormData } from '@/slice/registerSlice'; // Adjust path as necessary
import Bus from '@/app/utils/eventBus'
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  birthDate: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  gender: string;
  profile: string | null; 
}

interface RegisterProps {
  onSave: (formData: FormData) => void;
}
const Register:React.FC<RegisterProps> = ({onSave}) => {
  const dispatch = useDispatch();
  const formData1 = useSelector((state: RootState) => state.form);
  
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    birthDate: "",
    address: "",
    city: "",
    region: "",
    postalCode: "",
    gender: "male",
    profile: null, // Changed this to null for file input handling
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    onSave(formData)
    Bus.emit('myEvent', { message: 'Hello from Component A!' });
    // Add your form submit logic here
  };


  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "profile" && files.length > 0) {
      const file = files[0];
      const fileURL:any = URL.createObjectURL(file); // Create a temporary URL
      setFormData({ ...formData, profile: fileURL }); // Store the URL in state
      // Optionally, you can also dispatch the action to update Redux state
      dispatch(setRegisterFormData({ profile: fileURL })); // Update the Redux state
    } else {
      setFormData({ ...formData, [name]: value });
    }
    Bus.emit('myEvent', { message: 'Hello from Component A!' });

  };
  
  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, mobile: value });
  };

  return (
    <section className="container">
      <header><b>Registration Form</b></header>
      <Form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Full Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-box">
          <Form.Label>Email Address</Form.Label>
          <div className="inputWithIcon">
            <MdEmail className="emailIcon" />
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="column phoneBirth">
          <div className="input-box">
            <Form.Label>Phone Number</Form.Label>
            <div className="inputWithIcon">
              <PhoneInput
                country={'us'}
                value={formData.mobile}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'mobile',
                  required: true,
                  placeholder: 'Enter phone number',
                }}
                inputClass="form-control"
              />
            </div>
          </div>
          <div className="input-box">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="date"
              name="birthDate"
              placeholder="Enter birth date"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="file-box">
  <Form.Label>Profile Picture</Form.Label>
  <div className="file-upload">
  <label htmlFor="file-input" className="custom-file-upload">
  {formData.profile ? (
    <>
      <MdCloudUpload /> Upload Profile Picture
    </>
  ) : (
    <MdOutlineAttachFile />
  )}
</label>

    <Form.Control
      type="file"
      id="file-input"
      name="profile"
      onChange={handleInputChange}
      className="file-input"
    />
  </div>
</div>


        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <Form.Check
                type="radio"
                id="check-male"
                name="gender"
                label="Male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
              />
            </div>
            <div className="gender">
              <Form.Check
                type="radio"
                id="check-female"
                name="gender"
                label="Female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
              />
            </div>
            <div className="gender">
              <Form.Check
                type="radio"
                id="check-other"
                name="gender"
                label="Prefer not to say"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="input-box address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter street address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <div className="column">
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="column">
            <Form.Control
              type="text"
              name="region"
              placeholder="Enter your region"
              value={formData.region}
              onChange={handleInputChange}
              required
            />
            <Form.Control
              type="text"
              name="postalCode"
              placeholder="Enter postal code"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <Button type="submit" className="submit-btn">
          Save
        </Button>
      </Form>
    </section>
  );
};

export default Register;
