import { Dimensions } from 'react-native';
import { Analytics } from 'expo-analytics';

export * from './AppFontLoader';
export * from './icons';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// TODO Change these IDs
export const AD_MOB_ID = 'ca-app-pub-6513320241703770/6458258805';
export const GA = new Analytics('UA-117920354-1');
