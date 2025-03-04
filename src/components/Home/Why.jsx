import learn from '../../assets/images/learn.svg'
import cultur from '../../assets/images/cultur.svg'
import global from '../../assets/images/global.svg'
import safe from '../../assets/images/safe.svg'
import price from '../../assets/images/price.svg'
import comfort from '../../assets/images/comfort.svg'


function Why() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20 space-y-8 md:space-y-20'>
                <div>
                    <h1 className='text-2xl md:text-7xl text-white font-semibold text-center'>Why Choose Us</h1>
                </div>
                <div className=' mx-auto'>
                    <div className='md:flex justify-between grid grid-cols-2 gap-4 md:gap-0'>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={learn} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Hands-On Learning</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                    Engage in interactive workshops and field visits.
                                </h1>
                            </div>
                        </div>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={cultur} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Cultural</h1>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Discovery</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                    Experience traditions, food, and history like a local.
                                </h1>
                            </div>
                        </div>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={safe} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Safety</h1>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Travel</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                Your safety is our top priority. With well-planned trips.
                                </h1>
                            </div>
                        </div>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={global} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Global</h1>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Perspective</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                    Build skills and connections for a brighter future.
                                </h1>
                            </div>
                        </div>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={comfort} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Comfort</h1>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Trip</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                    Build skills and connections for a brighter future.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Why