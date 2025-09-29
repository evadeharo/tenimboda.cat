import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Important from "./components/Important";
import Location from "./components/Location";
import Present from "./components/Present";
import Time from "./components/Time";

function App() {
  return (
    <main>
      <Hero />
      <Important />
      <Location />
      <Time />
      <Present />
      <Faqs />
    </main>
  );
}

export default App;
