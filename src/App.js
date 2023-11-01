import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Indicators from "./components/Indicators";
import Bots from "./components/Bots";
import Scripts from "./components/Scripts";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market/indicators" element={<Indicators />} />
          <Route path="/market/bots" element={<Bots />} />
          <Route path="/market/scripts" element={<Scripts />} />
          <Route path="/custom" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
