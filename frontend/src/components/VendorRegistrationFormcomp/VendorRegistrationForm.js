import React, { useState } from 'react';
import './VendorRegistrationForm.css';
import axios from 'axios';
import backendUrl from '../../config/backendUrl';

function VendorRegistrationForm() {
    const [vendorFormState, setVendorFormState] = useState({
        businessName: '',
        servicesProvided: [],
        yearsOfExperience: '',
        hasBusinessLicense: '',
        contactNumber: '',
        emailAddress: '',
        businessLocation: '',
        onlinePortfolio: ''
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setVendorFormState((prevFormState) => ({
                ...prevFormState,
                servicesProvided: checked
                    ? [...prevFormState.servicesProvided, value]
                    : prevFormState.servicesProvided.filter((service) => service !== value)
            }));
        } else if (type === "radio") {
            setVendorFormState({
                ...vendorFormState,
                [name]: value
            });
        } else {
            setVendorFormState({
                ...vendorFormState,
                [name]: value
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post(`${backendUrl}/api/vendors/register`, vendorFormState)
        
        .then(response => {
            console.log('Success:', response.data);
        })
        .catch(error => {
            // If the request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response) {
                // Handle application-specific error responses here
                const errorMessage = error.response.data.message || "An error occurred";
                throw new Error(errorMessage);
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                throw new Error('No response from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                throw new Error(error.message);
            }
        });
    };
    

    return (
        <div className="vendor-form" id="form">
            <div className="form-section">
                <h1>SerendibWeds - Vendor Registration Form</h1>
                <p>Join our network of esteemed wedding professionals. Please fill out this form with details about your services and experience. Our team will review your submission and reach out to discuss potential collaboration. We look forward to creating beautiful weddings together!</p>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Business Name */}
                <div className="form-section">
                    <label>What is the name of your business?</label>
                    <input type="text" name="businessName" onChange={handleInputChange} />
                </div>
                
                {/* Services Provided */}
            <div className="form-section">
                <label>What services do you provide? (Select all that apply)</label>
                <div className="form-options">
                    <label><input type="checkbox" name="servicesProvided" value="Catering" onChange={handleInputChange} /> Catering</label>
                    <label><input type="checkbox" name="servicesProvided" value="Photography/Videography" onChange={handleInputChange} /> Photography/Videography</label>
                    <label><input type="checkbox" name="servicesProvided" value="Music/DJ Services" onChange={handleInputChange} /> Music/DJ Services</label>
                    <label><input type="checkbox" name="servicesProvided" value="Floral and Decor" onChange={handleInputChange} /> Floral and Decor</label>
                    <label><input type="checkbox" name="servicesProvided" value="Other" onChange={handleInputChange} /> Other (Please specify)</label>
                </div>
            </div>

            {/* Years of Experience */}
            <div className="form-section">
                <label>How many years of experience do you have in the wedding industry?</label>
                <div className="form-options">
                    <label><input type="radio" name="yearsOfExperience" value="Less than 1 year" onChange={handleInputChange} /> Less than 1 year</label>
                    <label><input type="radio" name="yearsOfExperience" value="1-3 years" onChange={handleInputChange} /> 1-3 years</label>
                    <label><input type="radio" name="yearsOfExperience" value="4-6 years" onChange={handleInputChange} /> 4-6 years</label>
                    <label><input type="radio" name="yearsOfExperience" value="7-10 years" onChange={handleInputChange} /> 7-10 years</label>
                    <label><input type="radio" name="yearsOfExperience" value="More than 10 years" onChange={handleInputChange} /> More than 10 years</label>
                </div>
            </div>

            {/* Business License */}
            <div className="form-section">
                <label>Do you have a business license?</label>
                <div className="form-options">
                    <label><input type="radio" name="hasBusinessLicense" value="Yes" onChange={handleInputChange} /> Yes</label>
                    <label><input type="radio" name="hasBusinessLicense" value="No" onChange={handleInputChange} /> No</label>
                </div>
            </div>
              
                {/* Contact Number */}
                <div className="form-section">
                    <label>What is your primary contact number?</label>
                    <input type="text" name="contactNumber" onChange={handleInputChange} />
                </div>
                
                {/* Email Address */}
                <div className="form-section">
                    <label>What is your email address?</label>
                    <input type="email" name="emailAddress" onChange={handleInputChange} />
                </div>
                
                {/* Business Location */}
                <div className="form-section">
                    <label>Where is your business located? (Address)</label>
                    <input type="text" name="businessLocation" onChange={handleInputChange} />
                </div>
                
                {/* Online Portfolio */}
                <div className="form-section">
                    <label>Do you have a website or online portfolio? (Please provide URL)</label>
                    <input type="text" name="onlinePortfolio" onChange={handleInputChange} />
                </div>
                
                {/* Submit Button */}
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default VendorRegistrationForm;
