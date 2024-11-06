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

    handleUpdate,
    setFormType,
    handleInputChange,
    handleSelectChange,
  } = useAdminLogic(onTalkUpdated, onSpeakerUpdated, onRoomUpdated);
  return (
    <div>
      <h2></h2>
      <div>
        <button onClick={() => setFormType("talks")}>Add talk</button>
        <button onClick={() => setFormType("speakers")}>Add speaker</button>
        <button onClick={() => setFormType("rooms")}>Add room</button>
      </div>

      <form
        className={formStyle.container}
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        {formType === "talks" && (
          <>
            <select onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {talkOptions.map((talk) => (
                <option key={talk.id} value={talk.id}>
                  {talk.title}
                </option>
              ))}
            </select>
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

export default UpdateForm;
