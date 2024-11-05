import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import cookie from "js-cookie";
import { login, logout } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = cookie.get("username");
    const role = cookie.get("role");
  
    if (username && role) {
      dispatch(login({ username, role })); 
    } else {
      dispatch(logout()); 
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
