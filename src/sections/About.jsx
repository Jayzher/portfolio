import React from 'react';

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">About Me</h2>
          <p className="text-primary opacity-90 leading-relaxed mb-4">
            I’m a multidisciplinary developer focused on crafting immersive 3D web experiences and performant front‑end interfaces.
          </p>
          <p className="text-secondary leading-relaxed">
            With a passion for design systems and clean code, I love turning ideas into delightful products. I’m currently exploring WebGL, Three.js, and modern React patterns.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-brand text-variant font-medium hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-primary text-primary hover:bg-secondary transition">Contact</a>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            className="rounded-xl shadow-lg w-full max-w-md object-cover border border-primary"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1280&auto=format&fit=crop"
            alt="Portrait placeholder"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
