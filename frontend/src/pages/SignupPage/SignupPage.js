import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from '../../config/firebase-config.js';
import toast from 'react-hot-toast';
import '../SignupPage/SignupPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backendUrl from '../../config/backendUrl.js';

function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (result) => {
          if (result) {
            const { displayName, email } = result;
            setUserData({ displayName, email });
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
    
        return () => unsubscribe();
      }, []);

    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
    // const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const checkUserInDatabase = async (firebaseUserId) => {
        try {
            const response = await axios.get(`${backendUrl}/api/checkUser/${firebaseUserId}`);
            const data = response.data;
    
            return data.exists;
        } catch (error) {
            console.error('Error checking user in the database:', error);
            return false;
        }
    };

    const Google = (e) =>{
        signInWithPopup(auth, provider)
            .then(async(result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUserData({ displayName: user.displayName, email: user.email });
                setIsLoggedIn(true);
                 // Check if the user's ID is in the database
            const isUserInDatabase = await checkUserInDatabase(user.uid);

            if (isUserInDatabase) {
                // User exists in the database, navigate to home ("/")
                navigate('/');
            } else {
                // User does not exist in the database, navigate to user registration ("/userregistration")
                navigate('/userregistration');
            }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const { email, password,firstName,lastName } = formData;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                 // Set the displayName here
                 updateProfile(user, { displayName: `${firstName} ${lastName}` })
                 .then(() => {
                   console.log('User profile updated successfully');
                 })
                 .catch((error) => {
                   console.error('Error updating user profile:', error.message);
                 });
                console.log('User signed up:', user);
                setIsLoggedIn(true);
                toast.success("User Added Successfully",{position:'top-right'});
                navigate('/userregistration');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    };

    return (
        <div className="signup-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
            <input className='signup-input'
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                />
                <input className='signup-input'
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                />
                <input className='signup-input'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@doemail.com"
                />
                <input className='signup-input'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button className="signup-button" type="submit" >Sign Up</button>
            </form>
            <button className="google-sign-in" onClick={Google}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                    Or sign Up with Google
            </button>
        </div>
    );
}

export default SignupPage;
