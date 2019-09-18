import { RadioStation } from './models/radio-alarm-clock.interface';

export class RadioAlarmClockService {
  constructor() {}

  getRadioStation(): RadioStation[] {
    return [
      {
        id: 0,
        name: 'Kiss FM',
        address: 'http://80.86.106.143:9128/kissfm.aacp',
        startStop: false,
        logo: 'assets/logo/kissFM.png',
      },
      {
        id: 1,
        name: 'Radio Zu',
        address: 'http://stream.radiozu.ro:8020/',
        startStop: false,
        logo: 'assets/logo/radioZu.jpg',
      },
      {
        id: 2,
        name: 'Digi FM',
        address: 'http://edge76.rdsnet.ro:84/digifm/digifm.mp3',
        startStop: false,
        logo: 'assets/logo/digiFM.png',
      },
      {
        id: 3,
        name: 'Europa FM',
        address: 'http://89.37.58.102:8000/europafm_aacp48k',
        startStop: false,
        logo: 'assets/logo/europaFM.png',
      },
      {
        id: 4,
        name: 'Pro FM',
        address: 'http://edge126.rdsnet.ro:84/profm/profm.mp3',
        startStop: false,
        logo: 'assets/logo/proFM.jpg',
      },
    ];
  }
}
