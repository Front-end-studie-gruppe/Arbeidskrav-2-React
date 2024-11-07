import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Talk, Speaker, Room } from "./types";

const InfoPage: React.FC = () => {
  const { talkId } = useParams<{ talkId: string }>();
  const [talk, setTalk] = useState<Talk | null>(null);
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTalkInfo = async () => {
      try {
        setLoading(true);

        const talkResponse = await fetch(
          `https://crudcrud.com/api/your-api-key/talks/${talkId}`
        );
        const talkData = await talkResponse.json();
        setTalk(talkData);

        const speakerResponse = await fetch(
          `https://crudcrud.com/api/your-api-key/speakers/${talkData.speakerId}`
        );
        const speakerData = await speakerResponse.json();
        setSpeaker(speakerData);

        const roomResponse = await fetch(
          `https://crudcrud.com/api/your-api-key/rooms/${talkData.roomId}`
        );
        const roomData = await roomResponse.json();
        setRoom(roomData);
      } catch (err) {
        setError("Error fetching talk details");
      } finally {
        setLoading(false);
      }
    };

    fetchTalkInfo();
  }, [talkId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="talk-info">
      <h2>{talk?.title}</h2>
      <p>
        <strong>Speaker:</strong> {speaker?.name || "Speaker not found"}
      </p>
      <p>
        <strong>Room:</strong> {room?.name || "Room not found"}
      </p>
      <p>
        <strong>Start Time:</strong>{" "}
        {new Date(talk?.startTime || "").toLocaleTimeString()}
      </p>
      <p>
        <strong>End Time:</strong>{" "}
        {new Date(talk?.endTime || "").toLocaleTimeString()}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {talk?.description || "No description available"}
      </p>
    </div>
  );
};

export default InfoPage;
