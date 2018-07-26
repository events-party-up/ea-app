import * as c from './eventsConstants';

const EVENTS_BASIC = [
  {
    id: '1',
    title: 'International Eats - Ukraine',
    date: '2018-07-27T18:30:00.000Z',
    imageUrl:
      'https://singles.eventsandadventures.com/images/calendar/4th%20of%20July-2016-10-15-12-04-40-MeggieRoberts.jpg'
  },
  {
    id: '2',
    title: 'Just for Fun Sand Volleyball (West Valley)',
    date: '2018-07-28T19:00:00.000Z',
    imageUrl:
      'https://singles.eventsandadventures.com/images/dallas/4th%20of%20July-2015-04-13-03-26-56-MarybethWillcox.jpg'
  },
  {
    id: '3',
    title: 'Just for Fun Sand Volleyball (East Valley)',
    date: '2018-08-07T19:00:00.000Z',
    imageUrl:
      'https://singles.eventsandadventures.com/images/dallas/4th%20of%20July-2015-04-13-03-26-56-MarybethWillcox.jpg'
  }
];

export const defaultState = {
  eventList: EVENTS_BASIC
};

export default function eventsReducer(state = defaultState, action) {
  switch (action.type) {
    case c.LOAD_EVENTS:
      return {
        ...state,
        eventList: action.events
      };

    default:
      return state;
  }
}
