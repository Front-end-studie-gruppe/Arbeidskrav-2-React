import Programheader from "../../components/programHeader/Programheader";
import { getRooms, getSpeakers, getTalks } from "../../api/getRequests";
import { useEffect, useState } from "react";
import { room, Speaker, talk } from "../../types/types";
import cardStyle from "../homePage/Home.module.css";

const ProgramOverview = () => {
  const [rooms, setRooms] = useState<room[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [talks, setTalks] = useState<talk[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRooms = await getRooms();
        console.log("Fetched rooms:", dataRooms);
        setRooms(dataRooms);

        const dataSpeakers = await getSpeakers();
        console.log("Fetched speakers:", dataSpeakers);
        setSpeakers(dataSpeakers);

        const dataTalks = await getTalks();
        console.log("Fetched talks:", dataTalks);
        setTalks(dataTalks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading Program Overview...</div>;
  }

  return (
    <>
      <section className={cardStyle.homeContainer}>
        <header>
          <Programheader />
        </header>
        <div>
          <h2>Program Overview</h2>
        </div>

        <section>
          <h3>Rooms</h3>
          {rooms.length === 0 ? (
            <p>There are no rooms available</p>
          ) : (
            <ul>
              {rooms.map((room) => (
                <li key={room._uuid}>
                  <h4>{room.name}</h4>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3>Speakers</h3>
          {speakers.length === 0 ? (
            <p>There are no speakers available</p>
          ) : (
            <ul>
              {speakers.map((speaker) => (
                <li key={speaker._uuid}>
                  <h4>{speaker.name}</h4>
                  <p>Bio: {speaker.bio}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3>Talks</h3>
          {talks.length === 0 ? (
            <p>There are no talks available</p>
          ) : (
            <ul>
              {talks.map((talk) => (
                <li key={talk._uuid}>
                  <h4>{talk.title}</h4>
                  <p>Speaker: {talk.speakerId}</p>
                  <p>Room: {talk.roomId}</p>
                  <p>Start Time: {talk.startTime}</p>
                  <p>End Time: {talk.endTime}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </>
  );
};

export default ProgramOverview;
