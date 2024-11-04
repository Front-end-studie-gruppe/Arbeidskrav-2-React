import { Speaker, talk, room } from "../types/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const addSpeaker = async (
  name: string,
  bio: string
): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name, bio }),
  });
  return response.json();
};

export const addRoom = async (name: string): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response.json();
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
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ title, speakerId, roomId, startTime, endTime }),
  });
  return response.json();
};
