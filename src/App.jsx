import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Creations from "./components/Creations"
import Footer from "./components/Footer"

function App() {
  const [navState, setNavState] = useState(false);
  const navList = ["About", "Careers", "Events", "Products", "Support"];

  return (
    <div className="min-h-full">
      <header className="min-h-screen bg-cover bg-center bg-[url('../src/assets/mobile/image-hero.jpg')] px-6 py-10 flex flex-col gap-6 text-white md:p-16 lg:bg-[url('../src/assets/desktop/image-hero.jpg')]">
        <Header setNavState={setNavState} navList={navList} />

        <Nav navState={navState} setNavState={setNavState} />

        <Hero />
      </header>

      <main className="px-6 py-20 font-alata md:px-16 lg:mx-auto xl:px-16">
        <About />
          
        <Creations />
      </main>

      <Footer navList={navList} />
    </div>
  )
}

export default App
