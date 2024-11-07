import useAdminLogic from "./AddFormLogic";
import { AdminAddTypes } from "../../../types/types";
import formStyle from "../Form.module.css";

const AddForm = ({ onTalkAdded, onSpeakerAdded, onRoomAdded }: AdminAddTypes) => {
  const {
    formType,
    setFormType,
    talkData,
    speakerData,
    roomData,
    talkOptions,
    handleAdd,
    handleInputChange,
    handleSelectChange,
  } = useAdminLogic(onTalkAdded, onSpeakerAdded, onRoomAdded);
  return (
    <section className={formStyle.siteContainer}>
      <h2>Administer</h2>
      <div className={formStyle.headerNav}>
        <button onClick={() => setFormType("talks")}>Add talk</button>
        <button onClick={() => setFormType("speakers")}>Add speaker</button>
        <button onClick={() => setFormType("rooms")}>Add room</button>
      </div>

      <form
        className={formStyle.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        {formType === "talks" && (
          <>
            <h2>Add new talk</h2>
            <input
              type="text"
              name="title"
              placeholder="Talk Title"
              value={talkData.title}
              onChange={handleInputChange}
            ></input>
            <select name="speakerId" value={talkData.speakerId} onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {talkOptions.map((speaker) => (
                <option key={speaker.speakerId} value={speaker.speakerId}>
                  {speaker.speakerId}
                </option>
              ))}
            </select>
            <select name="roomId" value={talkData.roomId} onChange={handleSelectChange}>
              <option value="">Select room</option>
              {talkOptions.map((room) => (
                <option key={room.roomId} value={room.roomId}>
                  {room.roomId}
                </option>
              ))}
            </select>
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
            <h2>Add new speaker</h2>
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
            <h2>Add new room</h2>
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
    </section>
  );
};

export default AddForm;
