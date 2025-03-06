import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function useCountAnimation(target) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 50);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 50);

            return () => clearInterval(timer);
        }
    }, [inView, target]);

    return { count, ref };
}

function Exp() {
    const { count: experience, ref: expRef } = useCountAnimation(5);
    const { count: clients, ref: clientsRef } = useCountAnimation(99);
    const { count: countries, ref: countriesRef } = useCountAnimation(10);

    return (
        <div className="grid grid-cols-1 bg-black h-full">
            <div className="my-8 md:my-20">
                <div className="mx-4 md:mx-20">
                    <div className="bg-white p-3 rounded-xl">
                        <div className="grid grid-cols-3 rounded-xl text-center">
                            {/* Experience */}
                            <div ref={expRef}>
                                <motion.h1 
                                    className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold"
                                    animate={{ scale: [0.9, 1] }} 
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    {experience}+
                                </motion.h1>
                                <span className="text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center">
                                    Experience
                                </span>
                            </div>

                            {/* Clients */}
                            <div className="border-r-2 border-l-2" ref={clientsRef}>
                                <motion.h1 
                                    className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold"
                                    animate={{ scale: [0.9, 1] }} 
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    {clients}+
                                </motion.h1>
                                <span className="text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center">
                                    Clients
                                </span>
                            </div>

                            {/* Countries */}
                            <div ref={countriesRef}>
                                <motion.h1 
                                    className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center text-black font-semibold"
                                    animate={{ scale: [0.9, 1] }} 
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    {countries}+
                                </motion.h1>
                                <span className="text-black font-light text-xs xl:text-xl 2xl:text-2xl text-center">
                                    Countries
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exp;
