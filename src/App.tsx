<<<<<<< HEAD
import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Program from "./pages/Program"
import Contact from "./pages/Contact"
import Footer from "./components/footer/Footer"
=======
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
>>>>>>> origin/dev

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
=======
      <AppRoutes />
>>>>>>> origin/dev
    </>
  );
}

export default App;
