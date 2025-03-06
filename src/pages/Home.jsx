import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Journey from '../components/Home/Journey'
import Enjoy from '../components/Home/Enjoy'
import Why from '../components/Home/Why'
import Whatsapp from '../components/Whatsapp'
import About from '../components/Home/About'
import Contact from '../components/Home/Contact'
import Indo from '../components/Home/Indo'
import Partner from '../components/Home/Partner'
import Galery from '../components/Home/Galery'
import Testi from '../components/Home/Testi'
import Exp from '../components/Home/Exp'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Whatsapp />
                <About />
                <Exp />
                <Journey />
                <Indo />
                <Enjoy />
                <Galery />
                <Partner />
                <Why />
                <Testi />
                <Contact />
            </div>
            <Footer />
        </main>
    )
}

export default Home
