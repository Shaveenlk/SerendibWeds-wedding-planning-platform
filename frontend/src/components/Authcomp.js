// AuthComponent.js
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import auth from '../config/firebase-config';
import toast from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Authcomp = ({ isVendor }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

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

    const checkUserInDatabase = async (firebaseUserId) => {
        try {
            const vendorResponse = await axios.get(`http://localhost:8000/api/checkvendor/${firebaseUserId}`);
            const vendorData = vendorResponse.data;

            // Check if the user is a regular user
            const userResponse = await axios.get(`http://localhost:8000/api/checkUser/${firebaseUserId}`);
            const userData = userResponse.data;

            if (vendorData.exists) {
                navigate(`/vendorsprofile/${vendorData._id}`);
            } else if (userData.exists) {
                // User exists as a regular user, navigate based on your user flow
                navigate('/');
            } else {
                // User does not exist in either collection, redirect to the user registration page
                navigate('/userregistration');
            }
        } catch (error) {
            console.error('Error checking user in the database:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const authInstance = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true);
                toast.success("User Logged In Successfully", { position: 'top-right' });
                checkUserInDatabase(user.uid);
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    };

    const handleGoogleSignIn = () => {
        const authInstance = getAuth();
        signInWithPopup(authInstance, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(user);
                setUserData({ displayName: user.displayName, email: user.email });
                setIsLoggedIn(true);
                checkUserInDatabase(user.uid);
            })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(errorMessage, { position: 'top-center' });
            });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Welcome to SerendibWeds,</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email or phone number"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit">Sign in</button>

                    {isVendor ? (
                        <p>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    ) : (
                        <button className="google-sign-in" onClick={handleGoogleSignIn}>
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                            Or sign in with Google
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Authcomp;
