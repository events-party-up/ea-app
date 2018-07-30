import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import { SCREEN_WIDTH, SCREEN_HEIGHT, dateStrForDate } from '../../utils';
import EventAgenda from '../../components/EventAgenda';

class EventsScreen extends Component {
  render() {
    // Create an array of marked date entries
    const eventDatesArray = this.props.events.eventList.map(event => {
      const date = new Date(event.date);

      // create marked date object for this date
      return {
        [dateStrForDate(date)]: [event]
      };
    });

    // console.log('eventDatesArray=', eventDatesArray);

    // Then convert it into an object of marked dates
    const agendaItems = eventDatesArray.reduce(
      (obj, item) => ({ ...obj, ...item }),
      {}
    );

    const today = new Date();
    const todayStr = dateStrForDate(today);

    if (!agendaItems[todayStr]) {
      agendaItems[todayStr] = [];
    }

    // console.log('agendaItems=', agendaItems);

    return (
      <View style={styles.container}>
        <Agenda
          style={styles.agenda}
          items={agendaItems}
          loadItemsForMonth={month => {
            // console.log('trigger items loading', month);
          }}
          //   // callback that fires when the calendar is opened or closed
          //   onCalendarToggled={calendarOpened => {
          //     console.log(calendarOpened);
          //   }}
          //   // callback that gets called on day press
          onDayPress={day => {
            if (!agendaItems[day.dateString]) {
              agendaItems[day.dateString] = [];
            }
            // console.log('day pressed', day);
          }}
          //   // callback that gets called when day changes while scrolling agenda list
          //   onDayChange={day => {
          //     console.log('day changed');
          //   }}
          //   // initially selected day
          // selected={'2012-05-16'}
          //   // Max amount of months allowed to scroll to the past. Default = 50
          // pastScrollRange={1}
          //   // Max amount of months allowed to scroll to the future. Default = 50
          // futureScrollRange={1}
          //   // specify how each item should be rendered in agenda
          renderItem={(item, firstItemInDay) => {
            return <EventAgenda event={item} />;
          }}
          //   // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          //   // specify how agenda knob should look like
          //   renderKnob={() => {
          //     return <View />;
          //   }}
          //   // specify what should be rendered instead of ActivityIndicator
          renderEmptyData={() => {
            return <View />;
          }}
          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          //   // By default, agenda dates are marked if they have at least one item, but you can override this if needed
          //   markedDates={{
          //     '2012-05-16': { selected: true, marked: true },
          //     '2012-05-17': { marked: true },
          //     '2012-05-18': { disabled: true }
          //   }}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          // onRefresh={() => console.log('refreshing...')}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
        />
      </View>
    );
  }
}

const styles = {
  agenda: {
    width: SCREEN_WIDTH,
    flex: 1
  },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
};

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsScreen);
