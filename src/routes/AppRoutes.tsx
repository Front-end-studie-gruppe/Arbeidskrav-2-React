import Program from "../pages/program/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/myPage/MyPage";
import { Route, Routes } from "react-router-dom";
import AdminRigthsSecure from "./AdminRigthsSecure";
import Home from "../pages/homePage/Home";
import Speakers from "../pages/allSpeakers/Speakers";
import Talks from "../pages/allTalks/Talks";
import Rooms from "../pages/allRooms/Rooms";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program" element={<Program />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/talks" element={<Talks />} />
      <Route path="/rooms" element={<Rooms />} />
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

