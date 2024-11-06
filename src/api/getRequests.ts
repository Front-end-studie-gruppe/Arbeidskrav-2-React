import { Speaker } from "../types/types";

const getInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const getHeaders: HeadersInit = {
  "Authorization": `Bearer ${getInfo}`,
};

export const getSpeakers = async (): Promise<Speaker[]> => {
    const response = await fetch(`${BASE_URL}/speakers`, {
      method: "GET",
      headers: getHeaders,
    });
  
    if (!response.ok) {
      console.error("Failed to fetch speakers");
      
      throw new Error("Could not fetch speakers");
    }
  
    const data = await response.json();
    return data.items; 
  };



export const getSpeakerDetails = async (uuid: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers/${uuid}`, {
    method: "GET",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to fetch speaker details");
    throw new Error("Could not get speakers infomation");  
  }

  return await response.json();
};

