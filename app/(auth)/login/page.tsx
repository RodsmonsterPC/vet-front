'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import api from '@/lib/api';
import { PawPrint, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      if (data.success) {
        setAuth(data.user, data.token);
        toast.success('Welcome back!');
        if (data.user.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--color-on-surface)',
  };

  const inputWrap: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem 0.75rem 2.75rem',
    fontSize: '0.9375rem',
    color: 'var(--color-on-surface)',
    backgroundColor: 'var(--color-surface)',
    border: '1.5px solid var(--color-outline-variant)',
    borderRadius: '0.75rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const iconLeft: React.CSSProperties = {
    position: 'absolute',
    left: '0.875rem',
    color: 'var(--color-on-surface-variant)',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-surface)',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-10rem', right: '-10rem',
        width: '600px', height: '600px',
        background: 'var(--color-primary-container)',
        borderRadius: '50%', filter: 'blur(80px)', opacity: 0.4,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-8rem', left: '-8rem',
        width: '500px', height: '500px',
        background: 'var(--color-secondary-container)',
        borderRadius: '50%', filter: 'blur(80px)', opacity: 0.35,
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        backgroundColor: 'var(--color-surface-lowest)',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        boxShadow: '0 20px 60px rgba(0,96,148,0.12)',
        border: '1px solid var(--color-outline-variant)',
      }}>

        {/* Logo + Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', gap: '0.75rem' }}>
          <Link href="/" style={{
            width: '3.5rem', height: '3.5rem',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-container)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <PawPrint size={26} strokeWidth={2} />
          </Link>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '1.625rem', fontWeight: 800,
              color: 'var(--color-on-surface)', letterSpacing: '-0.02em',
              marginBottom: '0.25rem',
            }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-on-surface-variant)' }}>
              Sign in to your PetCare account
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Email */}
          <div style={inputContainer}>
            <label style={labelStyle}>Email Address</label>
            <div style={inputWrap}>
              <span style={iconLeft}><Mail size={17} /></span>
              <input
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-outline-variant)')}
              />
            </div>
          </div>

          {/* Password */}
          <div style={inputContainer}>
            <label style={labelStyle}>Password</label>
            <div style={inputWrap}>
              <span style={iconLeft}><Lock size={17} /></span>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: '3rem' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-outline-variant)')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute', right: '0.875rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-on-surface-variant)',
                  display: 'flex', alignItems: 'center',
                }}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.875rem', color: 'var(--color-on-surface-variant)',
              cursor: 'pointer',
            }}>
              <input type="checkbox" style={{ accentColor: 'var(--color-primary)', width: '1rem', height: '1rem' }} />
              Remember me
            </label>
            <Link href="/forgot-password" style={{
              fontSize: '0.875rem', fontWeight: 600,
              color: 'var(--color-primary)', textDecoration: 'none',
            }}>
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              marginTop: '0.5rem',
              padding: '0.875rem',
              background: isLoading
                ? 'var(--color-outline-variant)'
                : 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              boxShadow: isLoading ? 'none' : '0 6px 20px rgba(0,96,148,0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={e => { if (!isLoading) (e.currentTarget.style.transform = 'translateY(-1px)'); }}
            onMouseLeave={e => { (e.currentTarget.style.transform = 'translateY(0)'); }}
          >
            {isLoading ? (
              <>
                <span style={{
                  width: '1rem', height: '1rem',
                  border: '2px solid rgba(255,255,255,0.4)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.75s linear infinite',
                }} />
                Signing in…
              </>
            ) : 'Sign In'}
          </button>
        </form>

        {/* Register link */}
        <p style={{
          textAlign: 'center', fontSize: '0.875rem',
          color: 'var(--color-on-surface-variant)', marginTop: '1.75rem',
        }}>
          Don&apos;t have an account?{' '}
          <Link href="/register" style={{
            fontWeight: 700,
            color: 'var(--color-primary)',
            textDecoration: 'none',
          }}>
            Create an account
          </Link>
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
