import { useEffect, useState } from "react";
import { getSpeakers } from "../../api/getRequests"; 
import Programheader from "../../components/programHeader/Programheader";
import { Speaker } from "../../types/speakers.types";

const Speakers = () => {
  const [speakers, setSpeakers] = useState<string[]>([]);  

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const data = await getSpeakers();
        console.log("Fetched speakers:", data);
        const names = data.map((speaker: Speaker) => speaker.name);
        setSpeakers(names);
      } catch (error) {
        console.error("Error fetching speakers:", error);
      } 
    };

    fetchSpeakers();
  }, []); 

  return (
    <>
      <header>
        <Programheader />
      </header>
      <div>
        <h2>Speakers</h2>
      </div>
      <section>
         {speakers.length === 0 ? (
            <p>There is no speakers avaible</p>
          ) : (
            <ul>
              {speakers.map((name, index) => (
                <li key={index}>
                  <h3>
                    {name}
                  </h3>
                </li>
              ))}
            </ul>
          )}
      </section>
    </>
  );
};

export default Speakers;



