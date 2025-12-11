import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import SplashCursor from "./components/SplashCursor";

export default function App() {
  return (
    <main className="bg-gradient-to-b from-black via-purple-950 to-black relative z-0">
      <SplashCursor />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
