import useAdminLogic from "./UpdateFormLogic";
import { AdminUpdatetypes } from "../../../types/types";
import formStyle from "../Form.module.css";

const UpdateForm = ({ onTalkUpdated, onSpeakerUpdated, onRoomUpdated }: AdminUpdatetypes) => {
  const {
    formType,
    talkData,
    speakerData,
    roomData,
    talkOptions,
    speakerOptions,
    roomOptions,
    usedId,

    handleUpdate,
    setFormType,
    handleInputChange,
    handleSelectChange,
  } = useAdminLogic(onTalkUpdated, onSpeakerUpdated, onRoomUpdated);

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
            <select onChange={handleSelectChange}>
              <option value="">Select talk</option>
              {talkOptions.map((talk) => (
                <option key={talk.id} value={talk.id}>
                  {talk.title}
                </option>
              ))}
            </select>
            {talkData && (
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
            <button>Update talk</button>
            <button>Delete talk</button>
            </>
            )}
          </>
        )}
        {formType === "speakers" && (
          <>
          <h2>Update existing speaker</h2>
            <select onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {speakerOptions.map((speaker) => (
                <option key={speaker.id} value={speaker.id}>
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
              placeholder="Write about yourself"
              value={speakerData.bio}
              onChange={handleInputChange}
            ></input>
            <button>Update speaker</button>
            <button>Delete speaker</button>
          </>
        )}
        {formType === "rooms" && (
          <>
          <h2>Update existing room</h2>
            <select onChange={handleSelectChange}>
              <option value="">Select room</option>
              {roomOptions.map((room) => (
                <option key={room.id} value={room.id}>
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
            <button>Update speaker</button>
            <button>Delete speaker</button>
          </>
        )}
      </form>
    </section>
  );
};

export default UpdateForm;
