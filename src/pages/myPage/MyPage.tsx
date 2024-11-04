import AdminPanel from "../../components/adminPanel/adminPanel";
import { room, Speaker, talk } from "../../types/types";
import myPageStyle from "./MyPage.module.css";

const MyPage = () => {
  const handleAddedTalk = (talk: talk) => {
    alert({ Message: "Successfully added talk", Value: talk });
  };
  const handleAddedSpeaker = (speaker: Speaker) => {
    alert({ Message: "Successfully added talk", Value: speaker });
  };
  const handleAddedRoom = (room: room) => {
    alert({ Message: "Successfully added talk", Value: room });
  };
  return (
    <div className={myPageStyle.container}>
      <h1>My Page (Admin)</h1>
      <AdminPanel
        onTalkAdded={handleAddedTalk}
        onSpeakerAdded={handleAddedSpeaker}
        onRoomAdded={handleAddedRoom}
      />
    </div>
  );
};

export default MyPage;
