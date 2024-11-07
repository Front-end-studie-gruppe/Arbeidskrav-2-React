export interface Speaker {
  _uuid: string;
  name: string;
  bio: string;
}

export interface room {
  _uuid: string;
  name: string;
  capacity: string;
}

export interface talk {
  _uuid: string;
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

export interface AdminUpdateDeleteTypes {
  onTalkUpdated: (talk: talk) => void;
  onSpeakerUpdated: (speaker: Speaker) => void;
  onRoomUpdated: (room: room) => void;

  onTalkDeleted: (talk: talk) => void;
  onSpeakerDeleted: (speaker: Speaker) => void;
  onRoomDeleted: (room: room) => void;
}
