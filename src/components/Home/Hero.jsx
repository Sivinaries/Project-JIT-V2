/* eslint-disable no-irregular-whitespace */
import bg from '../../assets/images/bg.png';
import school from '../../assets/images/school.png';
import boro from '../../assets/images/galeri/2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Hero() {
  return (
    <section id='home'>
      <div
        className="grid grid-cols-1 h-screen bg-cover w-full bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="my-auto md:my-44 mx-2 md:mx-20 space-y-4 md:space-y-8">
          <div>
            <h1 className='text-white text-3xl md:text-7xl font-semibold'>
              Explore the World with Our
            </h1>
            <h1 className='text-white text-3xl md:text-7xl font-semibold'>
              Exclusive Travel Experiences!
            </h1>
          </div>
          <div className='md:w-1/3'>
            <h1 className='text-lg md:text-xl font-light text-white'>
              Discover our three exclusive travel packages: Holiday Trips, Outbound, Inbound, and Study Immersion Programs. 🌍✈️ Experience unforgettable journeys tailored for exploration, excitement, and learning!
            </h1>
          </div>
          <div className='grid md:flex justify-between gap-6'>
            <div className='p-2 md:p-4 bg-cyan-500 w-full md:w-fit h-fit rounded-full order-2 md:order-none'>
              <a href="">
                <h1 className='text-white font-semibold text-2xl md:text-4xl text-center px-4 md:px-6'>Book Now</h1>
              </a>
            </div>
            {/* Swiper Carousel */}
            <div className='p-2 bg-gray-500 backdrop-blur-sm bg-opacity-40 rounded-3xl order-1 md:order-none w-96 md:w-3/4'>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                className="w-full h-64 md:h-96"
              >
                <SwiperSlide>
                  <img className='w-full h-full object-cover rounded-lg' src={school} alt="School 1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-full object-cover rounded-lg' src={boro} alt="School 2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='w-full h-full object-cover rounded-lg' src={school} alt="School 3" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
