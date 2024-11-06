import Programheader from "../../components/programHeader/Programheader"
import { getTalks } from "../../api/getRequests"
import { useEffect, useState } from "react";
import { talk } from "../../types/types"

const Talks = () => {
  const [talks, setTalks] = useState<talk[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    return <div>Loading speakers...</div>;
  }

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
              <li key={talk._uuid}>
                <h3>{talk.title}</h3>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Talks