import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.svg';

const navLinks = [
    { title: 'Home', href:'/' },
    { title: 'Service', href:'#service' },
    { title: 'Galeri', href:'#galeri' },
    { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024); // Changed breakpoint to 1024px
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedLink = navLinks.find(link => link.to === currentPath);
        setActivePage(matchedLink);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut"
            }
        },
    };

    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav className={`z-50 fixed top-0 right-0 left-0 p-2 ${isScrollingUp ? 'bg-black bg-opacity-50' : 'bg-transparent'}`} variants={navLinksVariants}>
                    <div className="flex justify-between items-center p-2 md:mx-20">
                        <div className='my-auto'>
                            <a className='flex items-center' href="#home">
                                <div className='w-20 md:w-28 h-fit'>
                                    <img className='w-full h-full' src={logo} alt="" />
                                </div>
                                <div className='ml-2'>
                                    <p className='text-white text-left text-lg lg:text-xl xl:text-2xl font-light'>Java IndoTrip</p>
                                </div>
                            </a>
                        </div>
                        {isMobileView ? (
                            <button className="text-white">
                                {showModal ? (
                                    <FaTimes onClick={toggleModal} className="w-8 h-8" />
                                ) : (
                                    <FaBars onClick={toggleModal} className="w-8 h-8" />
                                )}
                            </button>
                        ) : (
                            <div className="hidden lg:flex gap-4 xl:gap-8 items-center border-2 p-3  rounded-full">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-white sm:text-sm lg:text-lg xl:text-xl font-light hover:scale-110 duration-200 delay-150 px-2">
                                {link.title}
                            </a>
                        ))}
                            </div>
                        )}
                    </div>
                    <AnimatePresence>
                        {showModal && isMobileView && (
                            <motion.div
                                className="fixed inset-0 flex justify-center items-center bg-black"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <FaTimes
                                    className="absolute top-4 right-4 text-white cursor-pointer w-8 h-8"
                                    onClick={toggleModal}
                                />
                                <motion.div
                                    className="relative w-full"
                                    variants={navLinksVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col gap-6 sm:gap-8 justify-center mx-6 h-full text-left">
                                    {navLinks.map((link, index) => (
                                    <motion.span key={index} className={`text-white text-3xl font-normal ${activePage && activePage.to === link.to ? '' : ''}`} variants={linkItemVariants} onClick={closeModal}>
                                        <a href={link.href}>{link.title}</a>
                                    </motion.span>
                                ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default Navbar;
