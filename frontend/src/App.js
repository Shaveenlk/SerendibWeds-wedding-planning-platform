import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Tabcomp from './components/Tabcomp';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import VendorsProfile from './pages/vendorsprofilepage/VendorsProfile';
import UserRegistrationForm from './pages/UserRegistrationPage/UserRegistrationForm';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './config/firebase-config'; 
import VendorLogin from './pages/VendorLogin/vendorlogin';
import Vendortabcomp from './components/Vendortabcomp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email, uid } = result;
        setUser({ displayName, email, firebaseUserId: uid });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {user ? (//routes for authenticated users
          <> 
            <Route path="/profile" element={<Tabcomp firebaseUserId={user?.firebaseUserId} />} />
            <Route path="/services/booking" element={<div>lol</div>}  />
            <Route path="/userregistration" element={<UserRegistrationForm firebaseUserId={user?.firebaseUserId}/>}  />
            <Route path="/vendorprofile/:id" element={<VendorsProfile firebaseUserId={user?.firebaseUserId}/>} />
          </>
        ) :  (
           //routes for unauthenticated users redirect to another pages
          <>
          <Route path="/profile" element={<Navigate to="/login" />} />
          <Route path="/vendorprofile/:id" element={<Navigate to="/login" />}/>
          <Route path="/userregistration" element={<Navigate to="/" />} />
          {/* <Route path="/services/booking" element={<Navigate to="/login" />} /> */}
          </>
        )}
        <Route path="/dreamsearch" element={<SearchPage/>}/>
        <Route path="/eventdetails" element={<GalleryPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        {/* <Route path="/vendorprofile" element={<VendorsProfile/>}/> */}
     
        <Route path="/vendorlogin" element={<VendorLogin/>}/>
        {/* <Route path="/vendorprofile" element={<Vendortabcomp vendorId={vendorData._id}/>}/> */}
        <Route path="/vendorsprofile/:id" element={<Vendortabcomp/>}/>
      </Routes>
    </div>
  );
}

export default App;
