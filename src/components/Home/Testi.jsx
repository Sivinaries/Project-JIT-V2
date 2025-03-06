import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import quote from '../../assets/images/quote.png';

function Testi() {
    const testiItems = [
        { description: "An unforgettable travel experience! The team was so helpful and made everything seamless.", name: "John Doe" },
        { description: "Absolutely loved my trip! Everything was perfectly organized, and I felt so taken care of.", name: "Jane Smith" },
        { description: "From start to finish, the journey was smooth. Highly recommend this agency!", name: "Michael Johnson" },
        { description: "A perfect vacation! The itinerary was well-planned, and the support was amazing.", name: "Sarah Williams" },
        { description: "Professional service and great recommendations! Made my dream trip a reality.", name: "David Brown" },
    ];

    return (
        <section id="testi">
            <div className='grid grid-cols-1 bg-black h-full'>
                <div className='my-8 md:my-20'>
                    <div className='mx-4 space-y-4 md:space-y-20 md:mx-20'>
                        <h1 className="text-2xl md:text-7xl text-white font-semibold text-center">
                            What Our Travelers Say
                        </h1>

                        {/* Swiper for Mobile */}
                        <div className="md:hidden">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.2}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Autoplay]}
                            >
                                {testiItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white p-4 rounded-3xl shadow-lg text-center">
                                            <img className="w-10 h-10 mx-auto mb-4" src={quote} alt="quote" />
                                            <p className="text-gray-700 text-lg italic line-clamp-3">{item.description}</p>
                                            <h1 className="text-cyan-500 text-lg font-semibold mt-4">{item.name}</h1>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Swiper for Desktop */}
                        <div className="hidden md:block">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                modules={[Autoplay]}
                            >
                                {testiItems.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-white p-4 rounded-3xl shadow-lg text-center h-64 flex flex-col justify-between">
                                            <img className="w-12 h-12 mx-auto" src={quote} alt="quote" />
                                            <p className="text-gray-700 text-xl italic">{item.description}</p>
                                            <h1 className="text-cyan-500 text-2xl font-semibold">{item.name}</h1>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testi;
