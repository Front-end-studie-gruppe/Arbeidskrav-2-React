import { useState } from "react";
import { addTalks, addRoom, addSpeaker } from "../../api/postRequests";
import { Speaker, room, talk } from "../../types/types";

// Adding useStates for logic
const useAdminLogic = (
  onTalkAdded: (talk: talk) => void,
  onSpeakerAdded: (Speaker: Speaker) => void,
  onRoomAdded: (room: room) => void
) => {
  const [formType, setFormType] = useState<"talks" | "speakers" | "rooms">(
    "talks"
  );
  const [talkData, setTalkData] = useState({
    title: "",
    speakerId: 0,
    roomId: 0,
    startTime: "",
    endTime: "",
  });
  const [speakerData, setSpeakerData] = useState({ name: "", bio: "" });
  const [roomData, setRoomData] = useState({ name: "" });

  // Adding function to change value of event for different requests
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (formType) {
      case "talks":
        setTalkData((prev) => ({ ...prev, [name]: value }));
        break;
      case "speakers":
        setSpeakerData((prev) => ({ ...prev, [name]: value }));
        break;
      case "rooms":
        setRoomData((prev) => ({ ...prev, [name]: value }));
        break;
    }
  };

  const handleAdd = async () => {
    try {
      switch (formType) {
        case "talks":
          const newTalk = await addTalks(
            talkData.title,
            talkData.speakerId,
            talkData.roomId,
            talkData.startTime,
            talkData.endTime
          );
          onTalkAdded(newTalk);

          // Set back to initial state values
          setTalkData({
            title: "",
            speakerId: 0,
            roomId: 0,
            startTime: "",
            endTime: "",
          });
        case "speakers":
          const newSpeaker = await addSpeaker(
            speakerData.name,
            speakerData.bio
          );
          onSpeakerAdded(newSpeaker);
          setSpeakerData({ name: "", bio: "" });
        case "rooms":
          const newRoom = await addRoom(roomData.name);
          onRoomAdded(newRoom);
          setRoomData({ name: "" });
      }
    } catch (error) {
      console.log("Error adding", error);
    }
  };
  return {
    formType,
    talkData,
    speakerData,
    roomData,

    handleAdd,
    handleInputChange,
    setFormType,
  };
};

export default useAdminLogic;
