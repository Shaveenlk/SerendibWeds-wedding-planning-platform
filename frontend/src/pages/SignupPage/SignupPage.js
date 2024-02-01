import React, { useState } from 'react';
import '../SignupPage/SignupPage.css';

function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handling the Signup logic
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
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
                <input className='signup-input'
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Reenter password"
                />
                <button className="signup-button" type="submit">Sign Up</button>
                

                <button className="google-sign-in">
                        {/* file in the icons folder was not used habai */}
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                        Or sign Up with Google
                    </button>
                <p className="forgot-password">Forgot password?</p>
            </form>
        </div>
    );
}

export default SignupPage;
