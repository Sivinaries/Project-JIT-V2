import borobudur from '../../assets/images/borobudur.png';
import smg from '../../assets/images/smg.png';
import karimun from '../../assets/images/karimun.png';
import bromo from '../../assets/images/bromo.png';
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Indo() {
    const destinations = [
        { image: borobudur, title: "Candi Borobudur" },
        { image: smg, title: "Semarang" },
        { image: bromo, title: "Bromo" },
        { image: karimun, title: "Karimun Jawa" }
    ];

    return (
        <section id='destination'>
            <div className='grid grid-cols-1 bg-black h-full'>
                <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                    <div className='mx-4 space-y-4 md:space-y-6 md:mx-20'>
                        <div className='md:flex justify-between'>
                            <div>
                                <h1 className='text-xl md:text-5xl text-white font-semibold text-center'>🇮🇩 Explore the Beauty of Indonesia!</h1>
                            </div>
                            <div className='my-auto'>
                                <h1 className='text-lg md:text-4xl text-white font-light text-center'>Inbound</h1>
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
                                {destinations.map((item, index) => (
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
                        <div className="hidden md:block space-y-6">
                            <div className="relative md:flex space-y-4 md:space-y-0 gap-6">
                                <div className="relative flex-shrink-0 md:w-3/4">
                                    <img src={borobudur} alt="Borobudur" className="w-full h-72 object-cover rounded-3xl" />
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <div className='flex justify-between'>
                                            <h1 className="text-white font-semibold text-3xl">Candi Borobudur</h1>
                                            <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-shrink-0 md:w-1/4">
                                    <img src={smg} alt="Semarang" className="w-full h-72 object-cover rounded-3xl" />
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <div className='flex justify-between'>
                                            <h1 className="text-white font-semibold text-3xl">Semarang</h1>
                                            <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative md:flex space-y-4 md:space-y-0 gap-6">
                                <div className="relative flex-shrink-0 md:w-1/4">
                                    <img src={bromo} alt="Bromo" className="w-full h-72 object-cover rounded-3xl" />
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <div className='flex justify-between'>
                                            <h1 className="text-white font-semibold text-3xl">Bromo</h1>
                                            <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-shrink-0 md:w-3/4">
                                    <img src={karimun} alt="Karimun" className="w-full h-72 object-cover rounded-3xl" />
                                    <div className='absolute bottom-6 left-6 right-6'>
                                        <div className='flex justify-between'>
                                            <h1 className="text-white font-semibold text-3xl">Karimun Jawa</h1>
                                            <BsArrowUpRightCircle className='text-white text-2xl scale-125 my-auto' />
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

export default Indo;
