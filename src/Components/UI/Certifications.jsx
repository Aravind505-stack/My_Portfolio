import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Claude Certified Developer – Foundations",
    issuer: "Anthropic",
    issued: "Sep 18, 2026",
    expires: "Sep 18, 2027",
    credentialUrl: "https://www.credly.com/badges/0d5e4db1-3ae5-4a8f-b796-caa34001f0e9",
    description:
      "Validates foundational skills in building with Claude — prompt design, the Claude API, tool use, and developing AI-powered applications.",
  },
];

// Starburst mark used inside the badge
const Starburst = () => (
  <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
    {Array.from({ length: 12 }).map((_, i) => (
      <line
        key={i}
        x1="12"
        y1="12"
        x2="12"
        y2="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${i * 30} 12 12)`}
      />
    ))}
  </svg>
);

const Certifications = () => {
  return (
    <section id="certifications" className="p-4 mb-5">
      {/* Heading fades in */}
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-5 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
              transition: { duration: 0.25 },
            }}
          >
            <div className="shrink-0 h-20 w-20 rounded-full bg-orange text-white flex items-center justify-center shadow-md">
              <Starburst />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                {cert.issuer}
              </p>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-700 mb-3">{cert.description}</p>
              <p className="italic text-gray-600 mb-4">
                Issued {cert.issued} · Expires {cert.expires}
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-base font-semibold text-gray-100 py-2 px-4 rounded-lg bg-blue hover:text-white hover:shadow-lg"
              >
                Verify Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
