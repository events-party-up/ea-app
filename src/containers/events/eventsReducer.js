import * as c from './eventsConstants';

import { EVENTS_BASIC } from '../../../mock/events';

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
