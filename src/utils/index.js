import { Dimensions } from 'react-native';
export * from './icons';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const BACKGROUND_IMG = require('../../assets/background.png');

export const dateStrForDate = date => {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
    '0' + date.getDate()
  ).slice(-2)}`;
};
