import AdminPanel from "../../components/adminPanel/AdminPanel";
import myPageStyle from "./MyPage.module.css";

const MyPage = () => {
  return (
    <div className={myPageStyle.container}>
      <h1>
        My Page <span>(Admin)</span>
      </h1>
      <AdminPanel />
    </div>
  );
};

export default MyPage;
