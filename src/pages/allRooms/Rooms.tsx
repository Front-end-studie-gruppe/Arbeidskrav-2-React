import Programheader from "../../components/programHeader/Programheader"
import { getRooms } from "../../api/getRequests"
import { useEffect, useState } from "react";
import { room } from "../../types/types"


const Rooms = () => {
  const [rooms, setRooms] = useState<room[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const fetchRooms  = async () => {
      try {
        const dataRooms = await getRooms ();
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
    <>
      <header>
        <Programheader />
      </header>
      <div>
        <h2>Rooms</h2>
      </div>
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
       </>
     );
   };

export default Rooms