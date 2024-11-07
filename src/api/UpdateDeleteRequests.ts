import { Speaker, Talk, Room } from "../types/types";

interface ArrayResponse {
  cursor: string | null;
  items: [];
  next_page: string | null;
}

const addInfo = import.meta.env.VITE_API_KEY_SPEAKER;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const postHeaders: HeadersInit = {
  "Content-type": "application/json",
  Authorization: `Bearer ${addInfo}`,
};

export const getSpeakers = async (): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/speakers`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return await response.json();
};

export const getSpeakerDetails = async (uuid: string): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/speakers/${uuid}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return response.json();
};

export const getTalks = async (): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/talks`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of rooms");
  }

  return response.json();
};

export const getTalkDetails = async (uuid: string): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/talks/${uuid}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return response.json();
};

export const getRooms = async (): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/rooms`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return response.json();
};

export const getRoomDetails = async (uuid: string): Promise<ArrayResponse> => {
  const response = await fetch(`${BASE_URL}/rooms/${uuid}`, {
    method: "GET",
    headers: postHeaders,
  });

  if (!response) {
    throw new Error("Failed fetching of speakers");
  }

  return response.json();
};

export const updateSpeaker = async (uuid: string, name: string, bio: string): Promise<Speaker> => {
  const response = await fetch(`${BASE_URL}/speakers/${uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name, bio }]),
  });
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export const updateRoom = async (uuid: string, name: string): Promise<Room> => {
  const response = await fetch(`${BASE_URL}/rooms/${uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ name }]),
  });
  return await response.json();
};

export const updateTalk = async (
  uuid: string,
  title: string,
  speakerId: string,
  roomId: string,
  startTime: string,
  endTime: string
): Promise<Talk> => {
  const response = await fetch(`${BASE_URL}/talks/${uuid}`, {
    method: "PUT",
    headers: postHeaders,
    body: JSON.stringify([{ title, speakerId, roomId, startTime, endTime }]),
  });
  if (!response) {
    console.log("Something wrong with response for body data");
  }
  return await response.json();
};
