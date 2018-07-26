import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class EventsScreen extends Component {
  render() {
    // Create an array of marked date entries
    const markedDates = this.props.events.eventList.map(event => {
      const date = new Date(event.date);

      // create marked date object for this date
      return {
        [`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${(
          '0' + date.getDate()
        ).slice(-2)}`]: {
          marked: true
        }
      };
    });

    // console.log('markedDates=', markedDates);

    // Then convert it into an object of marked dates
    const markedDateObj = markedDates.reduce(
      (obj, item) => ({ ...obj, ...item }),
      {}
    );

    // console.log('markedDateObj=', markedDateObj);

    return (
      <View>
        <Text> Events Screen </Text>
        <Calendar
          // Initially visible month. Default = Date()
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          // TODO set min/max dates
          //   minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          //   maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined

          markedDates={markedDateObj}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsScreen);
