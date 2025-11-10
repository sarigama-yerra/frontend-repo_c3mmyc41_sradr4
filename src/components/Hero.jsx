import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">        
        <Spline scene="https://prod.spline.design/qeYw2C5gQ4H6oH4Q/scene.splinecode" style={{ width: '100%', height: '100%' }} />
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
