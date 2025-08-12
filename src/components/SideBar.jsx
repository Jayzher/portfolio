import { IoMdHome } from "react-icons/io";
import { IoMdPerson, IoMdFolderOpen, IoMdConstruct, IoMdMail, IoMdChatbubbles, IoMdCode } from "react-icons/io";
import { useState, useEffect, useCallback } from 'react';
import { scroller } from 'react-scroll';
import '../static/SideBar.css';

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Check for saved theme preference or use system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark', 'transition-colors', 'duration-500', 'ease-in-out');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    // no spy init needed since we drive scroll manually

    // Scroll-based active detection within custom container
    useEffect(() => {
        const container = document.getElementById('scroll-container');
        if (!container) return;

        const sectionNames = ['home', 'about', 'projects', 'skills', 'technologies', 'testimonials', 'contact'];
        const getTargets = () => sectionNames
            .map((name) => container.querySelector(`#${name}`))
            .filter(Boolean);

        let raf = 0;
        const computeActive = () => {
            const targets = getTargets();
            if (targets.length === 0) return;

            // If at bottom, force last section
            const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
            if (atBottom) {
                setActiveSection(sectionNames[sectionNames.length - 1]);
                return;
            }

            // Choose the section whose center is closest to the container center
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.top + containerRect.height / 2;

            let best = { name: sectionNames[0], dist: Number.POSITIVE_INFINITY };
            for (const el of targets) {
                const rect = el.getBoundingClientRect();
                const sectionCenter = rect.top + rect.height / 2;
                const dist = Math.abs(sectionCenter - containerCenter);
                const name = el.id || el.getAttribute('name');
                if (dist < best.dist && name) {
                    best = { name, dist };
                }
            }
            if (best.name) setActiveSection(best.name);
        };

        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(computeActive);
        };

        computeActive();
        container.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        // If anchors are not yet present (due to mount timing), retry once shortly after
        if (getTargets().length === 0) {
            setTimeout(() => {
                computeActive();
            }, 0);
        }
        return () => {
            container.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark', 'transition-colors', 'duration-500', 'ease-in-out');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };

    const getContainer = useCallback(() => document.getElementById('scroll-container'), []);

    const scrollTo = useCallback((target) => {
        const container = getContainer();
        if (!container) return;

        const startTop = container.scrollTop;
        scroller.scrollTo(target, {
            containerId: 'scroll-container',
            duration: 500,
            smooth: true,
            offset: -16,
        });

        // Fallback: if not moved shortly, perform manual smooth scroll
        setTimeout(() => {
            const moved = container.scrollTop !== startTop;
            if (!moved) {
                const el = container.querySelector(`#${target}`) || container.querySelector(`[name="${target}"]`);
                if (!el) return;
                const containerRect = container.getBoundingClientRect();
                const elRect = el.getBoundingClientRect();
                const delta = (elRect.top - containerRect.top) + startTop - 16; // apply offset
                container.scrollTo({ top: Math.max(0, delta), behavior: 'smooth' });
            }
        }, 50);
    }, [getContainer]);

    return (
        <div className="flex flex-col items-center h-[100vh] gap-y-4 w-16 bg-brand shadow-lg border-r border-primary">
            <div className="text-center mt-4">
                <button 
                    onClick={toggleDarkMode}
                    className={`cursor-pointer p-2 rounded-lg ${darkMode ? 'bg-gray-700 dark:text-gray-200' : 'bg-sky-400 text-yellow-200'} hover:opacity-80 transition-all duration-300`}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    <div className="relative h-6 w-6">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-6 w-6 absolute transition-all duration-300 transform ${darkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-6 w-6 absolute transition-all duration-300 transform ${darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </div>
                </button>
            </div>
            
            <button type="button" onClick={() => { setActiveSection('home'); scrollTo('home'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='home' ? 'active' : ''}`}>
                <IoMdHome className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('about'); scrollTo('about'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='about' ? 'active' : ''}`} aria-label="About">
                <IoMdPerson className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('projects'); scrollTo('projects'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='projects' ? 'active' : ''}`} aria-label="Projects">
                <IoMdFolderOpen className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('skills'); scrollTo('skills'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='skills' ? 'active' : ''}`} aria-label="Skills">
                <IoMdConstruct className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('technologies'); scrollTo('technologies'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='technologies' ? 'active' : ''}`} aria-label="Technologies">
                <IoMdCode className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('testimonials'); scrollTo('testimonials'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='testimonials' ? 'active' : ''}`} aria-label="Testimonials">
                <IoMdChatbubbles className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
            <button type="button" onClick={() => { setActiveSection('contact'); scrollTo('contact'); }} className={`text-center cursor-pointer px-2 py-2 nav-link ${activeSection==='contact' ? 'active' : ''}`} aria-label="Contact">
                <IoMdMail className="text-4xl text-variant hover:opacity-80 nav-icon"/>
            </button>
        </div>
    )
}