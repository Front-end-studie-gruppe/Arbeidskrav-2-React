import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reduxStore"; 
import { AdminRigthsSecureProps } from "../types/adminRigthsSecure.types"

const AdminRigthsSecure = ({ children }: AdminRigthsSecureProps) => {
  const { username, role } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username || role !== "admin") {
      navigate("/", { replace: true });
    }
  }, [username, role, navigate]);

  if (!username || role !== "admin") {
    return null; 
  }

  return <>{children}</>;
};


export default AdminRigthsSecure;







