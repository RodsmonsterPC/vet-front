'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { PawPrint, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Specialists', href: '/#specialists' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.875rem 0' : '1.25rem 0',
        background: isScrolled
          ? 'rgba(255,255,255,0.85)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(74,85,80,0.1)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,96,148,0.06)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
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

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                color: pathname === link.href
                  ? 'var(--color-primary)'
                  : 'var(--color-on-surface-variant)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--color-primary)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = pathname === link.href ? 'var(--color-primary)' : 'var(--color-on-surface-variant)')}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="hidden md:flex">
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-on-surface)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--color-primary)')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--color-on-surface)')}
            >
              Sign In
            </button>
          </Link>
          <Link href="/appointments/book" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 700,
              padding: '0.625rem 1.25rem',
              borderRadius: '9999px',
              letterSpacing: '0.01em',
              boxShadow: '0 4px 14px rgba(0,96,148,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,96,148,0.45)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(0,96,148,0.35)';
              }}
            >
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-on-surface)',
            padding: '0.5rem',
            display: 'none',
          }}
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-surface-lowest)',
          boxShadow: '0 8px 32px rgba(0,96,148,0.1)',
          borderTop: '1px solid var(--color-outline-variant)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--color-outline-variant)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '0.75rem',
                background: 'var(--color-surface-highest)',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 600,
                cursor: 'pointer',
                color: 'var(--color-on-surface)',
              }}>Sign In</button>
            </Link>
            <Link href="/appointments/book" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <button style={{
                width: '100%',
                padding: '0.75rem',
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 700,
                cursor: 'pointer',
                color: 'white',
              }}>Book Appointment</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
