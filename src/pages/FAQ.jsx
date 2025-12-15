import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        question: "What should I bring to my child's first appointment?",
        answer: "Please bring your child's insurance card, immunization records, and any relevant medical history. If you are a new patient, you can also fill out the new patient forms online beforehand to save time."
    },
    {
        question: "How often should my child see the doctor?",
        answer: "We follow the American Academy of Pediatrics schedule for well-child visits: 3-5 days after birth, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, 30 months, and then annually starting at age 3."
    },
    {
        question: "Do you offer same-day sick visits?",
        answer: "Yes, we reserve appointments every day for sick visits. Please call our office as early as possible in the morning to schedule a same-day appointment."
    },
    {
        question: "What if my child gets sick after hours?",
        answer: "We have an on-call provider available 24/7 for urgent medical advice. Call our main office number, and you will be directed to our answering service."
    },
    {
        question: "Do you accept my insurance?",
        answer: "We accept most major insurance plans. Please contact our billing department or check our 'Insurance' page for a current list of accepted providers."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="pt-24 pb-16 bg-white min-h-screen">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-600">
                        Find answers to common questions about our practice and pediatric care.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border border-slate-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-sky-50 transition-colors duration-300 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                                <FontAwesomeIcon
                                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                                    className={`text-sky-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
