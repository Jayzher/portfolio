import React from 'react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A WebGL powered hero with smooth scroll and parallax.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Design System Kit',
    desc: 'Reusable UI components with a11y and theme tokens.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Data Viz Dashboard',
    desc: 'Beautiful, responsive charts and live data streams.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <article key={i} className="rounded-xl overflow-hidden border border-primary bg-secondary hover:shadow-lg transition">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-primary mb-2">{p.title}</h3>
                <p className="text-secondary mb-4">{p.desc}</p>
                <div className="flex gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-brand text-variant">React</span>
                  <span className="px-3 py-1 rounded-full bg-brand-light text-variant">Three.js</span>
                  <span className="px-3 py-1 rounded-full border border-primary text-primary">Tailwind</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
