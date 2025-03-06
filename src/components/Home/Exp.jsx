function Exp() {
    return (
        <div className="grid grid-cols-1 bg-black h-full">
            <div className="my-8 md:my-20">
                <div className="mx-4 md:mx-20">
                    <div className="bg-white p-3 rounded-xl">
                        <div className='grid grid-cols-3 rounded-xl text-center'>
                            <div>
                                <h1 className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold'>
                                    5+
                                </h1>
                                <span className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'>
                                    Experience
                                </span>
                            </div>

                            <div className='border-r-2 border-l-2'>
                                <h1 className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold'>
                                    99^
                                </h1>
                                <span className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'>
                                    Clients
                                </span>
                            </div>

                            <div>
                                <h1 className='text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold'>
                                    10^
                                </h1>
                                <span className='text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center'>
                                    Countries
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exp;