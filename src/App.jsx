import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Creations from "./components/Creations"
import Footer from "./components/Footer"

function App() {
  const [navState, setNavState] = useState(false);

  return (
    <div className="min-h-full">
      <header className="min-h-screen bg-cover bg-[url('../src/assets/mobile/image-hero.jpg')] px-6 py-10 md:p-16 flex flex-col gap-6 text-white">
        <Header setNavState={setNavState} />

        <Nav navState={navState} setNavState={setNavState} />

        <Hero />
      </header>

      <main className=" px-6 py-20 font-alata md:px-16">
        <About />
          
        <Creations />
      </main>

      <Footer />
    </div>
  )
}

export default App
