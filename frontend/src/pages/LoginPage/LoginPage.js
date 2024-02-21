import React, { useState,useEffect } from 'react';
import '../LoginPage/LoginPage.css';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,fetchSignInMethodsForEmail} from "firebase/auth";
import auth from '../../config/firebase-config.js';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
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
        // Make a request to your backend to check if the user exists in the database
        // Use the Firebase ID to perform the check
    
        // Example: Assuming you have an API endpoint '/api/checkUser' that checks the user in the database
        try {
          const response = await fetch(`http://localhost:8000/api/checkUser/${firebaseUserId}`);
          const data = await response.json();
    
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
     
const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in
  // const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState({});  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [rememberMe, setRememberMe] = useState(false);
    

    const navigate = useNavigate();
const provider = new GoogleAuthProvider();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handdle submission logic
        const auth = getAuth();
        // const { email, password } = formData;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed up:', user);
                setIsLoggedIn(true);
                toast.success("User Logged In Successfully",{position:'top-right'});
                checkUserInDatabase(user.uid);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            });
    };
    

    const Google = (e) =>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(async(result)  => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const email = user.email;
                setUserData({ displayName: user.displayName, email: user.email });
                setIsLoggedIn(true);

                checkUserInDatabase(user.uid);
              }
            ).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage, { position: 'top-center' });
            })
    }

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
