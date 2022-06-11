import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/navbarCompnent/NavbarComponent";
import PhotosComponentFunction from "./components/photosComponent/PhotosComponentFunction";
// import PhotosComponent from './components/photosComponent/PhotosComponent';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<PhotosComponentFunction />} />
          {/* <PhotosComponent/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
