import { motion } from 'framer-motion';
import bg from '../../assets/images/bg.png';
import school from '../../assets/images/school.png';
import { Link } from 'react-router-dom';

const MotionDiv = motion.div;

const viewportSettings = { once: true, amount: 0.2 };

const headingMotion = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: viewportSettings,
};

const textMotion = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 0.5, duration: 1 },
  viewport: viewportSettings,
};

const buttonMotion = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { duration: 0.5 },
  viewport: viewportSettings,
};

const imageMotion = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { delay: 0.8, duration: 0.8 },
  viewport: viewportSettings,
};

function Hero() {
  return (
    <section id='home'>
      <div
        className="grid grid-cols-1 h-screen bg-cover w-full bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="my-auto md:my-44 mx-2 md:mx-20 space-y-4 md:space-y-8">
          <MotionDiv {...headingMotion}>
            <h1 className='text-white text-3xl md:text-7xl font-semibold'>
              Explore the World with Our
            </h1>
            <h1 className='text-white text-3xl md:text-7xl font-semibold'>
              Exclusive Travel Experiences!
            </h1>
          </MotionDiv>

          <MotionDiv {...textMotion} className='md:w-1/3'>
            <h1 className='text-lg md:text-xl font-light text-white'>
              Discover our three exclusive travel packages: Holiday Trips, Outbound, Inbound, and Study Immersion Programs. 🌍✈️ Experience unforgettable journeys tailored for exploration, excitement, and learning!
            </h1>
          </MotionDiv>

          <div className='grid md:flex justify-between gap-6'>
            <MotionDiv {...buttonMotion} className='p-2 md:p-4 bg-cyan-500 w-full md:w-fit h-fit rounded-full order-2 md:order-none'>
            <Link to="https://api.whatsapp.com/send/?phone=6282139915898&text&type=phone_number&app_absent=0" target='blank'>
            <h1 className='text-white font-semibold text-2xl md:text-4xl text-center px-4 md:px-6'>Book Now</h1>
              </Link>
            </MotionDiv>
            
            <MotionDiv {...imageMotion} className='p-2 bg-gray-500 backdrop-blur-sm bg-opacity-40 rounded-3xl order-1 md:order-none w-96 md:w-3/4'>
              <img className='w-full h-64 md:h-96 object-cover rounded-lg' src={school} alt="School" />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
