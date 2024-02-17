import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Tabcomp from './components/Tabcomp';
import UserRegistrationForm from './pages/UserRegistrationPage/UserRegistrationForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/profile" element={<Tabcomp/>} />
        <Route path="/userregistration" element={<UserRegistrationForm/>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
