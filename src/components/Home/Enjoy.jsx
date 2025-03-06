import immertion from '../../assets/images/immertion.png';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const viewportSettings = { once: true, amount: 0.2 };

const textMotion = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.5, duration: 1 },
    viewport: viewportSettings,
};

const imageMotion = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { delay: 0.8, duration: 0.8 },
    viewport: viewportSettings,
};

function Enjoy() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                <div className='mx-4 space-y-4 md:space-y-6 md:mx-20'>
                    <div className='md:flex md:gap-4'>
                        <MotionDiv className='md:w-1/2' {...imageMotion}>
                            <img className='w-full h-full' src={immertion} alt="Immersion" />
                        </MotionDiv>

                        <div className='space-y-4 md:space-y-12 md:w-1/2 my-auto'>
                            <MotionDiv {...textMotion}>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Enjoy a Study</h1>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Immersion Experience</h1>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Like Never Before</h1>
                            </MotionDiv>
                            <MotionDiv {...textMotion}>
                                <h1 className='text-white text-base md:text-4xl font-light'>
                                    Join us for an unforgettable study immersion journey where education meets real-world experience. Our programs are designed to provide a deep cultural and academic engagement, blending hands-on learning with exploration. Whether you're traveling with classmates, colleagues, or friends, we take care of every detail, allowing you to fully immerse yourself in new knowledge and meaningful experiences.
                                </h1>
                            </MotionDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enjoy;