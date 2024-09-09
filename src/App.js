import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Procedures from "./pages/Procedures";
import Billing from "./pages/Billing";
import Contact from "./pages/Contact";
import Directions from "./pages/Directions";
import FAQ from "./pages/FAQ";
import PostOp from "./pages/PostOp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/postop" element={<PostOp />} />
        <Route path="/procedures" element={<Procedures />} />
      </Routes>
    </>
  );
}

export default App;
