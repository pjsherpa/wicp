import Navbar from "./component/Navbar";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Travel from "./pages/Travel";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About us" element={<About />} />
        <Route path="Travel Through" element={<Travel />} />
        <Route path="Contact us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
