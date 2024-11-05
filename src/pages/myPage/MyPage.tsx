import AdminPanel from "../../components/adminPanel/AdminPanel";
import myPageStyle from "./MyPage.module.css";

const MyPage = () => {
  const handleAddedTalk = () => {
    alert("Successfully added room");
  };
  const handleAddedSpeaker = () => {
    alert("Successfully added speaker");
  };
  const handleAddedRoom = () => {
    alert("Sucessfully added room");
  };
  return (
    <div className={myPageStyle.container}>
      <h1>My Page (Admin)</h1>
      <AdminPanel onTalkAdded={handleAddedTalk} onSpeakerAdded={handleAddedSpeaker} onRoomAdded={handleAddedRoom} />
    </div>
  );
};

export default MyPage;
