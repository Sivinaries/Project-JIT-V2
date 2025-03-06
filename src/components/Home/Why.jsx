import learn from '../../assets/images/learn.svg';
import cultur from '../../assets/images/cultur.svg';
import global from '../../assets/images/global.svg';
import safe from '../../assets/images/safe.svg';
import price from '../../assets/images/price.svg';
import comfort from '../../assets/images/comfort.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const viewportSettings = { once: true, amount: 0.2 };

const imageMotion = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
    viewport: viewportSettings,
};

const textMotion = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.5, duration: 1 },
    viewport: viewportSettings,
  };
  

const whyItems = [
    { image: learn, title1: "Hands-On", title2: "Learning", description: "Engage in interactive workshops and real-world experiences." },
    { image: cultur, title1: "Cultural", title2: "Discovery", description: "Experience local traditions, history, and authentic cuisine." },
    { image: safe, title1: "Safety", title2: "First", description: "Enjoy a secure journey with well-planned safety measures." },
    { image: global, title1: "Global", title2: "Perspective", description: "Broaden your horizons and connect with a worldwide network." },
    { image: comfort, title1: "Comfortable", title2: "Journeys", description: "Relax with premium accommodations and seamless itineraries." },
    { image: price, title1: "Affordable", title2: "Pricing", description: "Experience top-quality travel at budget-friendly rates." },
];

function Why() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20'>
                <div className='mx-4 space-y-4 md:space-y-20 md:mx-20'>
                    <motion.div {...textMotion}>
                        <h1 className='text-2xl md:text-7xl text-white font-semibold text-center'>Why Choose Us</h1>
                    </motion.div>

                    {/* Swiper for Mobile */}
                    <div className="md:hidden">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.2}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Autoplay]}
                        >
                            {whyItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }} 
                                        whileInView={{ opacity: 1, scale: 1 }} 
                                        transition={{ duration: 0.6 }} 
                                        viewport={viewportSettings}
                                        className='flex flex-col items-center justify-between bg-gray-900 rounded-3xl p-4 h-full w-full mx-auto'
                                    >
                                        <motion.div {...imageMotion} className='w-16 h-16'>
                                            <img className='w-full h-full object-contain' src={item.image} alt={item.title1} />
                                        </motion.div>
                                        <div className='text-center flex flex-col justify-center flex-1'>
                                            <motion.h1 {...textMotion} className='text-white text-lg font-semibold'>{item.title1}</motion.h1>
                                            <motion.h1 {...textMotion} className='text-white text-lg font-semibold'>{item.title2}</motion.h1>
                                            <motion.h1 {...textMotion} className='text-white text-sm font-light'>{item.description}</motion.h1>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Grid Layout for Desktop */}
                    <div className="hidden md:grid grid-cols-3 gap-6">
                        {whyItems.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, scale: 0.9 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                transition={{ duration: 0.6 }} 
                                viewport={viewportSettings}
                                className='flex flex-col items-center justify-between bg-gray-900 rounded-3xl p-6 h-full w-full mx-auto'
                            >
                                <motion.div {...imageMotion} className='w-24 h-24'>
                                    <img className='w-full h-full object-contain' src={item.image} alt={item.title1} />
                                </motion.div>
                                <div className='text-center flex flex-col justify-center flex-1'>
                                    <motion.h1 {...textMotion} className='text-white text-2xl font-semibold'>{item.title1}</motion.h1>
                                    <motion.h1 {...textMotion} className='text-white text-2xl font-semibold'>{item.title2}</motion.h1>
                                    <motion.h1 {...textMotion} className='text-white text-base font-light'>{item.description}</motion.h1>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;
