import Program from "../pages/program/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/myPage/MyPage";
import { Route, Routes } from "react-router-dom";

const App_routes = () => {
  return (
    <>
      <Routes>
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default App_routes;
