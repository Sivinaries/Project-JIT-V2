import sgp from '../../assets/images/sgp.png';
import japan from '../../assets/images/japan.png';
import thai from '../../assets/images/thai.png';
import malay from '../../assets/images/malay.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Journey() {
    return (
        <section id='service'>
            <div className='grid grid-cols-1 bg-black h-full'>
                <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                    <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
                        <div className='md:flex justify-between'>
                            <div>
                                <h1 className='text-xl md:text-5xl text-white font-semibold text-center'>🌍 Choose Your International Travel!</h1>
                            </div>
                            <div className='my-auto'>
                                <h1 className='text-lg md:text-4xl text-white font-light text-center'>Outbound</h1>
                            </div>
                        </div>

                        {/* Swiper for Mobile */}
                        <div className="md:hidden">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.2}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Autoplay]}
                            >
                                {[
                                    { image: sgp, title: "Singapore" },
                                    { image: japan, title: "Japan" },
                                    { image: malay, title: "Malaysia" },
                                    { image: thai, title: "Thailand" }
                                ].map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative">
                                            <img src={item.image} alt={item.title} className="w-full h-72 rounded-3xl object-cover" />
                                            <div className='absolute bottom-6 left-6 right-6'>
                                                <div className='flex justify-between'>
                                                    <h1 className="text-white font-semibold text-3xl">
                                                        {item.title}
                                                    </h1>
                                                    <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Grid Layout for Desktop */}
                        <div className="hidden md:block">
                            <div className="relative md:flex space-y-4 md:space-y-0 gap-6">
                                {/* Singapore Section */}
                                <div className="relative flex-shrink-0">
                                    <img src={sgp} alt="Singapore" className="w-full h-72 md:h-full object-fill" />
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <div className='flex justify-between'>
                                            <h1 className="text-white font-semibold text-3xl">
                                                Singapore
                                            </h1>
                                            <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                        </div>
                                    </div>
                                </div>
                                {/* Japan, Malaysia, Thailand */}
                                <div className='space-y-4 md:space-y-6 w-full'>
                                    <div className='md:flex flex-grow h-fit space-y-4 md:space-y-0 gap-2 md:gap-6'>
                                        <div className="relative flex-grow">
                                            <img src={japan} alt="Japan" className="w-full h-72 rounded-3xl object-fill" />
                                            <div className='absolute bottom-6 left-6 right-6'>
                                                <div className='flex justify-between'>
                                                    <h1 className="text-white font-semibold text-3xl">
                                                        Japan
                                                    </h1>
                                                    <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex-grow">
                                            <img src={malay} alt="Malaysia" className="w-full h-72 rounded-3xl object-fill" />
                                            <div className='absolute bottom-6 left-6 right-6'>
                                                <div className='flex justify-between'>
                                                    <h1 className="text-white font-semibold text-3xl">
                                                        Malaysia
                                                    </h1>
                                                    <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative flex-grow">
                                        <img src={thai} alt="Thailand" className="w-full h-72 rounded-3xl object-fill" />
                                        <div className='absolute bottom-6 left-6 right-6'>
                                            <div className='flex justify-between'>
                                                <h1 className="text-white font-semibold text-3xl">
                                                    Thailand
                                                </h1>
                                                <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Journey;
