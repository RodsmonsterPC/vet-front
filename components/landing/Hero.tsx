'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Calendar, Phone, Heart, Award } from 'lucide-react';

const fadeLeft: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' as const } },
};

/* ── reusable button styles ── */
const btnPrimary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
  color: '#ffffff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 700,
  padding: '0.875rem 1.75rem',
  borderRadius: '9999px',
  letterSpacing: '0.01em',
  boxShadow: '0 6px 20px rgba(0,96,148,0.3)',
  textDecoration: 'none',
  transition: 'transform 0.2s, box-shadow 0.2s',
  whiteSpace: 'nowrap',
};

const btnSecondary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'var(--color-surface-highest)',
  color: 'var(--color-on-surface)',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.875rem 1.75rem',
  borderRadius: '9999px',
  textDecoration: 'none',
  transition: 'transform 0.2s, background 0.2s',
  whiteSpace: 'nowrap',
};

export const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: '8rem',
      paddingBottom: '5rem',
      overflow: 'hidden',
      backgroundColor: 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '800px', height: '800px',
        background: 'var(--color-primary-container)',
        borderRadius: '50%', filter: 'blur(100px)',
        opacity: 0.4, transform: 'translate(33%, -25%)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '600px', height: '600px',
        background: 'var(--color-secondary-container)',
        borderRadius: '50%', filter: 'blur(100px)',
        opacity: 0.3, transform: 'translate(-33%, 25%)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 2rem',
        position: 'relative', zIndex: 1, width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem', alignItems: 'center',
        }}>

          {/* ── Text Content ── */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeLeft}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}
          >
            {/* Badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              backgroundColor: 'var(--color-primary-container)',
              color: 'var(--color-primary)',
              padding: '0.35rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              <Heart size={13} /> Premium Pet Care
            </span>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: 'var(--color-on-surface)',
              maxWidth: '560px',
            }}>
              Where your pets are treated like{' '}
              <span style={{ color: 'var(--color-primary)' }}>family.</span>
            </h1>

            <p style={{
              fontSize: '1.0625rem', lineHeight: 1.7,
              color: 'var(--color-on-surface-variant)', maxWidth: '480px',
            }}>
              Experience modern, compassionate veterinary care in a stress-free environment.
              Our expert team provides everything from routine wellness to advanced medical treatments.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '0.5rem' }}>
              <Link href="/appointments/book" style={btnPrimary}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(0,96,148,0.4)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,96,148,0.3)';
                }}
              >
                <Calendar size={18} />
                Book an Appointment
              </Link>
              <Link href="tel:+15551234567" style={btnSecondary}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-high)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--color-surface-highest)';
                }}
              >
                <Phone size={18} />
                (555) 123-4567
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                  backgroundColor: 'var(--color-surface-highest)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-on-surface)',
                }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-on-surface)' }}>15+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-variant)' }}>Years Exp.</div>
                </div>
              </div>
              <div style={{ width: '1px', height: '2.5rem', backgroundColor: 'var(--color-outline-variant)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                  backgroundColor: 'var(--color-surface-highest)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-on-surface)',
                }}>
                  <Heart size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-on-surface)' }}>10k+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-on-surface-variant)' }}>Happy Pets</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Image & Floating Cards ── */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeRight}
            style={{ position: 'relative', height: '560px', width: '100%' }}
          >
            {/* Main Image */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              borderRadius: '3rem 1rem 3rem 1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,96,148,0.15)',
            }}>
              <Image
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop"
                alt="Happy dog with veterinarian"
                fill sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }} priority
              />
            </div>

            {/* Floating Card – Rating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="animate-float"
              style={{
                position: 'absolute', top: '2rem', left: '-2.5rem', zIndex: 2,
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '0.875rem 1.125rem',
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                boxShadow: '0 8px 32px rgba(0,96,148,0.12)',
              }}
            >
              <div style={{ display: 'flex' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                    border: '2px solid white', overflow: 'hidden', position: 'relative',
                    marginLeft: i === 1 ? '0' : '-0.625rem',
                    backgroundColor: '#e5e7eb', flexShrink: 0,
                  }}>
                    <Image
                      src={`https://randomuser.me/api/portraits/women/${i + 10}.jpg`}
                      alt="User" fill sizes="36px" style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '1rem', letterSpacing: '0.05em' }}>★★★★★</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-on-surface)', whiteSpace: 'nowrap' }}>
                  4.9/5 from 500+ reviews
                </div>
              </div>
            </motion.div>

            {/* Floating Card – Available */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="animate-float-delayed"
              style={{
                position: 'absolute', bottom: '3.5rem', right: '-1.5rem', zIndex: 2,
                borderRadius: '1rem',
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '1rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                boxShadow: '0 8px 32px rgba(0,96,148,0.12)',
              }}
            >
              <div style={{
                width: '2.5rem', height: '2.5rem', borderRadius: '50%', flexShrink: 0,
                backgroundColor: 'var(--color-secondary-container)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '0.625rem', height: '0.625rem', borderRadius: '50%',
                  backgroundColor: 'var(--color-secondary)',
                  animation: 'pulse 2s ease-in-out infinite',
                }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-on-surface)', fontSize: '0.9rem' }}>Available Today</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-on-surface-variant)' }}>Walk-ins welcome</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
