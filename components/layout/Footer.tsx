'use client';

import React from 'react';
import Link from 'next/link';
import { PawPrint, Globe, Hash, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const linkStyle: React.CSSProperties = {
  color: 'var(--color-on-surface-variant)',
  textDecoration: 'none',
  fontSize: '0.9375rem',
  lineHeight: 1.5,
  transition: 'color 0.2s',
  display: 'block',
  padding: '0.2rem 0',
};

const socialBtn: React.CSSProperties = {
  width: '2.25rem',
  height: '2.25rem',
  borderRadius: '50%',
  backgroundColor: 'var(--color-surface-low)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-on-surface-variant)',
  transition: 'background-color 0.2s, color 0.2s',
  textDecoration: 'none',
  flexShrink: 0,
};

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-surface-lowest)',
      borderTop: '1px solid var(--color-outline-variant)',
    }}>
      {/* Main footer grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2.5rem 3rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* ── Brand column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                minWidth: '2.5rem',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-container)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                flexShrink: 0,
              }}>
                <PawPrint size={20} strokeWidth={2} />
              </div>
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '-0.01em',
                color: 'var(--color-on-surface)',
              }}>
                PetCare<span style={{ color: 'var(--color-primary)' }}>.</span>
              </span>
            </Link>

            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.65,
              color: 'var(--color-on-surface-variant)',
              maxWidth: '220px',
            }}>
              Modern, compassionate, and professional care for your furry family members.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginTop: '0.25rem' }}>
              {[
                { icon: Globe, label: 'Website' },
                { icon: Hash, label: 'Instagram' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={socialBtn}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-primary)';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface-low)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-on-surface-variant)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '0.5rem',
            }}>
              Quick Links
            </h3>
            {[
              { label: 'Our Services', href: '/#services' },
              { label: 'Meet the Team', href: '/#specialists' },
              { label: 'Book Appointment', href: '/appointments/book' },
              { label: 'Pet Care Blog', href: '/blog' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={linkStyle}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--color-primary)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--color-on-surface-variant)')}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ── Contact ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '0.5rem',
            }}>
              Contact Us
            </h3>
            {[
              { icon: MapPin, text: '123 Wellness Way, Animal City, AC 12345' },
              { icon: Phone, text: '(555) 123-4567' },
              { icon: Mail, text: 'hello@petcare.vet' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.625rem',
                color: 'var(--color-on-surface-variant)',
                fontSize: '0.9375rem',
                lineHeight: 1.5,
              }}>
                <Icon size={17} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* ── Opening Hours ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--color-on-surface)',
              marginBottom: '0.5rem',
            }}>
              Opening Hours
            </h3>
            {[
              { day: 'Mon – Fri', hours: '8:00 AM – 8:00 PM' },
              { day: 'Saturday', hours: '9:00 AM – 5:00 PM' },
              { day: 'Sunday', hours: 'Emergency Only' },
            ].map(({ day, hours }) => (
              <div key={day} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.9375rem',
              }}>
                <span style={{ color: 'var(--color-on-surface-variant)' }}>{day}</span>
                <span style={{ fontWeight: 600, color: 'var(--color-on-surface)', whiteSpace: 'nowrap' }}>{hours}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          borderTop: '1px solid var(--color-outline-variant)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>
            © {new Date().getFullYear()} PetCare Veterinary. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--color-primary)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--color-on-surface-variant)')}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
