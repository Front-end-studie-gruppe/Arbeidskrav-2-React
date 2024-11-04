import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/homePage/Home";
import Program from "./pages/program/Program";
import Contact from "./pages/Contact";
import InfoPage from "./pages/InfoPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/talk/:talkId" element={<InfoPage />} />{" "}
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
