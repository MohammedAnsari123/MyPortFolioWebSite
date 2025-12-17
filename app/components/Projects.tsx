"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart, BookOpen, Layers, MapPin } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "MAPL Programming Language",
            description: "A beginner-friendly programming language designed and implemented using Python. Features custom lexer and parser logic with syntax inspired by Python and Java.",
            tags: ["Python", "Compiler Design", "Custom Syntax", "Lexer/Parser"],
            icon: <BookOpen className="w-8 h-8 text-neon-cyan" />,
            color: "border-neon-cyan/50",
        },
        {
            title: "Museum Management System",
            description: "Full-stack system for managing museum exhibits, tours, and bookings. Features visitor dashboards, admin analytics, and ML-based recommendations.",
            tags: ["Python", "Flask", "React", "MongoDB", "Auth & RBAC"],
            icon: <Layers className="w-8 h-8 text-electric-purple" />,
            color: "border-electric-purple/50",
        },
        {
            title: "Traffic Management System",
            description: "Backend-focused simulation for traffic data processing. Designed with scalable API architecture and real-time data analysis logic.",
            tags: ["FastAPI", "Python", "Data Analysis", "API Design"],
            icon: <MapPin className="w-8 h-8 text-magenta-glow" />,
            color: "border-magenta-glow/50",
        },
        {
            title: "Data Visualization Projects",
            description: "Interactive visual analytics using Python and Matplotlib, transforming CSV data into meaningful insights like heatmaps and statistical summaries.",
            tags: ["Python", "Matplotlib", "Data Science", "Visualization"],
            icon: <BarChart className="w-8 h-8 text-neon-green" />,
            color: "border-neon-green/50",
        },
    ];

    return (
        <section id="projects" className="py-20 px-4 relative">
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-deep-space-black pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Real-world systems built from the ground up, demonstrating scalability, clean architecture, and problem-solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`glass-card p-8 rounded-2xl group hover:transform hover:scale-[1.02] transition-all duration-300 border-t-2 ${project.color}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                    {project.icon}
                                </div>
                                <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 text-xs font-medium bg-dark-navy text-gray-300 rounded-full border border-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
