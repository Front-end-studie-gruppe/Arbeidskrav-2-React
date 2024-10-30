import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Program from "./pages/Program"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
