import img1 from '../../assets/images/galeri/img1.png';
import img2 from '../../assets/images/galeri/img2.png';
import img3 from '../../assets/images/galeri/img3.png';
import img4 from '../../assets/images/galeri/img4.png';
import img5 from '../../assets/images/galeri/img5.png';
import img6 from '../../assets/images/galeri/img6.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const viewportSettings = { once: true, amount: 0.2 };

const imageMotion = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
  viewport: viewportSettings,
};

function Galery() {
  return (
    <section id='galeri'>
      <div className='grid grid-cols-1 bg-black h-full'>
        <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
          <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
            <div>
              <h1 className='text-2xl md:text-7xl text-white font-semibold'>Our Gallery</h1>
            </div>
            <div className="relative">
              <Swiper
                spaceBetween={10}
                slidesPerView={1.2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <motion.div
                      initial="initial"
                      whileInView="whileInView"
                      transition="transition"
                      viewport="viewport"
                      variants={imageMotion}
                      className="w-full h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
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

export default Galery;
