'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, fadeInVariants, containerVariants } from '@/lib/animations';
import { whatsappLink } from '@/lib/utils';
import type { ContactFormData } from '@/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    auditRequest: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        auditRequest: false,
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-white to-emerald-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-accent/10 border-2 border-primary-accent/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-accent"></span>
              <span className="text-sm font-semibold text-primary-accent">Contact</span>
            </span>
            <h1 className="section-title mb-6">Let's Work Together</h1>
            <p className="section-subtitle">
              Ready to optimize your website? Get in touch and let's discuss your performance goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-section bg-bg-secondary">
        <div className="section-container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Info */}
            <motion.div variants={slideUpVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Get In Touch</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Have questions? Need a free audit? Want to discuss your project? I'd love to hear from you.
                  Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:jubileefestus@gmail.com"
                  whileHover={{ x: 8 }}
                  className="group p-6 rounded-xl bg-white border-2 border-border-default hover:border-primary-accent transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
                >
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary-accent transition-colors">
                    Email
                  </h3>
                  <p className="text-text-secondary">jubileefestus@gmail.com</p>
                  <p className="text-sm text-primary-accent mt-2">Response within 24 hours</p>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+254716920853"
                  whileHover={{ x: 8 }}
                  className="group p-6 rounded-xl bg-white border-2 border-border-default hover:border-primary-accent transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
                >
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary-accent transition-colors">
                    Phone
                  </h3>
                  <p className="text-text-secondary">+254 716 920 853</p>
                  <p className="text-sm text-primary-accent mt-2">Call or SMS anytime</p>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href={whatsappLink(
                    '0716920853',
                    'Hi, I would like to discuss my website performance.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="group p-6 rounded-xl bg-white border-2 border-border-default hover:border-primary-accent transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
                >
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="font-bold text-text-primary group-hover:text-primary-accent transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-text-secondary">+254 716 920 853</p>
                  <p className="text-sm text-primary-accent mt-2">Quick response</p>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-xl bg-white border-2 border-border-default hover:border-primary-accent transition-all duration-300 shadow-soft-sm hover:shadow-soft-md"
                >
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-bold text-text-primary">Location</h3>
                  <p className="text-text-secondary">Nairobi, Kenya 🇰🇪</p>
                  <p className="text-sm text-primary-accent mt-2">Remote-friendly</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideUpVariants} className="rounded-xl bg-white border-2 border-border-default p-8 shadow-soft-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input-base"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-text-primary mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="input-base"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                    className="input-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="textarea-base"
                  />
                </div>

                {/* Audit Request */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="audit"
                    name="auditRequest"
                    checked={formData.auditRequest}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-2 border-border-default cursor-pointer"
                  />
                  <label htmlFor="audit" className="text-text-secondary cursor-pointer">
                    I'm interested in a free performance audit
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full py-4 font-bold"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-lg bg-green-50 border-2 border-green-200 text-green-700 text-sm"
                  >
                    ✓ Thank you! I'll get back to you within 24 hours.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 md:py-section bg-white">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="/contact#form"
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-primary-accent/30 hover:border-primary-accent transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Request Free Audit</h3>
              <p className="text-text-secondary">Get a comprehensive performance analysis of your website.</p>
            </motion.a>

            <motion.a
              href={whatsappLink(
                '0716920853',
                'Hi, I would like to discuss my website performance.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-primary-accent/30 hover:border-primary-accent transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Chat on WhatsApp</h3>
              <p className="text-text-secondary">Quick messages and instant responses.</p>
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
}
