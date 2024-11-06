import Programheader from "../../components/programHeader/Programheader"
import { getTalks } from "../../api/getRequests"
import { useEffect } from "react";

const Talks = () => {
  useEffect(() => {
  
    const fetchTalks = async () => {
      const talks = await getTalks(); 
      console.log("Fetched talks:", talks);  
    };

    fetchTalks();  
  }, []);
  
  return (
    <>
    <header>
     <Programheader />
   </header>
   <section>Talks</section>
   </>
  )
}

export default Talks