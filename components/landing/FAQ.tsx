'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to make an appointment for an emergency?",
    answer: "During our regular hours, we accept walk-in emergencies. However, if possible, please call us while you are on your way so our team can prepare for your pet's arrival. For after-hours emergencies, please contact the 24/7 Animal Emergency Center at (555) 999-9999."
  },
  {
    question: "What vaccinations does my pet need?",
    answer: "Core vaccinations for dogs typically include Rabies, Distemper, Parvovirus, and Adenovirus. For cats, core vaccines include Rabies, Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia. We will create a custom vaccination schedule based on your pet's lifestyle and risk factors."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that veterinary care can sometimes be unexpected. We accept all major credit cards, CareCredit, and Scratchpay. We also strongly recommend pet insurance and can help you navigate the claim process."
  },
  {
    question: "At what age should I spay or neuter my pet?",
    answer: "Generally, we recommend spaying or neutering around 6 months of age. However, for large breed dogs, we may suggest waiting until they are fully grown (12-18 months) to allow for proper bone development. We will discuss the best timing for your specific pet during their wellness exam."
  },
  {
    question: "How often should my pet have a dental cleaning?",
    answer: "Most pets benefit from an annual professional dental cleaning starting around age 2-3. Smaller breeds often require more frequent cleanings. Regular exams will allow us to monitor tartar buildup and recommend cleanings as needed to prevent periodontal disease."
  }
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const },
  }),
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="display-md"
            style={{ marginBottom: '1rem', color: 'var(--color-on-surface)' }}
          >
            Frequently Asked Questions
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
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, don&apos;t hesitate to contact us.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={index}
              style={{
                backgroundColor: 'var(--color-surface-lowest)',
                borderRadius: '1rem',
                border: '1px solid var(--color-outline-variant)',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,96,148,0.05)',
              }}
            >
              <button
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '1rem',
                }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-on-surface)', flex: 1 }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-primary)',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 1.5rem 1.25rem',
                      color: 'var(--color-on-surface-variant)',
                      lineHeight: 1.7,
                    }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
