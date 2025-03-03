import { Link } from "react-router-dom";
import wa from '../assets/images/wa.svg';
import { FaArrowUp } from "react-icons/fa6";

function Whatsapp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="z-50 fixed bottom-8 right-6 opacity-85 shadow-cyan-500 hover:opacity-100">
        <button onClick={scrollToTop}>
          <div className="bg-cyan-500 opacity-85 shadow-cyan-600 xl:p-2 rounded-full px-2 py-6  hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </div>
      <div className="z-50 fixed bottom-12 left-10 opacity-85 shadow-emerald-200 hover:opacity-100">
        <Link to="">
          <img src={wa} alt="WhatsApp Logo" className="w-12 h-12 md:w-14 md:h-14" />
        </Link>
      </div>
    </>
  );
}

export default Whatsapp;
