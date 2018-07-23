import * as c from './eventsConstants';

export const defaultState = {
  events: []
};

export default function eventsReducer(state = defaultState, action) {
  switch (action.type) {
    case c.LOAD_EVENTS:
      return {
        ...state,
        events: action.events
      };

    default:
      return state;
  }
}
