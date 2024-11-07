import { Speaker, talk, room } from "../types/types";

const addInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const postHeaders: HeadersInit = {
  "Content-type": "application/json",
  Authorization: `Bearer ${addInfo}`,
};

export const updateSpeaker = async (_uuid: string, name: string, bio: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers/${_uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name, bio }]),
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export const updateRoom = async (_uuid: string, name: string): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms/${_uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name }]),
  });
  return await response.json();
};

export const updateTalk = async (
  _uuid: string,
  title: string,
  speakerId: number,
  roomId: number,
  startTime: string,
  endTime: string
): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks/${_uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ title, speakerId, roomId, startTime, endTime }]),
  });
  if (!response) {
    console.log("Something wrong with response for body data");
  }
  return await response.json();
};
