import React, { useEffect, useState } from "react";
import { Speaker, room, talk } from "../../../types/types";
import { updateRoom, updateSpeaker, updateTalk } from "../../../api/UpdateDeleteRequests";
import { getRooms, getSpeakers, getTalks } from "../../../api/getRequests";

// Adding useStates for logic
const useAdminLogic = (
  onTalkUpdated: (talk: talk) => void,
  onSpeakerUpdated: (Speaker: Speaker) => void,
  onRoomUpdated: (room: room) => void
) => {
  const [formType, setFormType] = useState<"talks" | "speakers" | "rooms">("talks");
  const [talkData, setTalkData] = useState({
    _uuid: "",
    title: "",
    speakerId: 0,
    roomId: 0,
    startTime: "",
    endTime: "",
  });
  const [speakerData, setSpeakerData] = useState({ _uuid: "", name: "", bio: "" });
  const [roomData, setRoomData] = useState({ _uuid: "", name: "" });

  const [talkOptions, setTalkOptions] = useState<talk[]>([]);
  const [speakerOptions, setSpeakerOptions] = useState<Speaker[]>([]);
  const [roomOptions, setRoomOptions] = useState<room[]>([]);

  // Fetching data from api and putting them into an array when formType changes
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        if (formType === "talks" && talkOptions.length === 0) {
          const talks = await getTalks();
          setTalkOptions(talks);
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
    const selectedValue = e.target.value;
    switch (formType) {
      case "talks":
        const selectedTalk = talkOptions.find((talk) => talk._uuid === selectedValue);
        console.log("State of all in array", talkOptions);
        console.log("State of single data", talkData);
        console.log(selectedValue);

        if (selectedTalk) {
          setTalkData({
            _uuid: selectedTalk._uuid,
            title: selectedTalk.title,
            speakerId: selectedTalk.speakerId,
            roomId: selectedTalk.roomId,
            startTime: selectedTalk.startTime,
            endTime: selectedTalk.endTime,
          });
        } else {
          console.log("Error", selectedTalk);
        }
        break;
      case "speakers":
        const selectedSpeaker = speakerOptions.find((speaker) => speaker._uuid === selectedValue);
        if (selectedSpeaker) {
          setSpeakerData({
            _uuid: selectedSpeaker._uuid,
            name: selectedSpeaker.name,
            bio: selectedSpeaker.bio,
          });
        }
        break;
      case "rooms":
        const selectedRoom = roomOptions.find((room) => room._uuid === selectedValue);
        if (selectedRoom) {
          setRoomData({
            _uuid: selectedRoom._uuid,
            name: selectedRoom.name,
          });
        }
        break;
      default:
        throw new Error("Could not match a form type");
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
      switch (formType) {
        case "talks":
          const updatedTalk = await updateTalk(
            talkData._uuid,
            talkData.title,
            talkData.speakerId,
            talkData.roomId,
            talkData.startTime,
            talkData.endTime
          );
          console.log(updatedTalk);
          onTalkUpdated(updatedTalk);
          break;
        case "speakers":
          const updatedSpeaker = await updateSpeaker(speakerData._uuid, speakerData.name, speakerData.bio);
          onSpeakerUpdated(updatedSpeaker);
          break;
        case "rooms":
          const updatedRoom = await updateRoom(roomData._uuid, roomData.name);
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
