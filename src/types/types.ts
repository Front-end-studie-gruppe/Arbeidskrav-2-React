export interface User {
  id: number;
  username: string;
  name: string;
  role: string;
  password: string;
  email: string;
}

export interface Speaker {
  id: number;
  name: string;
  bio: string;
}

export interface Room {
  id: number;
  name: string;
  capacity: string;
}

export interface Talk {
  id: number;
  speakerId: number;
  roomId: number;
  title: string;
  startTime: string;
  endTime: string;
}

export interface AdminAddTypes {
  onTalkAdded: (talk: Talk) => void;
  onSpeakerAdded: (speaker: Speaker) => void;
  onRoomAdded: (room: Room) => void;
}

export interface AdminUpdatetypes {
  onTalkUpdated: (talk: Talk) => void;
  onSpeakerUpdated: (speaker: Speaker) => void;
  onRoomUpdated: (room: Room) => void;
}
