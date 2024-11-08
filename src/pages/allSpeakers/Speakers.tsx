import { useEffect, useState } from "react";
import { getSpeakerDetails, getSpeakers } from "../../api/getRequests";
import Programheader from "../../components/programHeader/Programheader";
import { Speaker } from "../../types/types";
import stylethis from "../../style/globalStyle.module.css"

const Speakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const dataSpeakers = await getSpeakers();
        console.log("Fetched speakers:", dataSpeakers);
        setSpeakers(dataSpeakers); 
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
    <div className={stylethis.all}>
      <header>
        <Programheader />
      </header>
        <h2 className={stylethis.hTwo}>Speakers</h2>
   <div className={stylethis.flexCenter}>
   <section>
        {speakers.length === 0 ? (
          <p>There are no speakers available</p>
        ) : (
          <ul>
            {speakers.map((speaker) => (
              <li
                key={speaker._uuid}
                onClick={() => clickHandler(speaker._uuid)
                }
              >
                <h3>{speaker.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </section>
   </div>

   {selectedSpeaker && (
        <section
          className={`${stylethis.modalSection} ${selectedSpeaker ? stylethis.show : ""}`}
  >
          <div className={stylethis.sectionContent}>
          <div className={stylethis.contentData}>
          <h2>Speaker Details</h2>
              <h3>{selectedSpeaker.name}</h3>
              <p>Bio: <br />{selectedSpeaker.bio}</p>
              </div>
            <button 
            onClick={closeModal}>
              <p>C <br /> L <br /> O <br /> S <br /> E</p>
              </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Speakers;




