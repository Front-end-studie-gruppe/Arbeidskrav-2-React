import Home from "../pages/homePage/Home";
import Program from "../pages/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/MyPage"
import { Route, Routes } from "react-router-dom";

const App_routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default App_routes;
