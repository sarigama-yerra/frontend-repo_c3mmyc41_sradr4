import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      {/* Decorative background with animated glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -left-10 w-[60vw] h-[60vw] rounded-full bg-yellow-300/40 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[55vw] h-[55vw] rounded-full bg-amber-200/50 blur-3xl"
          animate={{ scale: [1, 0.95, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white/60 to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-10 top-24 w-24 h-24 rounded-full bg-white/60 backdrop-blur shadow-lg"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-16 top-40 w-16 h-16 rounded-full bg-yellow-200/70 shadow-lg"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/3 bottom-20 w-20 h-20 rounded-full bg-white/50 shadow-lg"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/80 text-yellow-900 text-xs font-bold uppercase tracking-wide">
            Welcome to Sunny Online Store
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Shine brighter with stylish picks curated for you
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl">
            Discover handpicked products across fashion, gadgets, and lifestyle. Beautifully designed, delivered fast, and priced right.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="px-5 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg shadow-gray-900/20 hover:translate-y-[-1px] transition-transform">Shop Now</a>
            <a href="#about" className="px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-black/10 text-gray-800 font-semibold hover:bg-white">Learn More</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
};

export default Hero;
