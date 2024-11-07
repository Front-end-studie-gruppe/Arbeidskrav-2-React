import { room, Speaker, talk } from "../types/types";

const getInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const getHeaders: HeadersInit = {
  Authorization: `Bearer ${getInfo}`,
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

export const getTalks = async (): Promise<talk[]> => {
  const response = await fetch(`${BASE_URL}/talks`, {
    method: "GET",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to fetch talks");

    throw new Error("Could not fetch talks");
  }

  const data = await response.json();
  return data.items;
};

export const getRooms = async (): Promise<room[]> => {
  const response = await fetch(`${BASE_URL}/rooms`, {
    method: "GET",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to fetch rooms");

    throw new Error("Could not fetch rooms");
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

export const getTalkDetails = async (uuid: string): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks/${uuid}`, {
    method: "GET",
    headers: getHeaders,
  });

  if (!response.ok) {
    console.error("Failed to fetch talk details");
    throw new Error("Could not get talks infomation");
  }

  return await response.json();
};
