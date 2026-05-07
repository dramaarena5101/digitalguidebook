import { useState } from "react";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Performances from "./components/Performances";
import RundownSequence from "./components/RundownSequence";
import Timeline from "./components/Timeline";
import Judges from "./components/Judges";
import Sponsors from "./components/Sponsors";
import { Ticker, Footer } from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <LoadingScreen onDone={() => setLoaded(true)} />
      {loaded && (
        <>
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
          <Sponsors />
          <Footer />
        </>
      )}
    </div>
  );
}
