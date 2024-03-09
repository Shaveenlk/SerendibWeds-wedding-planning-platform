import React, { useState, useEffect } from 'react';
import '../LoginPage/LoginPage.css';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import auth from '../../config/firebase-config.js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
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
            const response = await axios.get(`http://localhost:8000/api/checkUser/${firebaseUserId}`);
            
            const data = response.data; // Use response.data instead of response.json()
            
            if (data.exists) {
                // User exists in the database, navigate to the home page or another authorized route
                navigate('/');
            } else {
                // User does not exist in the database, redirect to the user registration page
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
                checkUserInDatabase(user.uid); // Move this line here
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    };

    const Google = () => {
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
                toast.error(errorMessage, { position: 'top-center' });
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

                    <button className="google-sign-in" onClick={Google}>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                        Or sign in with Google
                    </button>
                    <p>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
