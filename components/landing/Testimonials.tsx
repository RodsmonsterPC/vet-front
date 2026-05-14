'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    name: "Jessica Watson",
    pet: "Luna (Golden Retriever)",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The team at PetCare is absolutely phenomenal. When Luna needed emergency surgery, they were calm, compassionate, and kept me informed every step of the way. She's now fully recovered and loves visiting them!"
  },
  {
    name: "David Miller",
    pet: "Oliver (Maine Coon)",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've never seen a clinic so clean and welcoming. Dr. Rodriguez has a magic touch with cats; Oliver didn't even flinch during his vaccinations. Highly recommend their services to any pet owner."
  },
  {
    name: "Amanda & Tom",
    pet: "Bella & Max (Mixed Breeds)",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "We switched to PetCare last year and it's been the best decision for our dogs. The preventative care plans are affordable and comprehensive. The staff genuinely cares about the animals they treat."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: 'var(--color-primary-container)',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative SVG */}
      <div style={{ position: 'absolute', top: '-5rem', right: '-5rem', opacity: 0.06, pointerEvents: 'none' }}>
        <svg width="400" height="400" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11.5C9.8 11.5 8 13.3 8 15.5C8 17.7 9.8 19.5 12 19.5C14.2 19.5 16 17.7 16 15.5C16 13.3 14.2 11.5 12 11.5ZM5.5 11C6.9 11 8 9.9 8 8.5C8 7.1 6.9 6 5.5 6C4.1 6 3 7.1 3 8.5C3 9.9 4.1 11 5.5 11ZM18.5 11C19.9 11 21 9.9 21 8.5C21 7.1 19.9 6 18.5 6C17.1 6 16 7.1 16 8.5C16 9.9 17.1 11 18.5 11ZM9 5.5C9 6.9 10.3 8 12 8C13.7 8 15 6.9 15 5.5C15 4.1 13.7 3 12 3C10.3 3 9 4.1 9 5.5Z" />
        </svg>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 4rem' }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="display-md"
            style={{ marginBottom: '1rem', color: 'var(--color-on-surface)' }}
          >
            Happy Pets, Happy Owners
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            className="body-lg"
            style={{ color: 'var(--color-on-surface-variant)' }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our community has to say about their experience with PetCare.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={index}
            >
              <Card
                className="h-full"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{
                  fontSize: '3rem',
                  color: 'var(--color-primary-light)',
                  opacity: 0.5,
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                }}>
                  &quot;
                </div>
                <p style={{
                  color: 'var(--color-on-surface-variant)',
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '1.5rem',
                  lineHeight: 1.7,
                }}>
                  {testimonial.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ position: 'relative', width: '3rem', height: '3rem', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--color-on-surface)', marginBottom: '0.1rem' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-on-surface-variant)' }}>
                      Owner of {testimonial.pet}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
