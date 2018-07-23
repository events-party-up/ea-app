import * as c from './eventsConstants';

export const loadEvents = ({ month, year }) => dispatch => {

    // TODO MOCK service call

    // TODO make real service call
    if (month === 'July') {
        fullName = 'Kevin Williams'
        dispatch({
            type: c.LOAD_EVENTS,
            events: [{
                name: 'PickleBall',
                host: 'Kevin'
            }]
        })

    } else {
        dispatch({
            type: c.LOAD_EVENTS,
            events: [{
                name: 'Camping',
                host: 'Megan'
            }]
        })

    }

}