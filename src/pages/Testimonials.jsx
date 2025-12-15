import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Mother of 2",
    text: "Dr. Carter is absolutely amazing! She takes the time to listen to our concerns and explains everything clearly. My kids actually look forward to their checkups!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Father of 3",
    text: "The staff at KidzCare Pedia are so welcoming and professional. The clinic is clean, bright, and very kid-friendly. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother of 1",
    text: "As a first-time mom, I had so many questions. Dr. Carter was incredibly patient and supportive. I feel so much more confident in caring for my baby.",
    rating: 5
  },
  {
    id: 4,
    name: "David Chen",
    role: "Father of 2",
    text: "We've been coming here for years. The level of care is consistently excellent. They really care about the families they serve.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="pt-24 pb-16 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">Parent Testimonials</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what other parents have to say about their experience with KidzCare Pedia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100 relative"
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-sky-200 absolute top-6 left-6 opacity-50" />
              <div className="relative z-10 pt-8">
                <p className="text-slate-600 text-lg italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sky-600">{testimonial.role}</p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
