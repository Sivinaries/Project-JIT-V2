import about from '../../assets/images/about.png';

function About() {
    return (
        <section id='about'>
            <div className="grid grid-cols-1 bg-black h-full">
                <div className="my-8 md:my-20">
                    <div className="mx-4 md:mx-20">
                        <div className="md:flex space-y-4 md:gap-4 items-center">
                            <div className="md:w-1/2">
                                <img className="w-full h-full" src={about} alt="About Us" />
                            </div>
                            <div className="space-y-4 md:space-y-12 md:w-1/2 flex flex-col justify-center my-auto">
                                <h1 className="text-white text-2xl md:text-5xl font-semibold">About Us</h1>
                                <h1 className="text-white text-2xl md:text-5xl font-semibold">
                                Who We Are
                                </h1>
                                <p className="text-white text-base md:text-4xl font-light">
                                    Java Indotrip was established in 2019 with a passion for teaching others about Indonesia, and have been making travel dreams come true ever since. Join us for a discovery of the world’s through and Indonesia’s culture and sights, and experience authentic Southeast Asia!
                                    Java Indotrip has been trusted to Study Immersion and other Tour activity for inbound or outbound with all scale from small to large size participants which supported and backed up by professional staffs and Tour Guides for regular and special trip. We are ready to serve our customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
