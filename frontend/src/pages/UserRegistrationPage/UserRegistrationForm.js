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
        marriage_license: '',
        venue: '',
        musical_band: '',
        florist: '',
        wedding_style: '',
        attire: '',
        guest_list: '',
        invite_method: ''
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

                <div className="form-section">
                    <label>Are you interested in additional services? Select all that apply</label>
                    <div className="form-options">
                        <label><input type="radio" name="service" value="Wedding Coordination" onChange={handleInputChange} /> Wedding Coordination</label>
                        <label><input type="radio" name="service" value="Floral Arrangements" onChange={handleInputChange} /> Floral Arrangements</label>
                        <label><input type="radio" name="service" value="Special Lighting" onChange={handleInputChange} /> Special Lighting</label>
                        <label><input type="radio" name="service" value="None" onChange={handleInputChange} /> None</label>
                    </div>
                </div>

                {/* Marriage License */}
                <div className="form-section">
                    <label>Have you obtained or applied for a marriage license yet?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="marriage_license_yes" name="marriage_license" value="Yes" onChange={handleInputChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="marriage_license_no" name="marriage_license" value="No" onChange={handleInputChange} />
                            No
                        </label>
                        <label>
                            <input type="radio" id="marriage_license_planning" name="marriage_license" value="Planning to apply soon" onChange={handleInputChange} />
                            Not yet, but planning to apply soon
                        </label>
                    </div>
                </div>

                {/* Venue */}
                <div className="form-section">
                    <label>What is the venue that you are planning to have your wedding on?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="venue_reception" name="venue" value="Reception hall/hotel" onChange={handleInputChange} />
                            Reception hall/hotel
                        </label>
                        <label>
                            <input type="radio" id="venue_public" name="venue" value="Public place" onChange={handleInputChange} />
                            Public place
                        </label>
                        <label>
                            <input type="radio" id="venue_home" name="venue" value="At home" onChange={handleInputChange} />
                            At home
                        </label>
                    </div>
                </div>

                {/* Musical Band */}
                <div className="form-section">
                    <label>Do you plan on having a musical band at your wedding?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="musical_band_yes" name="musical_band" value="Yes" onChange={handleInputChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="musical_band_no" name="musical_band" value="No" onChange={handleInputChange} />
                            No
                        </label>
                        <label>
                            <input type="radio" id="musical_band_undecided" name="musical_band" value="Undecided" onChange={handleInputChange} />
                            Undecided
                        </label>
                    </div>
                </div>

                {/* Florist */}
                <div className="form-section">
                    <label>Are you planning on hiring a florist for the wedding?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="florist_yes" name="florist" value="Yes" onChange={handleInputChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="florist_no" name="florist" value="No" onChange={handleInputChange} />
                            No
                        </label>
                        <label>
                            <input type="radio" id="florist_considering" name="florist" value="Still considering options" onChange={handleInputChange} />
                            Still considering options
                        </label>
                    </div>
                </div>

                {/* Wedding Style/Theme */}
                <div className="form-section">
                    <label>Is your wedding based on any specific style or theme?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="wedding_style_yes" name="wedding_style" value="Yes" onChange={handleInputChange} />
                            Yes, we have a specific theme
                        </label>
                        <label>
                            <input type="radio" id="wedding_style_no" name="wedding_style" value="No" onChange={handleInputChange} />
                            No, it's traditional
                        </label>
                        <label>
                            <input type="radio" id="wedding_style_deciding" name="wedding_style" value="We're still deciding on a theme" onChange={handleInputChange} />
                            We're still deciding on a theme
                        </label>
                    </div>
                </div>

                {/* Attire */}
                <div className="form-section">
                    <label>Have you chosen an attire for your wedding yet?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="attire_yes" name="attire" value="Yes" onChange={handleInputChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="attire_no" name="attire" value="No" onChange={handleInputChange} />
                            No
                        </label>
                        <label>
                            <input type="radio" id="attire_deciding" name="attire" value="In the process of deciding" onChange={handleInputChange} />
                            In the process of deciding
                        </label>
                    </div>
                </div>

                {/* Guest List */}
                <div className="form-section">
                    <label>Have you already decided whom to invite for your wedding?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="guest_list_finalized" name="guest_list" value="Yes, guest list finalized" onChange={handleInputChange} />
                            Yes, guest list finalized
                        </label>
                        <label>
                            <input type="radio" id="guest_list_working" name="guest_list" value="No, still working on it" onChange={handleInputChange} />
                            No, still working on it
                        </label>
                        <label>
                            <input type="radio" id="guest_list_partial" name="guest_list" value="Partially decided" onChange={handleInputChange} />
                            Partially decided
                        </label>
                    </div>
                </div>

                {/* Invite Method */}
                <div className="form-section">
                    <label>How do you plan to invite your guests?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="invite_method_rsvps" name="invite_method" value="Via RSVPs" onChange={handleInputChange} />
                            Via RSVPs
                        </label>
                        <label>
                            <input type="radio" id="invite_method_cards" name="invite_method" value="Invitation cards" onChange={handleInputChange} />
                            Invitation cards
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button className="submit-button" type="submit">Submit</button>
                </form>
                </div>
                )
                };

                export default UserRegistrationForm
