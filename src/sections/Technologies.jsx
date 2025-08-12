import React, { useMemo, useState } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaDocker, FaNpm, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiTailwindcss, SiSass, SiJest, SiPostman, SiMongodb, SiPostgresql, SiExpress, SiGraphql } from 'react-icons/si';

const CATEGORIES = [
  {
    title: 'Languages',
    items: [
      { name: 'HTML5', Icon: FaHtml5, url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', Icon: FaCss3, url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'JavaScript', Icon: FaJs, url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', Icon: SiTypescript, url: 'https://www.typescriptlang.org/docs/' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', Icon: FaReact, url: 'https://react.dev/' },
      { name: 'Next.js', Icon: SiNextdotjs, url: 'https://nextjs.org/docs' },
      { name: 'Redux', Icon: SiRedux, url: 'https://redux.js.org/' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, url: 'https://tailwindcss.com/docs' },
      { name: 'Sass', Icon: SiSass, url: 'https://sass-lang.com/guide' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'Node.js', Icon: FaNodeJs, url: 'https://nodejs.org/en/docs' },
      { name: 'Express', Icon: SiExpress, url: 'https://expressjs.com/' },
      { name: 'MongoDB', Icon: SiMongodb, url: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', Icon: SiPostgresql, url: 'https://www.postgresql.org/docs/' },
      { name: 'GraphQL', Icon: SiGraphql, url: 'https://graphql.org/learn/' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', Icon: FaGit, url: 'https://git-scm.com/doc' },
      { name: 'GitHub', Icon: FaGithub, url: 'https://docs.github.com/' },
      { name: 'Docker', Icon: FaDocker, url: 'https://docs.docker.com/' },
      { name: 'Postman', Icon: SiPostman, url: 'https://learning.postman.com/docs/getting-started/introduction/' },
      { name: 'NPM', Icon: FaNpm, url: 'https://docs.npmjs.com/' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    items: [
      { name: 'AWS', Icon: FaAws, url: 'https://aws.amazon.com/' },
      { name: 'Azure', Icon: FaMicrosoft, url: 'https://azure.microsoft.com/' },
    ],
  },
];

export default function Technologies() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    if (!q.trim()) return CATEGORIES;
    const term = q.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter((i) => i.name.toLowerCase().includes(term)),
    })).filter((c) => c.items.length > 0);
  }, [q]);

  return (
    <section className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand mb-6 text-center">Technologies I Use</h2>
        <p className="text-secondary text-center max-w-3xl mx-auto mb-8">
          A practical toolkit for building fast, accessible, and delightful web experiences—from core web tech to modern frameworks, testing, CI/CD, and cloud services.
        </p>

        <div className="max-w-xl mx-auto mb-10">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search technologies (e.g., React, Docker, GraphQL)"
            className="w-full px-4 py-3 rounded-md bg-secondary text-primary border border-primary focus:outline-none"
            aria-label="Search technologies"
          />
        </div>

        <div className="space-y-10">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {cat.items.map(({ name, Icon, url, level }) => (
                  <a
                    key={name}
                    href={url || '#'}
                    target={url ? '_blank' : undefined}
                    rel={url ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-primary bg-secondary hover:bg-primary transition"
                    aria-label={url ? `${name} documentation` : name}
                  >
                    {Icon ? <Icon className="text-lg text-brand" aria-hidden="true" /> : null}
                    <span className="text-primary text-sm">{name}</span>
                    {typeof level === 'number' && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-brand text-variant">{level}%</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
