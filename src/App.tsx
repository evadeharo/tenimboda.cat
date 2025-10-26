import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Important from "./components/Important";
import Location from "./components/Location";
import Present from "./components/Present";
import Time from "./components/Time";

function App() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Important />
      <Location />
      <Time />
      <Present />
      <Faqs />
      <Footer />
    </main>
  );
}

export default App;
