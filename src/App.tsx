import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Program from "./pages/Program"
import Contact from "./pages/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
