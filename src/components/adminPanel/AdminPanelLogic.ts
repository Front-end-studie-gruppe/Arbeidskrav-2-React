import { useState } from "react";
import { addTalks, addRoom, addSpeaker } from "../../api/postRequests";
import { Speaker, room, talk } from "../../types/types";

// Adding useStates for logic
const useAdminLogic = (
  onTalkAdded: (talk: talk) => void,
  onSpeakerAdded: (Speaker: Speaker) => void,
  onRoomAdded: (room: room) => void
) => {
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
  const handleTalkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTalkData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTalkData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpeakerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTalkData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTalk = async () => {
    try {
      const newTalk = await addTalks(
        talkData.title,
        talkData.speakerId,
        talkData.roomId,
        talkData.startTime,
        talkData.endTime
      );
      onTalkAdded(newTalk);
    } catch (error) {
      console.log("Could not add talk", error);
    }
  };

  const handleAddRoom = async () => {
    try {
      const newRoom = await addRoom(roomData.name);
      onRoomAdded(newRoom);
    } catch (error) {
      console.log("Could not add room", error);
    }
  };

  const handleAddSpeaker = async () => {
    try {
      const newSpeaker = await addSpeaker(speakerData.name, speakerData.bio);
      onSpeakerAdded(newSpeaker);
    } catch (error) {
      console.log("Could not add speaker", error);
    }
  };
  return {
    talkData,
    speakerData,
    roomData,

    handleAddTalk,
    handleAddSpeaker,
    handleAddRoom,
    handleTalkChange,
    handleSpeakerChange,
    handleRoomChange,
  };
};

export default useAdminLogic;
