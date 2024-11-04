<<<<<<< HEAD
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/footer/Footer";
=======

import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Program from "./pages/Program"
import Contact from "./pages/Contact"
import Footer from "./components/footer/Footer"


import AppRoutes from "./routes/AppRoutes";

>>>>>>> 0bfd7cf (endret litt style)

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <AppRoutes />
      <Footer />
=======

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <AppRoutes />

>>>>>>> 0bfd7cf (endret litt style)
    </>
  );
}

export default App;

