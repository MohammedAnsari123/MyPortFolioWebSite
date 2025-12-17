"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong.");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again later.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-blue/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Ready to build something amazing? Feel free to reach out for collaborations or just a friendly chat.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-4 bg-neon-cyan/10 rounded-full text-neon-cyan">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:ansarimohammed2006@gmail.com" className="text-white font-medium hover:text-neon-cyan transition-colors">ansarimohammed2006@gmail.com</a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-4 bg-electric-purple/10 rounded-full text-electric-purple">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Phone</p>
                                <a href="tel:+917977211341" className="text-white font-medium hover:text-electric-purple transition-colors">+91 7977211341</a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex items-center gap-4">
                            <div className="p-4 bg-magenta-glow/10 rounded-full text-magenta-glow">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-white font-medium">Mumbai, Maharashtra, India</p>
                            </div>
                        </div>

                        <div className="flex gap-6 pt-4">
                            <a href="https://github.com/MohammedAnsari123" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/mohammed-ansari-065426351/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-deep-space-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                                    placeholder="Your Name"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-deep-space-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                                    placeholder="your@email.com"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-deep-space-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                                    placeholder="What's on your mind?"
                                    required
                                    disabled={status === "loading"}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-gradient-to-r from-neon-cyan to-electric-purple text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                            {status === "error" && (
                                <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
                            )}
                            {status === "success" && (
                                <p className="text-green-500 text-sm text-center mt-2">Thanks! I'll get back to you soon.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
