import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStethoscope,
    faSyringe,
    faBaby,
    faUserDoctor,
    faCalendarCheck,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import facultyImage from '../assets/Images/facultyDataImages11.webp';

// Hero Section
function Hero() {
    return (
        <section id="home" className="relative bg-linear-to-br from-sky-100 to-sky-200 overflow-hidden pt-24 pb-32 px-6">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Compassionate Care for Your Little Ones
                    </motion.h1>
                    <p className="text-xl text-slate-700 mb-10">
                        Expert pediatric services to ensure your child's health and happiness from infancy through adolescence.
                    </p>
                    <a
                        href="#appointment"
                        className="bg-sky-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
                    >
                        <span>Schedule a Visit</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        <div className="relative">
                            <img
                                src={facultyImage}
                                alt="Dr. Emily Carter"
                                className="rounded-full w-96 h-96 object-cover object-top shadow-2xl border-8 border-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Services Section
function Services() {
    const services = [
        {
            icon: faStethoscope,
            title: "Well-Child Checkups",
            desc: "Routine exams to track growth, development, and answer your questions."
        },
        {
            icon: faSyringe,
            title: "Vaccinations",
            desc: "Keeping your child safe and up-to-date with all recommended immunizations."
        },
        {
            icon: faBaby,
            title: "Newborn & Infant Care",
            desc: "Specialized care for the newest member of your family, from birth onwards."
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
                    We offer a comprehensive range of pediatric services to support your child's health at every stage.
                </p>
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                            <div className="bg-sky-100 text-sky-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={service.icon} className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// About the Doctor
function About() {
    return (
        <section id="about" className="py-24 bg-sky-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/3 flex justify-center">
                    <div className="bg-linear-to-br from-sky-500 to-sky-700 rounded-2xl p-1.5 shadow-2xl transform rotate-3">
                        <div className="bg-sky-600 rounded-xl p-8 text-white text-center">
                            <FontAwesomeIcon icon={faUserDoctor} className="text-6xl mb-4" />
                            <h3 className="text-3xl font-bold">Dr. Emily Carter</h3>
                            <p className="text-sky-100 text-lg">Board-Certified Pediatrician</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">Meet Dr. Carter</h2>
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                        Dr. Emily Carter is a board-certified pediatrician with over 15 years of experience in child and adolescent medicine. She completed her residency at the Children's Hospital of Hope and is passionate about creating a welcoming, stress-free environment for her patients.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-sky-500 pl-6 italic">
                        "My philosophy is simple: treat every child as if they were my own. I believe in partnering with parents to provide the best possible care, from the newborn stage through the college years."
                    </p>
                </div>
            </div>
        </section>
    );
}

// Appointment Form
function AppointmentForm() {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        date: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        setFormSubmitted(true);
        setFormData({
            parentName: '',
            childName: '',
            email: '',
            phone: '',
            date: '',
            message: '',
        });
    };

    return (
        <section id="appointment" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">Request an Appointment</h2>

                {formSubmitted ? (
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                        <p className="text-lg">Your request has been sent. We will contact you shortly to confirm.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl space-y-6 border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-slate-700 font-medium mb-2 block">Your Name (Parent)</label>
                                <input
                                    type="text"
                                    name="parentName"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-slate-700 font-medium mb-2 block">Child's Name</label>
                                <input
                                    type="text"
                                    name="childName"
                                    value={formData.childName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-slate-700 font-medium mb-2 block">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-slate-700 font-medium mb-2 block">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-slate-700 font-medium mb-2 block">Preferred Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-slate-700 font-medium mb-2 block">Reason for Visit (optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-sky-500 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-linear-to-r from-sky-600 to-sky-700 text-white font-bold text-lg py-3.5 px-6 rounded-lg hover:from-sky-700 hover:to-sky-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                        >
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            <span>Send Request</span>
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <AppointmentForm />
        </>
    );
}
