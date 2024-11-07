import React, { useEffect, useState } from "react";
import { Talk, Speaker, Room } from "./types";
import styles from "./cards.module.css";
import { getSpeakers, getTalks, getRooms } from "../../api/getRequests";

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

        const [talksData, speakersData, roomsData] = await Promise.all([
          getTalks(),
          getSpeakers(),
          getRooms(),
        ]);

        setTalks(talksData);
        setSpeakers(speakersData);
        setRooms(roomsData);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.card_container}>
      {talks.map((talk) => {
        const speaker = speakers.find((s) => s.id === talk.speakerId);
        const room = rooms.find((r) => r.id === talk.roomId);

        const startTime = new Date(talk.startTime);
        const endTime = new Date(talk.endTime);
        const durationInMinutes = Math.floor(
          (endTime.getTime() - startTime.getTime()) / (1000 * 60)
        );

        return (
          <div className={styles.card} key={`${talk.id}-${talk.title}`}>
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
