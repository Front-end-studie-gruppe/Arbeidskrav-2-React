import { Speaker, talk, room } from "../types/types";

const addInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const postHeaders: HeadersInit = {
  Authorization: `Bearer ${addInfo}`,
};

export const getSpeakers = async (): Promise<Speaker[]> => {
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const getSpeakerDetails = async (id: number): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers${id}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const getTalks = async (): Promise<talk[]> => {
  const response = await fetch(`${BASE_URL}/talks`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of rooms");
  }

  return await response.json();
};

export const getTalkDetails = async (id: number): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks${id}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const getRooms = async (): Promise<room[]> => {
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const getRoomDetails = async (id: number): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms${id}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const updateSpeaker = async (id: number, name: string, bio: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers/${id}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name, bio }]),
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export const updateRoom = async (id: number, name: string): Promise<room> => {
  const response = await fetch(`${BASE_URL}/rooms/${id}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name }]),
  });
  return await response.json();
};

export const updateTalk = async (
  id: number,
  title: string,
  speakerId: number,
  roomId: number,
  startTime: string,
  endTime: string
): Promise<talk> => {
  const response = await fetch(`${BASE_URL}/talks/${id}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ title, speakerId, roomId, startTime, endTime }]),
  });
  if (!response) {
    console.log("Something wrong with response for body data");
  }
  return await response.json();
};
