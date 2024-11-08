import React, { useEffect, useState } from "react";
import { Speaker, room, talk } from "../../../types/types";
import { updateRoom, updateSpeaker, updateTalk } from "../../../api/UpdateRequests";
import { getRooms, getSpeakers, getTalks } from "../../../api/getRequests";
import { deleteRoom, deleteSpeaker, deleteTalk } from "../../../api/deleteRequests";

// Adding useStates for logic
const useAdminLogic = (
  onTalkUpdated: (talk: talk) => void,
  onSpeakerUpdated: (Speaker: Speaker) => void,
  onRoomUpdated: (room: room) => void,

  onTalkDeleted: (talk: talk) => void,
  onRoomDeleted: (room: room) => void,
  onSpeakerDeleted: (speaker: Speaker) => void
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
  const [roomData, setRoomData] = useState({ _uuid: "", name: "", capacity: "" });

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
    const selectedName = e.target.name;
    switch (formType) {
      case "talks":
        if (selectedName === "talk") {
          const selectedTalk = talkOptions.find((talk) => talk._uuid === selectedValue);

          if (selectedTalk) {
            setTalkData({
              _uuid: selectedTalk._uuid,
              title: selectedTalk.title,
              speakerId: selectedTalk.speakerId,
              roomId: selectedTalk.roomId,
              startTime: selectedTalk.startTime,
              endTime: selectedTalk.endTime,
            });
          }
        } else if (selectedName === "speakerId") {
          setTalkData((prev) => ({ ...prev, speakerId: Number(selectedValue) }));
        } else if (selectedName === "roomId") {
          setTalkData((prev) => ({ ...prev, roomId: Number(selectedValue) }));
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
            capacity: selectedRoom.capacity,
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
          setTalkOptions((prevOptions) =>
            prevOptions.map((talk) => (talk._uuid === updatedTalk._uuid ? updatedTalk : talk))
          );
          onTalkUpdated(updatedTalk);
          break;
        case "speakers":
          const updatedSpeaker = await updateSpeaker(speakerData._uuid, speakerData.name, speakerData.bio);
          setSpeakerOptions((prevOptions) =>
            prevOptions.map((speaker) => (speaker._uuid === updatedSpeaker._uuid ? updatedSpeaker : speaker))
          );
          onSpeakerUpdated(updatedSpeaker);
          break;
        case "rooms":
          const updatedRoom = await updateRoom(roomData._uuid, roomData.name);
          setRoomOptions((prevOptions) =>
            prevOptions.map((room) => (room._uuid === updatedRoom._uuid ? updatedRoom : room))
          );
          onRoomUpdated(updatedRoom);
      }
    } catch (error) {
      console.log("Error adding", error);
    }
  };

  const handleDelete = async () => {
    try {
      switch (formType) {
        case "talks":
          await deleteTalk(talkData._uuid);
          setTalkData({
            _uuid: "",
            title: "",
            speakerId: 0,
            roomId: 0,
            startTime: "",
            endTime: "",
          });
          onTalkDeleted(talkData);
          break;
        case "speakers":
          await deleteSpeaker(speakerData._uuid);

          setSpeakerOptions((prevOptions) => prevOptions.filter((speaker) => speaker._uuid !== speakerData._uuid));

          setSpeakerData({ _uuid: "", name: "", bio: "" });
          onSpeakerDeleted(speakerData);
          break;
        case "rooms":
          await deleteRoom(roomData._uuid);

          setRoomOptions((prevOptions) => prevOptions.filter((room) => room._uuid !== roomData._uuid));

          setRoomData({ _uuid: "", name: "", capacity: "" });
          onRoomDeleted(roomData);
          break;
        default:
          throw new Error("Something wrong with form types");
      }
    } catch (error) {
      console.log("Something wrong with deleting selected value");
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
    handleDelete,
    handleSelectChange,
    handleInputChange,
    setFormType,
  };
};

export default useAdminLogic;
