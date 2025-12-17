"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Sparkles, Terminal } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-6 h-6 text-neon-cyan" />,
            skills: ["Python", "FastAPI", "Flask", "Node.js", "Express.js", "REST API Design"],
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-6 h-6 text-electric-purple" />,
            skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive UI Design"],
        },
        {
            title: "Database Management",
            icon: <Database className="w-6 h-6 text-magenta-glow" />,
            skills: ["MongoDB", "File-based Storage", "Schema Design"],
        },
        {
            title: "AI & Machine Learning",
            icon: <Sparkles className="w-6 h-6 text-neon-green" />,
            skills: ["Recommendation Systems", "Chatbot Logic", "Basic Analytics", "Model Integration"],
        },
        {
            title: "Tools & DevOps",
            icon: <Terminal className="w-6 h-6 text-orange-400" />,
            skills: ["Git & GitHub", "VS Code", "Postman", "Linux Basics", "CSV Processing"],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-electric-purple/10 blur-[120px] rounded-full" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive set of tools and technologies I use to build scalable and intelligent software systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 text-sm bg-dark-navy/80 text-gray-300 rounded-full border border-gray-700/50 hover:border-gray-500 transition-colors"
                                    >
                                        {skill}
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

export default Skills;
