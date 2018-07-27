import { Dimensions } from 'react-native';
import moment from 'moment';
export * from './icons';

const WEEK_NOW = 'red';
const WEEK2 = 'yellow';
const WEEK3 = 'green';
const WEEK4 = 'blue';

const MILLIS_PER_DAY = 86400000;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BACKGROUND_IMG = require('../../assets/background.png');

export const dateStrForDate = date => {
  return moment(date).format('YYYY-MM-DD');
};

export const colorForDate = date => {
  const now = new Date();

  const numDays = Math.round((date - now) / MILLIS_PER_DAY);

  if (numDays <= 7) {
    return WEEK_NOW;
  } else if (numDays > 7 && numDays <= 14) {
    return WEEK2;
  } else if (numDays > 14 && numDays <= 21) {
    return WEEK3;
  } else {
    return WEEK4;
  }
};

export const dateToView = date => {
  return moment(date).format('LL');
};
