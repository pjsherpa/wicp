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
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/travel" element={<Travel />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
