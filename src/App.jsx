import { useState } from 'react'
import { Navbar, AboutUs, Services, OurServices, Managers, Subcribe, Footer, Hero, Expierence } from './sections';
import { Roadmap } from './components';
function App() {

    return (
        <main className="relative  ">
            <Navbar />
            <section>
                <Hero />
            </section>
            <section className="padding ">
                <AboutUs />
            </section>
            <section className="padding-x">
                <Services />
            </section>
            <section className="">
                <OurServices />
            </section>
            <section className="padding">
                <Expierence />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subcribe />
            </section>
            <section className="padding-x bg-slate-950 sm:py-32 py-16 w-full">
                <Footer />
            </section>
        </main>
    )
}

export default App
