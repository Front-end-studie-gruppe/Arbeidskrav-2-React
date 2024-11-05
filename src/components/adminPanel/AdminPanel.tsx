import React from "react";
import panelStyle from "./panel.module.css";
import useAdminLogic from "./AdminPanelLogic";
import { AdminPanelProps } from "../../types/types";

const AdminPanel: React.FC<AdminPanelProps> = ({ onTalkAdded, onSpeakerAdded, onRoomAdded }) => {
  const { formType, setFormType, talkData, speakerData, roomData, handleAdd, handleInputChange } = useAdminLogic(
    onTalkAdded,
    onSpeakerAdded,
    onRoomAdded
  );
  return (
    <div className={panelStyle.panelContainer}>
      <h2>Admin Panel</h2>
      <div>
        <button onClick={() => setFormType("talks")}>Add talk</button>
        <button onClick={() => setFormType("speakers")}>Add speaker</button>
        <button onClick={() => setFormType("rooms")}>Add room</button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        {formType === "talks" && (
          <>
            <input
              type="text"
              name="title"
              placeholder="Talk Title"
              value={talkData.title}
              onChange={handleInputChange}
            ></input>
            <input
              type="number"
              name="speakerId"
              placeholder="Speaker ID"
              value={talkData.speakerId}
              onChange={handleInputChange}
            ></input>
            <input
              type="number"
              name="roomId"
              placeholder="Room ID"
              value={talkData.roomId}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="startTime"
              placeholder="Start time"
              value={talkData.startTime}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="endTime"
              placeholder="End time"
              value={talkData.endTime}
              onChange={handleInputChange}
            ></input>
            <button type="submit">Add talks</button>
          </>
        )}
        {formType === "speakers" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={speakerData.name}
              onChange={handleInputChange}
            ></input>
            <input
              type="text"
              name="bio"
              placeholder="Write about yourself"
              value={speakerData.bio}
              onChange={handleInputChange}
            ></input>
            <button type="submit">Add speaker</button>
          </>
        )}
        {formType === "rooms" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Room name"
              value={roomData.name}
              onChange={handleInputChange}
            ></input>
            <button type="submit">Add room</button>
          </>
        )}
      </form>
    </div>
  );
};

export default AdminPanel;
