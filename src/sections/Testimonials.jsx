import React, { useEffect, useState } from 'react';

const DATA = [
  {
    quote:
      "This portfolio blends clean design with immersive 3D touches. It's fast, elegant, and memorable.",
    name: 'Alex Johnson',
    role: 'Product Designer, PixelWorks',
    img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop',
  },
  {
    quote:
      'Clear code, thoughtful UX, and impressive performance. An absolute pleasure to collaborate with.',
    name: 'Priya Kapoor',
    role: 'Frontend Lead, NovaLabs',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop',
  },
  {
    quote:
      'Delivered an interactive 3D experience that wowed our stakeholders and shipped on time.',
    name: 'Miguel Santos',
    role: 'Engineering Manager, Horizon',
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DATA.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir) => {
    setIndex((i) => (i + dir + DATA.length) % DATA.length);
  };

  const t = DATA[index];

  return (
    <section className="min-h-screen bg-primary flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-10 text-center">What people say</h2>

        <div className="relative rounded-2xl border border-primary bg-secondary p-8 md:p-12 overflow-hidden">
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            <img src={t.img} alt={t.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-primary" />
            <div>
              <p className="text-primary font-semibold">{t.name}</p>
              <p className="text-secondary text-sm">{t.role}</p>
            </div>
          </div>

          <blockquote className="text-xl md:text-2xl text-primary leading-relaxed">
            “{t.quote}”
          </blockquote>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {DATA.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brand' : 'w-2 bg-primary border border-primary'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => go(-1)} className="px-3 py-2 rounded-md border border-primary text-primary hover:bg-primary/50">Prev</button>
              <button onClick={() => go(1)} className="px-3 py-2 rounded-md bg-brand text-variant hover:opacity-90">Next</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
