import { About } from "./section/About";
import { Clients } from "./section/Clients";
import Contact from "./section/Contact";
import { Experience } from "./section/Experience";
import { Hero } from "./section/Hero";
import { Navbar } from "./section/Navbar";
import { Projects } from "./section/Projects";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
    <Navbar />
    <Hero/> 
    <About/>
    <Projects />
    <Clients />
    <Experience />
    <Contact />
    </h1>
  )
}