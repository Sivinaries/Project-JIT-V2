import immertion from '../../assets/images/immertion.png'

function Enjoy() {
    return (
        <div className='grid grid-cols-1 bg-black h-full'>
            <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                <div className='mx-4 space-y-4 md:space-y-6 md:mx-20'>
                    <div className='md:flex md:gap-4'>
                        <div className='md:w-1/2'>
                            <img className='w-full h-full' src={immertion} alt="" />
                        </div>

                        <div className='space-y-4 md:space-y-12 md:w-1/2 my-auto'>
                            <div>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Enjoy a Study</h1>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'>Immersion Experience</h1>
                                <h1 className='text-white text-2xl md:text-5xl font-semibold'> Like Never Before</h1>
                            </div>
                            <div>
                                <h1 className='text-white text-base md:text-4xl font-light'>
                                    Join us for an unforgettable study immersion journey where education meets real-world experience. Our programs are designed to provide a deep cultural and academic engagement, blending hands-on learning with exploration. Whether you're traveling with classmates, colleagues, or friends, we take care of every detail, allowing you to fully immerse yourself in new knowledge and meaningful experiences.                                    </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Enjoy