import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Talk {
  id: string;
  title: string;
  description: string;
  speaker: string;
 
}

const InfoPage: React.FC = () => {
  const { talkId } = useParams<{ talkId: string }>();
  const [talk, setTalk] = useState<Talk | null>(null);

  useEffect(() => {
   
    fetch(`/api/talks/${talkId}`)
      .then((response) => response.json())
      .then((data) => setTalk(data))
      .catch((error) => console.error("Error fetching talk details:", error));
  }, [talkId]);

  if (!talk) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{talk.title}</h1>
      <p>Speaker: {talk.speaker}</p>
      <p>{talk.description}</p>
     </div>
  );
};

export default InfoPage;
