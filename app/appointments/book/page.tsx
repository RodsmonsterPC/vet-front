'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Calendar, Clock, User, Phone, Mail,
  PawPrint, ChevronRight, CheckCircle2
} from 'lucide-react';
import toast from 'react-hot-toast';

const services = [
  'General Consultation',
  'Vaccinations',
  'Dental Care',
  'Diagnostics & Lab Work',
  'Surgery',
  'Grooming',
];

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const petTypes = ['Dog', 'Cat', 'Bird', 'Rabbit', 'Other'];

type Step = 1 | 2 | 3;

export default function BookAppointmentPage() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [form, setForm] = useState({
    ownerName: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Appointment booked successfully!');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.9375rem',
    color: 'var(--color-on-surface)',
    backgroundColor: 'var(--color-surface)',
    border: '1.5px solid var(--color-outline-variant)',
    borderRadius: '0.75rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'var(--color-on-surface)',
    marginBottom: '0.375rem',
  };

  const fieldGroup: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
  };

  const row: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.25rem',
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      (e.currentTarget.style.borderColor = 'var(--color-primary)'),
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      (e.currentTarget.style.borderColor = 'var(--color-outline-variant)'),
  };

  if (submitted) {
    return (
      <main>
        <Navbar />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 1.5rem 4rem',
          backgroundColor: 'var(--color-surface)',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '480px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}>
            <div style={{
              width: '5rem', height: '5rem', borderRadius: '50%',
              backgroundColor: 'var(--color-secondary-container)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-secondary)',
            }}>
              <CheckCircle2 size={40} />
            </div>
            <h1 style={{
              fontSize: '2rem', fontWeight: 800,
              color: 'var(--color-on-surface)', letterSpacing: '-0.02em',
            }}>
              Appointment Confirmed!
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.65 }}>
              We&apos;ve received your booking request for <strong>{form.petName}</strong>.
              Our team will contact you at <strong>{form.email}</strong> to confirm your appointment.
            </p>
            <div style={{
              backgroundColor: 'var(--color-surface-lowest)',
              border: '1px solid var(--color-outline-variant)',
              borderRadius: '1rem',
              padding: '1.5rem',
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              {[
                { icon: Calendar, label: 'Date', value: form.date },
                { icon: Clock, label: 'Time', value: form.time },
                { icon: PawPrint, label: 'Service', value: form.service },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)' }}>{label}:</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <Link href="/" style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                border: '1.5px solid var(--color-outline-variant)',
                color: 'var(--color-on-surface)',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.9375rem',
              }}>
                Back to Home
              </Link>
              <button
                onClick={() => { setSubmitted(false); setStep(1); setForm({ ownerName: '', email: '', phone: '', petName: '', petType: '', service: '', date: '', time: '', notes: '' }); }}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  cursor: 'pointer',
                }}
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-surface)' }}>
      <Navbar />

      <div style={{ flex: 1, paddingTop: '7rem', paddingBottom: '5rem', padding: '7rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800, letterSpacing: '-0.02em',
              color: 'var(--color-on-surface)', marginBottom: '0.625rem',
            }}>
              Book an Appointment
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--color-on-surface-variant)' }}>
              Fill in the details below and our team will confirm your visit.
            </p>
          </div>

          {/* Step Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '2.5rem' }}>
            {[
              { n: 1 as Step, label: 'Owner & Pet' },
              { n: 2 as Step, label: 'Service & Schedule' },
              { n: 3 as Step, label: 'Confirm' },
            ].map(({ n, label }, i) => (
              <React.Fragment key={n}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}>
                  <div style={{
                    width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                    backgroundColor: step >= n ? 'var(--color-primary)' : 'var(--color-surface-highest)',
                    color: step >= n ? 'white' : 'var(--color-on-surface-variant)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.875rem',
                    transition: 'background-color 0.3s',
                  }}>
                    {step > n ? <CheckCircle2 size={16} /> : n}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: step >= n ? 'var(--color-primary)' : 'var(--color-on-surface-variant)', whiteSpace: 'nowrap' }}>
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div style={{
                    height: '2px', width: '5rem', marginBottom: '1.25rem',
                    backgroundColor: step > n ? 'var(--color-primary)' : 'var(--color-outline-variant)',
                    transition: 'background-color 0.3s',
                  }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Form Card */}
          <div style={{
            backgroundColor: 'var(--color-surface-lowest)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            boxShadow: '0 8px 40px rgba(0,96,148,0.08)',
            border: '1px solid var(--color-outline-variant)',
          }}>
            <form onSubmit={handleSubmit}>

              {/* ── STEP 1: Owner & Pet ── */}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-on-surface)', marginBottom: '0.25rem' }}>
                    <User size={18} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
                    Your Information
                  </h2>
                  <div style={row}>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Full Name *</label>
                      <input style={inputStyle} {...focusHandlers} required placeholder="John Smith" value={form.ownerName} onChange={update('ownerName')} />
                    </div>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Phone Number *</label>
                      <input style={inputStyle} {...focusHandlers} required type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={update('phone')} />
                    </div>
                  </div>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>Email Address *</label>
                    <input style={inputStyle} {...focusHandlers} required type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} />
                  </div>

                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-on-surface)', marginTop: '0.75rem', marginBottom: '0.25rem' }}>
                    <PawPrint size={18} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
                    Pet Information
                  </h2>
                  <div style={row}>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Pet Name *</label>
                      <input style={inputStyle} {...focusHandlers} required placeholder="Buddy" value={form.petName} onChange={update('petName')} />
                    </div>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>Pet Type *</label>
                      <select style={inputStyle} {...focusHandlers} required value={form.petType} onChange={update('petType')}>
                        <option value="">Select type…</option>
                        {petTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 2: Service & Schedule ── */}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={fieldGroup}>
                    <label style={labelStyle}>
                      <PawPrint size={16} style={{ display: 'inline', marginRight: '0.375rem', color: 'var(--color-primary)' }} />
                      Service Needed *
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.25rem' }}>
                      {services.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm(p => ({ ...p, service: s }))}
                          style={{
                            padding: '0.75rem',
                            borderRadius: '0.75rem',
                            border: `1.5px solid ${form.service === s ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
                            backgroundColor: form.service === s ? 'var(--color-primary-container)' : 'var(--color-surface)',
                            color: form.service === s ? 'var(--color-primary)' : 'var(--color-on-surface)',
                            fontWeight: form.service === s ? 700 : 500,
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={row}>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>
                        <Calendar size={15} style={{ display: 'inline', marginRight: '0.375rem', color: 'var(--color-primary)' }} />
                        Preferred Date *
                      </label>
                      <input
                        style={inputStyle} {...focusHandlers} required type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={form.date} onChange={update('date')}
                      />
                    </div>
                    <div style={fieldGroup}>
                      <label style={labelStyle}>
                        <Clock size={15} style={{ display: 'inline', marginRight: '0.375rem', color: 'var(--color-primary)' }} />
                        Preferred Time *
                      </label>
                      <select style={inputStyle} {...focusHandlers} required value={form.time} onChange={update('time')}>
                        <option value="">Select time…</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ── STEP 3: Confirm ── */}
              {step === 3 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-on-surface)' }}>
                    Review your appointment
                  </h2>
                  <div style={{
                    backgroundColor: 'var(--color-surface)',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}>
                    {[
                      { icon: User, label: 'Owner', value: form.ownerName },
                      { icon: Mail, label: 'Email', value: form.email },
                      { icon: Phone, label: 'Phone', value: form.phone },
                      { icon: PawPrint, label: 'Pet', value: `${form.petName} (${form.petType})` },
                      { icon: PawPrint, label: 'Service', value: form.service },
                      { icon: Calendar, label: 'Date', value: form.date },
                      { icon: Clock, label: 'Time', value: form.time },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <Icon size={17} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', width: '5rem', flexShrink: 0 }}>{label}</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={fieldGroup}>
                    <label style={labelStyle}>Additional Notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Any specific concerns or notes for the vet…"
                      value={form.notes}
                      onChange={update('notes')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      {...focusHandlers as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                    />
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div style={{
                display: 'flex',
                justifyContent: step === 1 ? 'flex-end' : 'space-between',
                marginTop: '2rem',
                gap: '1rem',
              }}>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as Step)}
                    style={{
                      padding: '0.75rem 1.75rem',
                      borderRadius: '9999px',
                      border: '1.5px solid var(--color-outline-variant)',
                      backgroundColor: 'transparent',
                      color: 'var(--color-on-surface)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                    }}
                  >
                    ← Back
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && (!form.ownerName || !form.email || !form.phone || !form.petName || !form.petType)) {
                        toast.error('Please fill all required fields');
                        return;
                      }
                      if (step === 2 && (!form.service || !form.date || !form.time)) {
                        toast.error('Please select a service, date, and time');
                        return;
                      }
                      setStep((step + 1) as Step);
                    }}
                    style={{
                      padding: '0.75rem 1.75rem',
                      borderRadius: '9999px',
                      border: 'none',
                      background: 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.375rem',
                      boxShadow: '0 4px 14px rgba(0,96,148,0.3)',
                    }}
                  >
                    Continue <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '0.875rem 2rem',
                      borderRadius: '9999px',
                      border: 'none',
                      background: isSubmitting ? 'var(--color-outline-variant)' : 'linear-gradient(135deg, var(--color-primary) 0%, #0088cc 100%)',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: isSubmitting ? 'none' : '0 6px 20px rgba(0,96,148,0.3)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span style={{
                          width: '1rem', height: '1rem',
                          border: '2px solid rgba(255,255,255,0.4)',
                          borderTopColor: 'white',
                          borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.75s linear infinite',
                        }} />
                        Booking…
                      </>
                    ) : (
                      <><CheckCircle2 size={18} /> Confirm Booking</>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  );
}
