import immertion from '../../assets/images/immertion.png'
import safe from '../../assets/images/safe.svg'
import price from '../../assets/images/price.svg'
import comfort from '../../assets/images/comfort.svg'

function Enjoy() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
                    <div className='md:flex justify-between'>
                        <div>
                            <h1 className='text-xl md:text-5xl text-white font-semibold text-center'>🌍 Study Like Holiday!</h1>
                        </div>
                        <div className='my-auto'>
                            <h1 className='text-lg md:text-4xl text-white font-light text-center'>Student Immersion</h1>
                        </div>
                    </div>
                    <div className=''>
                    <div className='md:w-1/2'>
                            <img className='w-full h-full' src={immertion} alt="" />
                        </div>

                        <div className='space-y-4 md:space-y-12 md:w-1/2 my-auto'>
                            <div>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Enjoy a Study Tour Experience</h1>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'> Like Never Before</h1>
                            </div>
                            <div>
                                <h1 className='text-white text-base md:text-xl font-light'>Join us for an unforgettable journey where learning meets adventure. Our study tours are carefully designed to offer a perfect balance of education, exploration, and enjoyment. Whether you're traveling with classmates, colleagues, or friends, we ensure every aspect of your trip is taken care of, leaving you free to focus on making memories and gaining valuable knowledge.</h1>
                            </div>
                            {/* <div className='md:flex space-y-4 md:space-y-0 md:gap-6'>
                                <div className='my-auto'>
                                    <div className='w-16 h-16 mx-auto'>
                                        <img className='w-full h-full' src={safe} alt="" />
                                    </div>
                                </div>
                                <div className='text-center md:text-left'>
                                    <h1 className='text-white text-base md:text-xl font-semibold'>Save Travelling</h1>
                                    <h1 className='text-white text-base md:text-xl font-light'>
                                        Your safety is our top priority. With well-planned trips, experienced teams, and reliable partners, we ensure a secure and worry-free journey.
                                    </h1>
                                </div>
                            </div>
                            <div className='md:flex space-y-4 md:space-y-0 md:gap-6'>
                                <div className='my-auto'>
                                    <div className='w-16 h-16 mx-auto'>
                                        <img className='w-full h-full' src={price} alt="" />
                                    </div>
                                </div>
                                <div className='text-center md:text-left'>
                                    <h1 className='text-white text-base md:text-xl font-semibold'>Affordable Price</h1>
                                    <h1 className='text-white text-base md:text-xl font-light'>
                                        We offer budget-friendly study tour packages with top-quality services, ensuring unforgettable experiences without overspending.
                                    </h1>
                                </div>
                            </div>
                            <div className='md:flex space-y-4 md:space-y-0 md:gap-6'>
                                <div className='my-auto'>
                                    <div className='w-16 h-16 mx-auto'>
                                        <img className='w-full h-full' src={comfort} alt="" />
                                    </div>
                                </div>
                                <div className='text-center md:text-left'>
                                    <h1 className='text-white text-base md:text-xl font-semibold'>Comfort Accommodation</h1>
                                    <h1 className='text-white text-base md:text-xl font-light'>
                                        Stay in cozy accommodations with modern amenities for a comfortable and refreshing experience throughout your trip.                                    </h1>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Enjoy