import Home from "../pages/Home";
import Program from "../pages/Program";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";

const App_routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
};

export default App_routes;
