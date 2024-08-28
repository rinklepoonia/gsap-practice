import "./App.css";
import { Box } from "./components/Box";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LeftRight from "./components/LeftRight";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Cards />
      <LeftRight />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
