import { room, Speaker, talk } from "../types/types";

const getInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const getHeaders: HeadersInit = {
  Authorization: `Bearer ${getInfo}`,
};

export const deleteTalk = async (uuid: string): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks/${uuid}`, {
    method: "DELETE",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to delete talk");
    throw new Error("Could not delete selected talk");
  }

  return await response.json();
};

export const deleteSpeaker = async (uuid: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers/${uuid}`, {
    method: "DELETE",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to delete speaker");
    throw new Error("Could not delete selected speaker");
  }

  return await response.json();
};

export const deleteRoom = async (uuid: string): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms/${uuid}`, {
    method: "DELETE",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to delete room");
    throw new Error("Could not delete selected room");
  }

  return await response.json();
};
