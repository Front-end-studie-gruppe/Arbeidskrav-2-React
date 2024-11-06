import React, { useEffect, useState } from "react";
import { Speaker, room, talk } from "../../../types/types";
import {
  getRooms,
  getSpeakers,
  getTalks,
  updateRoom,
  updateSpeaker,
  updateTalk,
} from "../../../api/UpdateDeleteRequests";

// Adding useStates for logic
const useAdminLogic = (
  onTalkUpdated: (talk: talk) => void,
  onSpeakerUpdated: (Speaker: Speaker) => void,
  onRoomUpdated: (room: room) => void
) => {
  const [formType, setFormType] = useState<"talks" | "speakers" | "rooms">("talks");
  const [talkData, setTalkData] = useState({
    id: 0,
    title: "",
    speakerId: 0,
    roomId: 0,
    startTime: "",
    endTime: "",
  });
  const [speakerData, setSpeakerData] = useState({ id: 0, name: "", bio: "" });
  const [roomData, setRoomData] = useState({ id: 0, name: "" });

  const [talkOptions, setTalkOptions] = useState<talk[] | []>([]);
  const [speakerOptions, setSpeakerOptions] = useState<Speaker[]>([]);
  const [roomOptions, setRoomOptions] = useState<room[]>([]);

  const [usedId, setUsedId] = useState<number | null>(null);

  // Fetching data from api and putting them into an array when formType changes
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        if (formType === "talks" && talkOptions.length === 0) {
          const talks = await getTalks();
          if (Array.isArray(talks)) {
            setTalkOptions(talks);
          } else {
            console.log("Talks data is not an array", talks);
          }
        }
        if (formType === "speakers" && speakerOptions.length === 0) {
          const speakers = await getSpeakers();
          setSpeakerOptions(speakers);
        }
        if (formType === "rooms" && roomOptions.length === 0) {
          const rooms = await getRooms();
          setRoomOptions(rooms);
        }
      } catch (error) {
        console.log("Could not fetch data", error);
      }
    };
    fetchOptions();
  }, [formType, talkOptions, speakerOptions, roomOptions]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value);
    setUsedId(id);

    switch (formType) {
      case "talks":
        const selectedTalk = talkOptions.find((talk) => talk.id === id);
        if (selectedTalk) {
          setTalkData({
            id: selectedTalk.id,
            title: selectedTalk.title,
            speakerId: selectedTalk.speakerId,
            roomId: selectedTalk.roomId,
            startTime: selectedTalk.startTime,
            endTime: selectedTalk.endTime,
          });
        }
        break;
      case "speakers":
        const selectedSpeaker = speakerOptions.find((speaker) => speaker.id === id);
        if (selectedSpeaker) {
          setSpeakerData({
            id: selectedSpeaker.id,
            name: selectedSpeaker.name,
            bio: selectedSpeaker.bio,
          });
        }
        break;
      case "rooms":
        const selectedRoom = roomOptions.find((room) => room.id === id);
        if (selectedRoom) {
          setRoomData({
            id: selectedRoom.id,
            name: selectedRoom.name,
          });
        }
        break;
      default:
        throw new Error("Could not match a form type");
        break;
    }
  };
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

  const handleUpdate = async () => {
    try {
      if (usedId === null) {
        console.log("No item is selected");
        return;
      }
      switch (formType) {
        case "talks":
          const updatedTalk = await updateTalk(
            usedId,
            talkData.title,
            talkData.speakerId,
            talkData.roomId,
            talkData.startTime,
            talkData.endTime
          );
          onTalkUpdated(updatedTalk);
          break;
        case "speakers":
          const updatedSpeaker = await updateSpeaker(usedId, speakerData.name, speakerData.bio);
          onSpeakerUpdated(updatedSpeaker);
          break;
        case "rooms":
          const updatedRoom = await updateRoom(usedId, roomData.name);
          onRoomUpdated(updatedRoom);
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
    speakerOptions,
    roomOptions,
    usedId,

    setTalkData,
    setSpeakerData,
    setRoomData,
    handleUpdate,
    handleSelectChange,
    handleInputChange,
    setFormType,
  };
};

export default useAdminLogic;
