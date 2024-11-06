import { useEffect } from "react";
import { getSpeakers } from "../../api/getRequests"; 
import Programheader from "../../components/programHeader/Programheader";

const Speakers = () => {

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const data = await getSpeakers();
        console.log("Fetched speakers:", data);
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
    </>
  );
};

export default Speakers;



