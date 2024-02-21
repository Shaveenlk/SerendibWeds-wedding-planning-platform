import React, { useState } from 'react';
import '../UserRegistrationPage/UserRegistrationForm.css'; // Import CSS file
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const UserRegistrationForm = ({firebaseUserId}) => {
    const navigate = useNavigate();
    const [userFormState, setUserFormState] = useState({
        FirebaseUserId: firebaseUserId,
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        // submitting vendor form details to backend
        try {
            // Generate todo list based on the form data
            const todoList = generateTodoList(userFormState);
    
            // Include the todo list in the request
            const userDataWithTodoList = {
                firebaseUserId: firebaseUserId,
                groom_name: userFormState.groom_name,
                bride_name: userFormState.bride_name,
                email: userFormState.email,
                todolist: todoList
            };
            console.log(userDataWithTodoList);
    
            // Make a POST request to the backend API
            const response = await axios.post('http://localhost:8000/api/createuser', userDataWithTodoList);
            // console.log('Response from backend:', response.data);
    
            // Log the response from the backend
            toast.success("User profile created successfully", { position: 'top-right' })
            navigate('/')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    
    
    const rules = {
        marriageLicense: {
          b:"Obatin the license for the marriage",
        },
        venue: {
            a: "Book a reception hall/ hotel of your choice",
            b: "Get Permission from the relevant authorities to hold the wedding at the specific public place" ,
            c: "Finalize the catering services and the decorations suitable for the home"
        },
        musicalBand: {
            a: "Decide the band that you want at your wedding, book them and make the relevant payments",
            c: "Decide whether you want a band at your wedding"
        },
        florist: {
          a: "Hire a florist for the wedding",
          c: "Finalize whether you want a florist at your wedding"
        },
        weddingStyle: {
          a: "Hire vendors and choose the decorations that suit the theme and the style of your wedding",
          c: "Go to the dream search and decide on a theme that suits you"
        },
        attire: {
          b: "Choose the style of your attires based on your traditions and desires",
        },
        guestList: {
          b: "Hand out the invitations for your wedding to all the guests",
          c: "Work on deciding the guests and finalizing the guest list"
        },
        invitationMethod: {
          a: "Design the invitation that you are going to send",
          b: "Hire a person to design, print and distribute the wedding cards"
        }
      };



    const generateTodoList = (userFormState) => {
        const todoList = ["Set the wedding date","Set the wedding budget","Decide on the wedding favours","Order a wedding cake structure","Finalize the seating plan of guests"];
      
        // Marriage License
        if (userFormState.marriage_license === 'No') {
          todoList.push(rules.marriageLicense.b);
        } else if (userFormState.marriage_license === 'Yes') {
          
        }
      
        // Venue
        if (userFormState.venue === 'Reception hall/hotel') {
          todoList.push(rules.venue.a);
        } else if (userFormState.venue === 'Public place') {
          todoList.push(rules.venue.b);
        }else if (userFormState.venue === 'At home') {
          todoList.push(rules.venue.c);
        }
      
        // Musical Band
        if (userFormState.musical_band === 'Yes') {
          todoList.push(rules.musicalBand.a);
        }else if (userFormState.musical_band === 'No') {
          
        } else if (userFormState.musical_band === 'Undecided') {
          todoList.push(rules.musicalBand.c);
        }
      
        // Florist
        if (userFormState.florist === 'Yes') {
          todoList.push(rules.florist.a);
        } else if (userFormState.florist === 'No') {
          ;
        } else if (userFormState.florist === 'Still considering options') {
          todoList.push(rules.florist.c);
        }
      
        // Wedding Style
        if (userFormState.wedding_style === 'Yes') {
          todoList.push(rules.weddingStyle.a);
        } else if (userFormState.wedding_style === 'No') {
          
        } else if (userFormState.wedding_style === 'We are still deciding on a theme') {
          todoList.push(rules.weddingStyle.c);
        }
      
        // Attire
        if (userFormState.attire === 'Yes') {
         
        } else if (userFormState.attire === 'No') {
            todoList.push(rules.attire.b);
        }
      
        // Guest List
        if (userFormState.guest_list === 'Yes, guest list finalized') {
          todoList.push(rules.guestList.b);
        } else if (userFormState.guest_list === 'No, still working on it') {
          todoList.push(rules.guestList.c);
        }
      
        // Invitation Method
        if (userFormState.invite_method === "Via RSVPs") {
          todoList.push(rules.invitationMethod.a);
        }else if (userFormState.invite_method === "Invitation cards") {
          todoList.push(rules.invitationMethod.b);
        }
      
        return todoList;
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

                {/* Marriage License */}
                <div className="form-section">
                    <label>Have you registered your marriage yet?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="marriage_license_yes" name="marriage_license" value="Yes" onChange={handleInputChange} />
                            Yes
                        </label>
                        <label>
                            <input type="radio" id="marriage_license_no" name="marriage_license" value="No" onChange={handleInputChange} />
                            No
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
                            Yes, I want a band at my wedding
                        </label>
                        <label>
                            <input type="radio" id="musical_band_no" name="musical_band" value="No" onChange={handleInputChange} />
                            No, I do not want a band at my wedding
                        </label>
                        <label>
                            <input type="radio" id="musical_band_undecided" name="musical_band" value="Undecided" onChange={handleInputChange} />
                            Still deciding if I want a band at my wedding
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
                            No, a friend/relative is taking care of flora
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
                            No, we do not have a specific theme
                        </label>
                        <label>
                            <input type="radio" id="wedding_style_deciding" name="wedding_style" value="We are still deciding on a theme" onChange={handleInputChange} />
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
                            No, we are still deciding 
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
                    </div>
                </div>

                {/* Invite Method */}
                <div className="form-section">
                    <label>How do you plan to invite your guests?</label>
                    <div className="form-options">
                        <label>
                            <input type="radio" id="invite_method_rsvps" name="invite_method" value="Via RSVPs" onChange={handleInputChange} />
                            Sending invitations online
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
                );
    }                
                
export default UserRegistrationForm