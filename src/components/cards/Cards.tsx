import React, { useEffect, useState } from "react";
import { talk, Speaker, room } from "../../types/types";
import styles from "./cards.module.css";
import { getSpeakers, getTalks, getRooms } from "../../api/getRequests";
import { useNavigate } from "react-router-dom";

const Cards: React.FC = () => {
  const [talks, setTalks] = useState<talk[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [rooms, setRooms] = useState<room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleCardClick = (talkId: string) => {
    navigate(`/cards/${talkId}`);
  };

  return (
    <div className={styles.card_container}>
      {talks.map((talk, index) => {
        const room = rooms[index];
        const speaker = speakers[index];

        return (
          <div
            className={styles.card}
            key={talk._uuid}
            onClick={() => handleCardClick(talk._uuid)}
          >
            <p className="room">{room?.name || "Room not found"}</p>
            <p className="title">
              <b>{talk.title}</b>
            </p>

            <p className="speaker">{speaker?.name || "Speaker not found"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
