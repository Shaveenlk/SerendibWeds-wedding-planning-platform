import React, { useState } from 'react';
import '../LoginPage/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handdle submission logic
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
                    <div className="options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember me
                        </label>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit">Sign in</button>

                    <button className="google-sign-in">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
                        Or sign in with Google
                    </button>
                    <p>
                        Don't have an account? <a href="/SignupPage">Sign up now</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
