import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

// Import Pages
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import HealthTips from './pages/HealthTips';
import Gallery from './pages/Gallery';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// App component (Main container)
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-50 font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// 1. Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-sky-700">
            <FontAwesomeIcon icon={faStethoscope} className="text-3xl" />
            <span className="font-heading"> KidzCare  Pedia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">Home</Link>
            {isHome && (
              <>
                <a href="#services" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">Services</a>
                <a href="#about" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">About</a>
              </>
            )}
            <Link to="/testimonials" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">Testimonials</Link>
            <Link to="/faq" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">FAQ</Link>
            <Link to="/health-tips" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">Health Tips</Link>
            <Link to="/gallery" className="text-slate-600 hover:text-sky-600 transition duration-300 font-medium">Gallery</Link>

            <a
              href="/#appointment"
              className="bg-amber-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link to="/" onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 font-medium">Home</Link>
            <Link to="/testimonials" onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 font-medium">Testimonials</Link>
            <Link to="/faq" onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 font-medium">FAQ</Link>
            <Link to="/health-tips" onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 font-medium">Health Tips</Link>
            <Link to="/gallery" onClick={toggleMenu} className="text-slate-600 hover:text-sky-600 font-medium">Gallery</Link>
            <a href="/#appointment" onClick={toggleMenu} className="bg-amber-400 text-white font-semibold px-6 py-2 rounded-full hover:bg-amber-500 inline-block text-center">
              Book Appointment
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// 6. Footer
function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-20 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">KidzCare Pedia</h3>
          <p className="mb-4">
            Providing the highest quality care for your little ones.
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} KidzCare Pedia. All rights reserved.</p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sky-400 mt-1" />
              <span>123 Blossom Lane, Sunnyville, CA 98765</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-sky-400" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-sky-400" />
              <span>info@kidzcare.com</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Hours */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Clinic Hours</h3>
          <ul className="space-y-2">
            <li><span className="font-semibold text-slate-300">Monday - Friday:</span> 9:00 AM - 5:00 PM</li>
            <li><span className="font-semibold text-slate-300">Saturday:</span> 10:00 AM - 2:00 PM</li>
            <li><span className="font-semibold text-slate-300">Sunday:</span> Closed</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}