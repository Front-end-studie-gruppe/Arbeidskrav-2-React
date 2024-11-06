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

export interface room {
  id: number;
  name: string;
  capacity: string;
}

export interface talk {
  id: number;
  speakerId: number;
  roomId: number;
  title: string;
  startTime: string;
  endTime: string;
}

export interface AdminAddTypes {
  onTalkAdded: (talk: talk) => void;
  onSpeakerAdded: (speaker: Speaker) => void;
  onRoomAdded: (room: room) => void;
}

export interface AdminUpdatetypes {
  onTalkUpdated: (talk: talk) => void;
  onSpeakerUpdated: (speaker: Speaker) => void;
  onRoomUpdated: (room: room) => void;
}
