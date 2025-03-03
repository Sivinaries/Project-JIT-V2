import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'

function Footer() {
    return (
        <footer className="h-fit w-full bg-black mx-auto">
            <div className="">
                <div className="grid grid-cols-2 p-2 xl:p-10 space-y-4 xl:space-y-0">
                    <div className="flex justify-around col-span-2 xl:col-span-1">
                        <div className="my-auto col-span-2">
                            <div className="w-28 md:w-56">
                                <img className="w-full h-full" src={logo} alt="" />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <h1 className='font-bold text-white text-left text-base xl:text-lg 2xl:text-xl'>Destination</h1>
                            </div>
                            <div className='space-y-2 text-center'>
                                <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Singapore</h1>
                                <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Japan</h1>
                                <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Thailand</h1>
                                <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Korea</h1>
                            </div>
                        </div>
                        <div className='space-y-4 col-span-1'>
                            <div>
                                <h1 className='font-bold text-white text-left text-base xl:text-lg 2xl:text-xl'>About</h1>
                            </div>
                            <div className='space-y-2 text-center'>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className='text-center order-2 xl:order-1 p-2.5 xl:p-5 my-auto'>
                        <h1 className='font-light text-white text-center text-xs xl:text-lg 2xl:text-xl'>
                            Copyright © 2025 Java Indo Trip
                        </h1>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
