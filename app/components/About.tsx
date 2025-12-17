"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-20 px-4 relative bg-deep-space-black/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Full-Stack Developer with a <span className="text-neon-cyan">System-First Mindset</span>
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            I am a Computer Engineering student with a strong interest in full-system development. My experience comes from building end-to-end projects using Python, FastAPI, MongoDB, and the MERN stack.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I enjoy understanding how things work internally, whether it is designing a programming language, creating a management system, or integrating machine learning into real applications. I prefer clean architecture, readable code, and solutions that solve real problems.
                        </p>

                        <p className="text-gray-300 leading-relaxed">
                            I am currently focused on improving my backend depth, scalable APIs, and AI-powered features while continuing to strengthen my frontend skills with React and Next.js.
                        </p>
                    </div>

                    {/* Graphical/Card Representation */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-electric-purple/20 blur-3xl -z-10 rounded-full" />

                        <div className="glass-card p-8 rounded-2xl md:ml-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">My Core Philosophy</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <Server className="w-6 h-6 text-neon-cyan shrink-0" />
                                    <span>Build practical systems, not just isolated scripts.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <Database className="w-6 h-6 text-electric-purple shrink-0" />
                                    <span>Backend stability and data integrity are paramount.</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <Code className="w-6 h-6 text-magenta-glow shrink-0" />
                                    <span>Clean, readable code is better than clever one-liners.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
