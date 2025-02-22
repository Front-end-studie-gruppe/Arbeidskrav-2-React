import useAdminLogic from "./UpdateFormLogic";
import { AdminUpdateDeleteTypes } from "../../../types/types";
import formStyle from "../Form.module.css";

const UpdateForm = ({
  onTalkUpdated,
  onSpeakerUpdated,
  onRoomUpdated,
  onTalkDeleted,
  onRoomDeleted,
  onSpeakerDeleted,
}: AdminUpdateDeleteTypes) => {
  const {
    formType,
    talkData,
    speakerData,
    roomData,
    talkOptions,
    speakerOptions,
    roomOptions,

    handleUpdate,
    handleDelete,
    setFormType,
    handleInputChange,
    handleSelectChange,
  } = useAdminLogic(onTalkUpdated, onSpeakerUpdated, onRoomUpdated, onTalkDeleted, onRoomDeleted, onSpeakerDeleted);

  return (
    <section className={formStyle.siteContainer}>
      <h2>Administer</h2>
      <div className={formStyle.headerNav}>
        <button onClick={() => setFormType("talks")}>Edit talk</button>
        <button onClick={() => setFormType("speakers")}>Edit speaker</button>
        <button onClick={() => setFormType("rooms")}>Edit room</button>
      </div>

      <form
        className={formStyle.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        {formType === "talks" && (
          <>
            <h2>Update existing talk</h2>
            <select name="talk" onChange={handleSelectChange}>
              <option value="">Select talk</option>
              {talkOptions.map((talk) => (
                <option key={talk._uuid} value={talk._uuid}>
                  {talk.title}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="title"
              placeholder="Talk Title"
              value={talkData.title}
              onChange={handleInputChange}
            ></input>
            <select name="speakerId" value={talkData.speakerId} onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {talkOptions.map((talk) => (
                <option key={talk.speakerId} value={talk.speakerId}>
                  {talk.speakerId}
                </option>
              ))}
            </select>
            <select name="roomId" value={talkData.roomId} onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {talkOptions.map((talk) => (
                <option key={talk.roomId} value={talk.roomId}>
                  {talk.roomId}
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
            <div className={formStyle.actionBtnContainer}>
              <button type="submit">Update talk</button>
              <button type="button" onClick={handleDelete}>
                Delete talk
              </button>
            </div>
          </>
        )}
        {formType === "speakers" && (
          <>
            <h2>Update existing speaker</h2>
            <select onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {speakerOptions.map((speaker) => (
                <option key={speaker._uuid} value={speaker._uuid}>
                  {speaker.name}
                </option>
              ))}
            </select>
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
              className={formStyle.textArea}
              placeholder="Write about yourself"
              value={speakerData.bio}
              onChange={handleInputChange}
            ></input>
            <div className={formStyle.actionBtnContainer}>
              <button type="submit">Update speaker</button>
              <button type="button" onClick={handleDelete}>
                Delete speaker
              </button>
            </div>
          </>
        )}
        {formType === "rooms" && (
          <>
            <h2>Update existing room</h2>
            <select onChange={handleSelectChange}>
              <option value="">Select room</option>
              {roomOptions.map((room) => (
                <option key={room._uuid} value={room._uuid}>
                  {room.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Room name"
              value={roomData.name}
              onChange={handleInputChange}
            ></input>
            <div className={formStyle.actionBtnContainer}>
              <button type="submit">Update Rooms</button>
              <button type="button" onClick={handleDelete}>
                Delete room
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default UpdateForm;
