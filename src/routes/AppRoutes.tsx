<<<<<<< HEAD
import Home from "../pages/homePage/Home";
import Program from "../pages/program/Program";
import Contact from "../pages/Contact";
import MyPage from "../pages/MyPage";
=======

import Program from "../pages/Program";

>>>>>>> 0bfd7cf (endret litt style)
import { Route, Routes } from "react-router-dom";

const App_routes = () => {
  return (
    <>
      <Routes>
      
        <Route path="/program" element={<Program />} />
<<<<<<< HEAD
        <Route path="/contact" element={<Contact />} />
        <Route path="/mypage" element={<MyPage />} />
=======
        
>>>>>>> 0bfd7cf (endret litt style)
      </Routes>
    </>
  );
};

export default App_routes;
