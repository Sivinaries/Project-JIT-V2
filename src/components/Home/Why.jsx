import learn from '../../assets/images/learn.svg';
import cultur from '../../assets/images/cultur.svg';
import global from '../../assets/images/global.svg';
import safe from '../../assets/images/safe.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

function Why() {
    const items = [
        { img: learn, title: 'Hands-On Learning', desc: 'Engage in interactive workshops and field visits.' },
        { img: cultur, title: 'Cultural Discovery', desc: 'Experience traditions, food, and history like a local.' },
        { img: safe, title: 'Safety Travel', desc: 'Your safety is our top priority. With well-planned trips.' },
        { img: global, title: 'Global Perspective', desc: 'Build skills and connections for a brighter future.' },
    ];

    return (
        <div className="grid grid-cols-1 bg-black h-full">
            <div className="my-8 md:my-20 space-y-8 md:space-y-20">
                <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
                    <div>
                        <h1 className="text-2xl md:text-7xl text-white font-semibold text-center">Why Choose</h1>
                        <h1 className="text-2xl md:text-7xl text-white font-semibold text-center">JavaIndoTrip</h1>
                    </div>
                    <div className="mx-auto relative">
                        <div className="bg-black p-3 rounded-xl">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
                                modules={[Autoplay, Navigation]}
                                breakpoints={{
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                }}
                                className="w-full"
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={index} className="flex justify-center">
                                        <div className="space-y-2 md:space-y-4 text-center w-3/4 mx-auto">
                                            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto">
                                                <img className="w-full h-full object-contain" src={item.img} alt={item.title} />
                                            </div>
                                            <h1 className="text-white text-base md:text-3xl font-semibold">{item.title}</h1>
                                            <h1 className="text-white text-base md:text-xl font-light">{item.desc}</h1>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Navigation Arrows */}
                            <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 text-black p-2 md:hidden bg-white rounded-full z-10">
                                <MdArrowBack size={24} />
                            </button>
                            <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 text-black p-2 md:hidden bg-white rounded-full z-10">
                                <MdArrowForward size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;
