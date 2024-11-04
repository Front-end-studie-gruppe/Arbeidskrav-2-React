
import Program from "../pages/Program";

import { Route, Routes } from "react-router-dom";

const App_routes = () => {
  return (
    <>
      <Routes>
      
        <Route path="/program" element={<Program />} />
        
      </Routes>
    </>
  );
};

export default App_routes;
