import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Travel from "./pages/Travel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Travel" element={<Travel />} />
      </Routes>
    </div>
  );
}

export default App;
