import React from "react";
import panelStyle from "./panel.module.css";
import useAdminLogic from "./AdminPanelLogic";
import { AdminPanelProps } from "../../types/types";

const AdminPanel: React.FC<AdminPanelProps> = ({
  onTalkAdded,
  onSpeakerAdded,
  onRoomAdded,
}) => {
  const {
    talkData,
    speakerData,
    roomData,
    handleTalkChange,
    handleRoomChange,
    handleSpeakerChange,
    handleAddTalk,
    handleAddSpeaker,
    handleAddRoom,
  } = useAdminLogic(onTalkAdded, onSpeakerAdded, onRoomAdded);
  return (
    <div className={panelStyle.panelContainer}>
      <h2>Admin Panel</h2>
      {/* Adding talks */}
      <input
        type="text"
        name="title"
        placeholder="Talk Title"
        value={talkData.title}
        onChange={handleTalkChange}
      ></input>
      <input
        type="text"
        name="speakerId"
        placeholder="Speaker ID"
        value={talkData.speakerId}
        onChange={handleTalkChange}
      ></input>
      <input
        type="text"
        name="roomId"
        placeholder="Room ID"
        value={talkData.roomId}
        onChange={handleTalkChange}
      ></input>
      <input
        type="text"
        name="startTime"
        placeholder="Start time"
        value={talkData.startTime}
        onChange={handleTalkChange}
      ></input>
      <input
        type="text"
        name="endTime"
        placeholder="End time"
        value={talkData.endTime}
        onChange={handleTalkChange}
      ></input>
      <button onClick={handleAddTalk}>Add talk</button>
    </div>
  );
};

export default AdminPanel;
