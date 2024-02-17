import React, { useState } from 'react';
import '../UserRegistrationPage/UserRegistrationForm.css'; // Import CSS file
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const UserRegistrationForm = () => {
    const navigate = useNavigate();
    const [userFormState, setUserFormState] = useState({
        groom_name: '',
        bride_name: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormState({
            ...userFormState,
            [name]: value
        });
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        // submitting vendor form details to backend
        try {
            // Make a POST request to the backend API
            const response = await axios.post('http://localhost:8000/api/createuser', userFormState);

            // Log the response from the backend
            toast.success("User profile created Sucessfully",{position:'top-right'})
            navigate('/')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    

    return (
        <div className="vendor-form">
            <div className="form-section">
                <h1>Wedding User Registration Form</h1>
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
                

                {/* Submit Button */}
                <button className="submit-button" type="submit">Submit</button>
            </form>
    </div>
    )
};
    

export default UserRegistrationForm
