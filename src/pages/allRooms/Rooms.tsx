import Programheader from "../../components/programHeader/Programheader"
import { getRooms } from "../../api/getRequests"
import { useEffect, useState } from "react";
import { room } from "../../types/types"
import stylethis from "../../style/globalStyle.module.css"



const Rooms = () => {
  const [rooms, setRooms] = useState<room[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const fetchRooms = async () => {
      try {
        const dataRooms = await getRooms();
        console.log("Fetched rooms:", dataRooms);
        setRooms(dataRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
      setIsLoading(false);
    };

    fetchRooms();
  }, []);

  if (isLoading) {
    return <div>Loading Rooms...</div>;
  }

  return (
    <div className={stylethis.all}>
      <header>
        <Programheader />
      </header>
      <h2 className={stylethis.hTwo}>Rooms</h2>
      <div className={stylethis.flexCenter}>
        <section>
          {rooms.length === 0 ? (
            <p>There are no rooms available</p>
          ) : (
            <ul>
              {rooms.map((room) => (
                <li
                  key={room._uuid}>
                  <h3>{room.name}</h3>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Rooms