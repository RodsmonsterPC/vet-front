'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Scissors, Syringe, HeartPulse, Sparkles, Activity } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    description: "Comprehensive health exams and wellness planning for your pet's life stages.",
    color: "var(--color-primary)",
    bg: "var(--color-primary-container)"
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description: "Essential preventative care to protect against common and severe diseases.",
    color: "var(--color-secondary)",
    bg: "var(--color-secondary-container)"
  },
  {
    icon: Sparkles,
    title: "Dental Care",
    description: "Professional cleaning, extractions, and oral health assessments.",
    color: "var(--color-tertiary)",
    bg: "var(--color-tertiary-container)"
  },
  {
    icon: Activity,
    title: "Diagnostics",
    description: "In-house laboratory, digital X-rays, and ultrasound for accurate diagnosis.",
    color: "#6b21a8",
    bg: "#f3e8ff"
  },
  {
    icon: HeartPulse,
    title: "Surgery",
    description: "Safe surgical procedures with advanced monitoring and pain management.",
    color: "#be123c",
    bg: "#ffe4e6"
  },
  {
    icon: Scissors,
    title: "Grooming",
    description: "Professional spa services, bathing, and breed-specific styling.",
    color: "#0369a1",
    bg: "#e0f2fe"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export const Services = () => {
  return (
    <section id="services" style={{ backgroundColor: 'var(--color-surface-low)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp} custom={0}
            style={{
              fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
              fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15,
              color: 'var(--color-on-surface)', marginBottom: '1rem',
            }}
          >
            Comprehensive Care
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp} custom={1}
            style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: 'var(--color-on-surface-variant)' }}
          >
            From routine check-ups to specialized treatments, our state-of-the-art facility
            is equipped to handle all your pet&apos;s health needs.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp} custom={index}
                style={{
                  backgroundColor: 'var(--color-surface-lowest)',
                  borderRadius: '1.25rem',
                  padding: '2rem',
                  boxShadow: '0 2px 12px rgba(0,96,148,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,96,148,0.12)' }}
              >
                {/* Icon container — sits inside the card with proper spacing */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '0.875rem',
                  backgroundColor: service.bg,
                  color: service.color,
                  marginBottom: '1.25rem',
                  flexShrink: 0,
                }}>
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-on-surface)',
                  marginBottom: '0.625rem',
                  lineHeight: 1.3,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-on-surface-variant)',
                  lineHeight: 1.65,
                }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
