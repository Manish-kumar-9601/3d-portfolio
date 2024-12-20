import { About } from "./section/About";
import { Clients } from "./section/Clients";
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
    </h1>
  )
}