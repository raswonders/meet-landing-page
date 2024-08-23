import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
