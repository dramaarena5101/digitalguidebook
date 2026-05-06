import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Performances from "./components/Performances";
import RundownSequence from "./components/RundownSequence";
import Timeline from "./components/Timeline";
import Judges from "./components/Judges";
import { Ticker, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-da-black min-h-screen text-da-text font-syne">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Categories />
      <Performances />
      <Ticker />
      <RundownSequence />
      <Timeline />
      <Judges />
      <Footer />
    </div>
  );
}
