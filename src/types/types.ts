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
  onTalkAdded: (talk: Talk) => void;
  onSpeakerAdded: (speaker: Speaker) => void;
  onRoomAdded: (room: Room) => void;
}

export interface AdminUpdatetypes {
  onTalkUpdated: (talk: Talk) => void;
  onSpeakerUpdated: (speaker: Speaker) => void;
  onRoomUpdated: (room: Room) => void;
}
