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
              <option value="">Select talk</option>
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
            <select onChange={handleSelectChange}>
              <option value="">Select speaker</option>
              {speakerOptions.map((speaker) => (
                <option key={speaker.id} value={speaker.id}>
                  {speaker.name}
                </option>
              ))}
            </select>
          </>
        )}
        {formType === "rooms" && (
          <>
            <select onChange={handleSelectChange}>
              <option value="">Select room</option>
              {roomOptions.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </>
        )}
      </form>
    </div>
  );
};

export default UpdateForm;
