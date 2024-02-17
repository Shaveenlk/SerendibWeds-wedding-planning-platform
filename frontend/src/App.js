import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Tabcomp from './components/Tabcomp';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import VendorsProfile from './pages/vendorsprofilepage/VendorsProfile';
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
        <Route path="/dreamsearch" element={<SearchPage/>}/>
        <Route path="/eventdetails" element={<GalleryPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/vendorprofile" element={<VendorsProfile/>}/>

      </Routes>
    </div>
  );
}

export default App;
