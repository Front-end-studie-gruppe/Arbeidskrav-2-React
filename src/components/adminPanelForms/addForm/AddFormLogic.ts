import { useEffect, useState } from "react";
import { addTalks, addSpeaker, addRoom } from "../../../api/AddRequests";
import { Speaker, room, talk } from "../../../types/types";
import { getTalks } from "../../../api/getRequests";

// Adding useStates for logic
const useAdminLogic = (
  onTalkAdded: (talk: talk) => void,
  onSpeakerAdded: (Speaker: Speaker) => void,
  onRoomAdded: (room: room) => void
) => {
  const [formType, setFormType] = useState<"talks" | "speakers" | "rooms">("talks");
  const [talkData, setTalkData] = useState({
    title: "",
    speakerId: 0,
    roomId: 0,
    startTime: "",
    endTime: "",
  });
  const [speakerData, setSpeakerData] = useState({ name: "", bio: "" });
  const [roomData, setRoomData] = useState({ name: "" });

  const [talkOptions, setTalkOptions] = useState<talk[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const talkList = await getTalks();
        setTalkOptions(talkList);
      } catch (error) {
        throw new Error("Something went wrong with fetching");
      }
    };
    fetchList();
  }, []);

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

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedName = e.target.name;

    if (selectedName === "speakerId") {
      setTalkData((prev) => ({ ...prev, speakerId: Number(selectedValue) }));
    } else if (selectedName === "roomId") {
      setTalkData((prev) => ({ ...prev, roomId: Number(selectedValue) }));
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
          break;
        case "speakers":
          const newSpeaker = await addSpeaker(speakerData.name, speakerData.bio);
          onSpeakerAdded(newSpeaker);
          setSpeakerData({ name: "", bio: "" });
          break;
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
    talkOptions,
    handleSelectChange,

    handleAdd,
    handleInputChange,
    setFormType,
  };
};

export default useAdminLogic;
