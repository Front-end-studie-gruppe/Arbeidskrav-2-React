import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage/Home";
import Program from "../pages/program/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/MyPage";
import InfoPage from "../pages/InfoPage";

const App_routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/talk/:talkId" element={<InfoPage />} />{" "}
        
      </Routes>
    </>
  );
};

export default App_routes;
