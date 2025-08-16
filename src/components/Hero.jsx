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

    
    const goContacts = () => {
        scroller.scrollTo('contact', {
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
        <section className="relative flex mt-[10vh] justify-center min-h-screen overflow-hidden px-6 bg-primary">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-accent/20" />
                
                {/* Animated radial gradient */}
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-transparent via-bg-primary/10 to-transparent"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                
                {/* Animated dots */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[length:20px_20px] opacity-10" />
            </div>

            <motion.div className="text-center max-w-4xl w-full" variants={containerVariants} initial="hidden" animate="visible">
                {/* Greeting */}
                <motion.div 
                    className="text-secondary text-lg md:text-xl font-medium mb-4"
                    variants={itemVariants}
                >
                    Hi there! I'm Jayzher Juaniza
                </motion.div>

                {/* Typing Animation */}
                <motion.div 
                    className="text-2xl md:text-3xl font-semibold text-secondary mb-8 h-10 md:h-12 flex items-center justify-center"
                    variants={itemVariants}
                >
                    <span className="text-secondary/80 mr-2">I'm a</span>
                    <span className="relative">
                        <span className="text-secondary font-bold">
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
                        className="cursor-pointer px-8 py-3.5 hover:!bg-brand rounded-xl font-semibold text-lg
                                !text-white bg-brand-light !shadow-lg transform hover:!-translate-y-0.5 transition-all duration-300 focus:outline-none
                                focus:ring-4 focus:ring-brand/30"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                    </motion.button>
                    
                    <a 
                        href="#"
                        onClick={goContacts}
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
                    className="absolute mt-[5rem] left-1/2 -translate-x-1/2 flex flex-col items-center"
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
