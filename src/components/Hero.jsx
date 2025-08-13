import { scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const TYPING_INTERVAL = 100;
const PROFESSIONS = ['Web Developer', 'Computer Technician', 'Tech Enthusiast'];

export default function Hero() {
    const [professionIndex, setProfessionIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentProfession = PROFESSIONS[professionIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting && displayText.length === currentProfession.length) {
                // Pause at the end of typing
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && displayText === '') {
                // Move to next profession after deleting
                setIsDeleting(false);
                setProfessionIndex((prev) => (prev + 1) % PROFESSIONS.length);
                return;
            }

            setDisplayText(isDeleting 
                ? currentProfession.substring(0, displayText.length - 1)
                : currentProfession.substring(0, displayText.length + 1)
            );
        }, isDeleting ? TYPING_INTERVAL / 2 : TYPING_INTERVAL);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, professionIndex]);

    const goProjects = () => {
        scroller.scrollTo('projects', {
            duration: 800,
            smooth: 'easeInOutCubic',
            containerId: 'scroll-container',
            offset: -16,
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 bg-primary">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary to-bg-secondary" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-transparent via-bg-primary/20 to-transparent" />
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>

            <motion.div 
                className="text-center max-w-4xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Greeting */}
                <motion.div 
                    className="text-brand text-lg md:text-xl font-medium mb-4"
                    variants={itemVariants}
                >
                    Hi there! I'm Jayzher Juaniza
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                    variants={itemVariants}
                >
                    <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                        Jayzee
                    </span>
                </motion.h1>

                {/* Typing Animation */}
                <motion.div 
                    className="text-2xl md:text-3xl font-semibold text-secondary mb-8 h-10 md:h-12 flex items-center justify-center"
                    variants={itemVariants}
                >
                    <span className="text-secondary/80 mr-2">I'm a</span>
                    <span className="relative">
                        <span className="text-brand font-bold">
                            {displayText}
                        </span>
                        <span className="absolute -right-3 top-0 bottom-0 w-1 bg-brand animate-pulse" />
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p 
                    className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
                    variants={itemVariants}
                >
                    I craft exceptional digital experiences through clean code and thoughtful design. 
                    Let's build something amazing together!
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={itemVariants}
                >
                    <motion.button
                        onClick={goProjects}
                        className="px-8 py-3.5 rounded-xl font-semibold text-lg
                                bg-gradient-to-r from-brand to-brand-light
                                text-primary shadow-lg hover:shadow-xl hover:shadow-brand/20
                                transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none
                                focus:ring-4 focus:ring-brand/30"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                    </motion.button>
                    
                    <a 
                        href="#contact"
                        className="px-8 py-3.5 rounded-xl font-semibold text-lg
                                bg-transparent border-2 border-border
                                !text-primary hover:!bg-primary/20
                                transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/20"
                    >
                        Get In Touch
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <span className="text-sm text-secondary mb-2">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
                        <motion.div 
                            className="w-1 h-2 bg-brand rounded-full"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 1.5,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
