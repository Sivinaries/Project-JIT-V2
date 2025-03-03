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
import Layanan from '../components/Home/Layanan'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Whatsapp />
                <About />
                <Layanan />
                <Journey />
                <Indo />
                <Enjoy />
                <Why />
                <Contact />
            </div>
            <Footer />
        </main>
    )
}

export default Home
