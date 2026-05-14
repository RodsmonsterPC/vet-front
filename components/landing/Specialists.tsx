'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const specialists = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief Veterinarian",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    bio: "Over 15 years of experience in small animal medicine and soft tissue surgery."
  },
  {
    name: "Dr. Michael Chen",
    role: "Veterinary Dentist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    bio: "Specializes in advanced dental procedures, oral surgery, and preventative care."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Feline Specialist",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2070&auto=format&fit=crop",
    bio: "Passionate about cat health, behavior, and stress-free feline handling."
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

export const Specialists = () => {
  return (
    <section id="specialists" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="display-md"
            style={{ marginBottom: '1rem', color: 'var(--color-on-surface)' }}
          >
            Meet Our Specialists
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
            className="body-lg"
            style={{ color: 'var(--color-on-surface-variant)', maxWidth: '540px' }}
          >
            Our team of board-certified veterinarians brings decades of combined experience and a shared passion for animal welfare.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {specialists.map((vet, index) => (
            <motion.div
              key={vet.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={index}
            >
              <Card variant="organic" className="h-full" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '320px', width: '100%', overflow: 'hidden', borderRadius: '3rem 1rem 3rem 1rem' }}>
                  <Image
                    src={vet.image}
                    alt={vet.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                    onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                  }} />
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', color: 'white' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.25rem' }}>{vet.name}</h3>
                    <p style={{ opacity: 0.85, fontWeight: 500 }}>{vet.role}</p>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>{vet.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
