"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* Experience Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <Briefcase className="w-8 h-8 text-neon-cyan" />
                        <h2 className="text-3xl font-bold text-white">Experience</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border-l-4 border-l-neon-cyan relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-3xl rounded-full pointer-events-none" />

                        <h3 className="text-2xl font-bold text-white">Full Stack Intern</h3>
                        <p className="text-neon-cyan font-medium mb-2">Static Educare</p>
                        <p className="text-gray-400 text-sm mb-4">3 Months</p>

                        <p className="text-gray-300 leading-relaxed">
                            Completed a 3-month internship focused on basic development concepts and project exposure. Gained practical experience in team collaboration and understanding real-world development workflows.
                        </p>

                        <div className="mt-4 pt-4 border-t border-gray-700/50">
                            <p className="text-gray-400 text-sm italic">
                                Note: Most of my deeper technical experience comes from independent system-building projects and continuous experimentation with different stacks.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Education Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <GraduationCap className="w-8 h-8 text-electric-purple" />
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border-l-4 border-l-electric-purple relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-purple/5 blur-3xl rounded-full pointer-events-none" />

                        <h3 className="text-2xl font-bold text-white">Diploma in Computer Engineering</h3>
                        <p className="text-electric-purple font-medium mb-2">Thakur Polytechnic, Kandivali East</p>
                        <p className="text-gray-400 text-sm mb-4">Currently Pursuing (3rd Year)</p>

                        <p className="text-gray-300 leading-relaxed">
                            Building a strong foundation in computer science principles, system architecture, and software engineering.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
