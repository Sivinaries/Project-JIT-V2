import airasia from '../../assets/images/partner/airasia.png';
import garuda from '../../assets/images/partner/garuda.png';
import batik from '../../assets/images/partner/batik.png';
import citilink from '../../assets/images/partner/citilink.png';
import lion from '../../assets/images/partner/lion.png';
import sriwijaya from '../../assets/images/partner/sriwijaya.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Partner() {
    const partners = [airasia, garuda, batik, citilink, lion, sriwijaya];

    return (
        <section id='service'>
            <div className='grid grid-cols-1 bg-black h-full'>
                <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                    <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
                        <div>
                            <h1 className='text-2xl md:text-7xl text-white font-semibold'>Our Partner</h1>
                        </div>
                        <div className='bg-white p-3 rounded-xl'>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={2}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                loop={true}
                                modules={[Autoplay]}
                                breakpoints={{
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                }}
                                className='w-full'
                            >
                                {partners.map((partner, index) => (
                                    <SwiperSlide key={index} className='flex justify-center'>
                                        <div className='w-full h-[60px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex items-center justify-center'>
                                            <img src={partner} alt={`Partner ${index + 1}`} className='w-full h-full object-contain' />
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

export default Partner;