import learn from '../../assets/images/learn.svg'
import cultur from '../../assets/images/cultur.svg'
import global from '../../assets/images/global.svg'

function Why() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20 space-y-8 md:space-y-20'>
                <div>
                    <h1 className='text-2xl md:text-7xl text-white font-semibold text-center'>Why Join Us</h1>
                </div>
                <div className='md:max-w-6xl mx-auto'>
                    <div className='md:flex justify-between  space-y-4 md:space-y-0'>
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
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Cultural Discovery</h1>
                                <h1 className='text-white text-base md:text-xl font-light'>
                                    Experience traditions, food, and history like a local.
                                </h1>
                            </div>
                        </div>
                        <div className='space-y-2 md:space-y-4'>
                            <div className='w-16 md:w-24 h-16 md:h-24 mx-auto'>
                                <img className='w-full h-full' src={global} alt="" />
                            </div>
                            <div className='text-center w-3/4 mx-auto'>
                                <h1 className='text-white text-base md:text-3xl font-semibold'>Global Perspective</h1>
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