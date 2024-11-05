import { Speaker, talk, room } from "../types/types";

const addInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const postHeaders: HeadersInit = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${addInfo}`,
};

export const addSpeaker = async (name: string, bio: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "POST",
    headers: postHeaders,
    body: JSON.stringify([{ name, bio }]),
  });
  return await response.json();
};

export const addRoom = async (name: string): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms`, {
    method: "POST",
    headers: postHeaders,
    body: JSON.stringify([{ name }]),
  });
  return await response.json();
};

export const addTalks = async (
  title: string,
  speakerId: number,
  roomId: number,
  startTime: string,
  endTime: string
): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks`, {
    method: "POST",
    headers: postHeaders,
    body: JSON.stringify([{ title, speakerId, roomId, startTime, endTime }]),
  });
  if (!response) {
    console.log("Something wrong with response for body data");
  }
  return await response.json();
};
