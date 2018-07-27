import * as c from './eventsConstants';

import { EVENTS_DETAILS } from '../../../mock/events';

export const defaultState = {
  eventList: EVENTS_DETAILS
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
