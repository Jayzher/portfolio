import React from 'react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Three.js', level: 75 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 70 },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-primary">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-8 text-center">Skills</h2>
        <ul className="space-y-6">
          {skills.map((s) => (
            <li key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="text-primary font-medium">{s.name}</span>
                <span className="text-secondary">{s.level}%</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full border border-primary overflow-hidden">
                <div
                  className="h-full bg-brand"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {['WebGL', 'UX', 'A11y', 'Testing', 'CI/CD'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-primary text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
