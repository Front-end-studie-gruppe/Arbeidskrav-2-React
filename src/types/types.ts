export interface Speaker {
  id: number;
  name: string;
  bio: string;
  email: string;
  password: any;
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
