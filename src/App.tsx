import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Tabs />
      </div>
      <div>FOOTER</div>
    </div>
  );
};

export default App;
