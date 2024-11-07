import AddForm from "../adminPanelForms/addForm/AddForm";
import UpdateForm from "../adminPanelForms/updateForm/UpdateForm";
import panelStyle from "./panel.module.css";

const AdminPanel = () => {
  const handleAddedTalk = () => {
    alert("Successfully added room");
  };
  const handleAddedSpeaker = () => {
    alert("Successfully added speaker");
  };
  const handleAddedRoom = () => {
    alert("Sucessfully added room");
  };

  const handleUpdatedTalk = () => {
    alert("Successfully added room");
  };
  const handleUpdatedSpeaker = () => {
    alert("Successfully added speaker");
  };
  const handleUpdatedRoom = () => {
    alert("Sucessfully added room");
  };
  const handleDeletedTalk = () => {
    alert("Successfully added room");
  };
  const handleDeletedSpeaker = () => {
    alert("Successfully added speaker");
  };
  const handleDeletedRoom = () => {
    alert("Sucessfully added room");
  };
  return (
    <div className={panelStyle.container}>
      <AddForm onTalkAdded={handleAddedTalk} onSpeakerAdded={handleAddedSpeaker} onRoomAdded={handleAddedRoom} />
      <UpdateForm
        onRoomUpdated={handleUpdatedRoom}
        onSpeakerUpdated={handleUpdatedSpeaker}
        onTalkUpdated={handleUpdatedTalk}
        onTalkDeleted={handleDeletedTalk}
        onSpeakerDeleted={handleDeletedSpeaker}
        onRoomDeleted={handleDeletedRoom}
      />
    </div>
  );
};

export default AdminPanel;
