import AdminPanel from "../../components/adminPanel/adminPanel";
import myPageStyle from "./MyPage.module.css";

const MyPage: React.FC = () => {
  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className={myPageStyle.container}>
      <h1>My Page (Admin)</h1>
      <AdminPanel onAddClick={handleAddClick} />
    </div>
  );
};

export default MyPage;
