import { useEffect, useState } from "react";
import { getSpeakerDetails, getSpeakers } from "../../api/getRequests";
import Programheader from "../../components/programHeader/Programheader";
import { Speaker } from "../../types/types";

const Speakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const data = await getSpeakers();
        console.log("Fetched speakers:", data);
        setSpeakers(data); 
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
      setIsLoading(false);
    };

    fetchSpeakers();
  }, []);

  if (isLoading) {
    return <div>Loading speakers...</div>;
  }

  const clickHandler = async (_uuid: string) => {
    try {
      const detailed = await getSpeakerDetails(_uuid);
      setSelectedSpeaker(detailed);
    } catch (error) {
      console.error("Error. Could not fetch speaker details", error);
    }
  };
  


  const closeModal = () => {
    setSelectedSpeaker(null);
  };

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
          <p>There are no speakers available</p>
        ) : (
          <ul>
            {speakers.map((speaker) => (
              <li
                key={speaker._uuid}
                onClick={() => clickHandler(speaker._uuid)}
              >
                <h3>{speaker.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </section>

      {selectedSpeaker && (
        <section>
          <div>
            <h2>Speaker Details</h2>
            <div>
              <h3>{selectedSpeaker.name}</h3>
              <p><strong>Bio:</strong> {selectedSpeaker.bio}</p>
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

export default Speakers;




