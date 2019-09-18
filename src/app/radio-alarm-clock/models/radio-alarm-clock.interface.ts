export interface RadioStation {
  id: number;
  name: string;
  address: string;
  startStop: boolean;
  logo: string;
}

export interface ClockAlarm {
  id: number;
  name: string;
  value: number;
  setted: boolean;
}

export interface AlarmSet {
  hours: number;
  minutes: number;
  seconds: number;
  alarmOnOff: boolean;
}


