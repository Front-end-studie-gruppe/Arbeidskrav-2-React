import Programheader from "../../components/programHeader/Programheader"
import { getTalkDetails, getTalks } from "../../api/getRequests"
import { useEffect, useState } from "react";
import { talk } from "../../types/types"

const Talks = () => {
  const [talks, setTalks] = useState<talk[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTalk, setSelectedTalk] = useState<talk | null>(null);


  useEffect(() => {

    const fetchTalks = async () => {
      try {
        const dataTalks = await getTalks();
        console.log("Fetched talks:", dataTalks);
        setTalks(dataTalks);
      } catch (error) {
        console.error("Error fetching talks:", error);
      }
      setIsLoading(false);
    };

    fetchTalks();
  }, []);

  if (isLoading) {
    return <div>Loading Talks...</div>;
  }

  const clickHandler = async (_uuid: string) => {
    try {
      const detailed = await getTalkDetails(_uuid);
      setSelectedTalk(detailed);
    } catch (error) {
      console.error("Error. Could not fetch Talk details", error);
    }
  };
  
  const closeModal = () => {
    setSelectedTalk(null);
  };

  return (
    <>
      <header>
        <Programheader />
      </header>
      <div>
        <h2>Talks</h2>
      </div>
      <section>
        {talks.length === 0 ? (
          <p>There are no talks available</p>
        ) : (
          <ul>
            {talks.map((talk) => (
              <li 
              key={talk._uuid}
              onClick={() => clickHandler(talk._uuid)
              }>
                <h3>{talk.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </section>

      {selectedTalk && (
        <section>
          <div>
            <h2>Talk Details</h2>
            <div>
              <h3>{selectedTalk.title}</h3>
              <p>Speaker: {selectedTalk.speakerId}</p>
              <p>Room: {selectedTalk.roomId}</p>
              <p>Start time: {selectedTalk.startTime}</p>
              <p>End time {selectedTalk.endTime}</p>
              <p></p>
            </div>
            <button
              onClick={closeModal}>
              Close
            </button>
          </div>
        </section>
       )}
       </>
     );
   };

export default Talks