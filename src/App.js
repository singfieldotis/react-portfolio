import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Home />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
