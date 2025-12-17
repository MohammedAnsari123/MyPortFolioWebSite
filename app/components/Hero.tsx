"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Full Stack Developer | Python & MERN Stack ";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index, fullText]);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-deep-space-black text-center px-4">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-electric-purple/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4"
                >
                    <span className="text-neon-cyan font-mono text-lg tracking-wider">
                        Hi, I am Mohammed Ansari
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
                >
                    Building Practical, Scalable, and <br />
                    <span className="text-gradient">Intelligent Software Systems</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-8 md:h-10 mb-8"
                >
                    <p className="text-xl md:text-2xl text-soft-white/80 font-mono">
                        {text}
                        <span className="animate-pulse">|</span>
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    I am a hands-on developer focused on full-stack web applications, backend systems, and applied AI. I learn best by building complete systems, not just writing code snippets.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan rounded-full font-medium hover:bg-neon-cyan/20 transition-all shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.5)]"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-electric-purple text-white rounded-full font-medium hover:bg-electric-purple/90 transition-all shadow-[0_0_15px_rgba(127,90,240,0.3)] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)]"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 flex gap-6 justify-center"
                >
                    <a href="https://github.com/MohammedAnsari123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammed-ansari-065426351/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:ansarimohammed2006@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
