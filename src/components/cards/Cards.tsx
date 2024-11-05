import React, { useEffect, useState } from "react";
import { Talk, Speaker, Room } from "./types";

interface CardProps {
  talkId: number;
}

const Cards: React.FC = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const talksResponse = await fetch("https://legg-til-rute-her");
        const talksData = await talksResponse.json();
        setTalks(talksData);

        const speakersResponse = await fetch("https://legg-til-rute-her");
        const speakersData = await speakersResponse.json();
        setSpeakers(speakersData);

        const roomsResponse = await fetch("https://legg-til-rute-her");
        const roomsData = await roomsResponse.json();
        setRooms(roomsData);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cards-container">
      {talks.map((talk) => {
        const speaker = speakers.find((s) => s.id === talk.speakerId);
        const room = rooms.find((r) => r.id === talk.roomId);

        const startTime = new Date(talk.startTime);
        const endTime = new Date(talk.endTime);
        const durationInMinutes = Math.floor(
          (endTime.getTime() - startTime.getTime()) / (1000 * 60)
        );

        return (
          <div className="card" key={talk.id}>
            <p className="room">{room?.name || "Room not found"}</p>
            <p className="title">
              <b>{talk.title}</b>
            </p>
            <p className="speaker">{speaker?.name || "Speaker not found"}</p>
            <p className="duration">{`${durationInMinutes} min`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
