import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faSun, faBed, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const tips = [
    {
        id: 1,
        icon: faAppleWhole,
        title: "Nutrition for Growing Kids",
        category: "Nutrition",
        excerpt: "Learn about the essential nutrients your child needs for healthy growth and development, and get tips for picky eaters.",
        date: "Oct 15, 2023"
    },
    {
        id: 2,
        icon: faSun,
        title: "Sun Safety Summer Guide",
        category: "Safety",
        excerpt: "Protecting your child's skin from the sun is crucial. Discover the best practices for sunscreen, clothing, and outdoor play.",
        date: "Jun 02, 2023"
    },
    {
        id: 3,
        icon: faBed,
        title: "Establishing Healthy Sleep Habits",
        category: "Wellness",
        excerpt: "Sleep is vital for a child's brain development. We share strategies for creating a bedtime routine that works for the whole family.",
        date: "Sep 28, 2023"
    },
    {
        id: 4,
        icon: faBookOpen,
        title: "Reading to Your Child",
        category: "Development",
        excerpt: "Reading aloud to your child promotes language development and early literacy skills. Here are some age-appropriate book suggestions.",
        date: "Nov 10, 2023"
    }
];

export default function HealthTips() {
    return (
        <div className="pt-24 pb-16 bg-sky-50 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">Health Tips & Resources</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Expert advice and helpful articles to support you on your parenting journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tips.map((tip, index) => (
                        <motion.div
                            key={tip.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="bg-sky-100 p-8 flex justify-center items-center">
                                <FontAwesomeIcon icon={tip.icon} className="text-6xl text-sky-500" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{tip.category}</span>
                                    <span className="text-slate-400 text-sm">{tip.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-3 hover:text-sky-600 transition-colors cursor-pointer">{tip.title}</h3>
                                <p className="text-slate-600 mb-6 flex-1">{tip.excerpt}</p>
                                <button className="text-sky-600 font-semibold hover:text-sky-800 transition-colors self-start">
                                    Read More &rarr;
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
