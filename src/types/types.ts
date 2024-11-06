export interface Speaker {
  _uuid: string;
  name: string;
  bio: string;
}

export interface room {
  id: number;
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

export interface AdminPanelProps {
  onTalkAdded: (talk: talk) => void;
  onSpeakerAdded: (speaker: Speaker) => void;
  onRoomAdded: (room: room) => void;
}
