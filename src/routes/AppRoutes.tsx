import Home from "../pages/homePage/Home";
import Program from "../pages/program/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/MyPage";
import { Route, Routes } from "react-router-dom";
import AdminRigthsSecure from "./AdminRigthsSecure";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program" element={<Program />} />
      <Route path="/contact" element={<Contact />} />
      <Route 
        path="/mypage" 
        element={
          <AdminRigthsSecure>
            <MyPage />
          </AdminRigthsSecure>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;

