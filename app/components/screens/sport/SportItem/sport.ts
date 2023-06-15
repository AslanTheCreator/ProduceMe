import { ImageSourcePropType } from 'react-native';

export interface ISport {
  title: string;
  img: ImageSourcePropType;
  time: string;
  level?: string;
}

export const Sport: ISport[] = [
  {
    title: 'Arm muscle',
    img: require('../../../../../assets/img/sport/arm.png'),
    time: '6 minutes',
    level: 'intermidiate',
  },
  {
    title: 'Leg muscle',
    img: require('../../../../../assets/img/sport/leg.png'),
    time: '16 minutes',
    level: 'hard',
  },
  {
    title: 'Shoulders muscle',
    img: require('../../../../../assets/img/sport/shoulders.png'),
    time: '10 minutes',
    level: 'intermidiate',
  },
];
