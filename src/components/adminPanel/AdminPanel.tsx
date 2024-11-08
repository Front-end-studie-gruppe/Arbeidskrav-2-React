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
    alert("Successfully updated talk");
  };
  const handleUpdatedSpeaker = () => {
    alert("Successfully updated speaker");
  };
  const handleUpdatedRoom = () => {
    alert("Sucessfully updated room");
  };
  const handleDeletedTalk = () => {
    alert("Successfully deleted talk");
  };
  const handleDeletedSpeaker = () => {
    alert("Successfully deleted speaker");
  };
  const handleDeletedRoom = () => {
    alert("Sucessfully deleted room");
  };
  return (
    <section className={panelStyle.container}>
      <AddForm onTalkAdded={handleAddedTalk} onSpeakerAdded={handleAddedSpeaker} onRoomAdded={handleAddedRoom} />
      <UpdateForm
        onRoomUpdated={handleUpdatedRoom}
        onSpeakerUpdated={handleUpdatedSpeaker}
        onTalkUpdated={handleUpdatedTalk}
        onTalkDeleted={handleDeletedTalk}
        onSpeakerDeleted={handleDeletedSpeaker}
        onRoomDeleted={handleDeletedRoom}
      />
    </section>
  );
};

export default AdminPanel;
