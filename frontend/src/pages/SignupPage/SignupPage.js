import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import auth from '../../config/firebase-config.js';
import toast from 'react-hot-toast';
import '../SignupPage/SignupPage.css';
import { useNavigate } from 'react-router-dom';

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

    const Google = (e) =>{
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUserData({ displayName: user.displayName, email: user.email });
                setIsLoggedIn(true);
                navigate('/');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const { email, password } = formData;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed up:', user);
                setIsLoggedIn(true);
                toast.success("User Added Successfully",{position:'top-right'});
                navigate('/');
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
