import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full">
        <Hero />
      </div>
    </section>
  );
}
