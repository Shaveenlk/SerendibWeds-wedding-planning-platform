import React, { useState } from 'react';
import '../UserRegistrationPage/UserRegistrationForm.css'; // Import CSS file


const UserRegistrationForm = () => {
    const [vendorFormState, setVendorFormState] = useState({
        groom_name: '',
        bride_name: '',
        email: '',
        profile_picture: '',
        wedding_date: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVendorFormState({
            ...vendorFormState,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // submitting vendor form details to backend
        console.log(vendorFormState);
    };

    return (
        <div className="vendor-form">
            <div className="form-section">
                <h1>Wedding Vendor Registration Form</h1>
                <p>Please fill out the following details:</p>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Groom's Name */}
                <div className="form-section">
                    <label>Groom's Name:</label>
                    <input type="text" name="groom_name" onChange={handleInputChange} />
                </div>
                
                {/* Bride's Name */}
                <div className="form-section">
                    <label>Bride's Name:</label>
                    <input type="text" name="bride_name" onChange={handleInputChange} />
                </div>
                
                {/* Email */}
                <div className="form-section">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleInputChange} />
                </div>
                
                {/* Profile Picture */}
                <div className="form-section">
                    <label>Profile Picture:</label>
                    <input type="file" name="profile_picture" onChange={handleInputChange} />
                </div>
                
                {/* Wedding Date */}
                <div className="form-section">
                    <label>Wedding Date:</label>
                    <input type="date" name="wedding_date" onChange={handleInputChange} />
                </div>
                
                {/* Submit Button */}
                <button className="submit-button" type="submit">Submit</button>
            </form>
    </div>
    )
}

export default UserRegistrationForm
