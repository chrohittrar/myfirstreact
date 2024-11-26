import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Router, Routes } from 'react-router';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Form from './components/AboutUs/Form';

function App() {
  return (
    <div className="App">
       <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Set the route for Home */}
          <Route path="/registration" element={<Register />} /> {/* Set the route for Home */}
          <Route path="/services" element={<Services />} /> {/* Set the route for Home */}
          <Route path="/contact" element={<ContactUs />} /> {/* Set the route for Home */}
          <Route path="/aboutUs" element={<Form/>} /> {/* Set the route for Home */}
        </Routes>
    </div>
  );
}

export default App;
