import { SiGmail } from "react-icons/si";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import logo from '../assets/images/logo.svg'

function Footer() {
    return (
        <footer className="h-fit w-full bg-black mx-auto">
            <div className='my-8 md:my-20 space-y-4 md:space-y-6'>
                <div className='mx-4 space-y-8 md:space-y-10 md:mx-20'>
                    <div className="grid grid-cols-4 p-2 xl:p-10 space-y-6 xl:space-y-0">
                        <div className="my-auto col-span-4 md:mx-auto md:col-span-1">
                            <div className="w-32 md:w-56">
                                <img className="w-full h-full" src={logo} alt="" />
                            </div>
                        </div>
                        <div className='space-y-4 col-span-2 md:col-span-1 md:mx-auto'>
                            <div>
                                <h1 className='font-bold text-white text-left text-base xl:text-lg 2xl:text-xl'>Our Address</h1>
                            </div>
                            <div className='text-center'>
                                <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Jln. Genuk Karanglo RT 2 RW 2 Semarang - Central Java, Indonesia</h1>
                            </div>
                        </div>
                        <div className='space-y-4 col-span-2 md:col-span-1 mx-auto'>
                            <div>
                                <h1 className='font-bold text-white text-left text-base xl:text-lg 2xl:text-xl'>Quick Link</h1>
                            </div>
                            <div className='space-y-2 text-center'>
                                <a href="/">
                                    <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Home</h1>
                                </a>
                                <a href="#service">
                                    <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Service</h1>
                                </a>
                                <a href="#galery">
                                    <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Galery</h1>
                                </a>
                                <a href="#contact">
                                    <h1 className='font-light text-white text-left text-xs xl:text-lg 2xl:text-xl'>Contact</h1>
                                </a>
                            </div>
                        </div>
                        <div className='space-y-4 col-span-4 mx-auto md:col-span-1'>
                            <div>
                                <h1 className='font-bold text-white text-left text-base xl:text-lg 2xl:text-xl'>Connect With Us</h1>
                            </div>
                            <div className='flex gap-4 xl:gap-8'>
                                <a href="https://www.instagram.com/javaindotrip/">
                                    <FaInstagram className='text-white w-10 h-10' />
                                </a>
                                <a href="https://www.facebook.com/javaindotrip">
                                    <FaFacebookSquare className='text-white w-10 h-10' />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=javaindotrip@gmail.com">
                                    <SiGmail className="text-white w-10 h-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 border-t mx-4">
                        <div className='text-center order-2 xl:order-1 p-2.5 xl:p-5 my-auto'>
                            <h1 className='font-light text-white text-center text-xs xl:text-lg 2xl:text-xl'>
                                Copyright © 2025 Java Indo Trip
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
