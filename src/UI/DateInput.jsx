import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from './Icons/ProfileLogos';

const DateInput = ({ date, setDate }) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Birth Date</Text>
      <TouchableOpacity onPress={showDatepicker}>
        <View style={styles.input}>
          {date ? (
            <Text>{date.toDateString()}</Text>
          ) : (
            <Text style={styles.placeholder}>Enter your birthday</Text>
          )}
        </View>
        <Calendar style={styles.calendar} />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date || new Date(1598051730000)}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  input: {
    borderColor: '#ECEEEE',
    borderWidth: 1,
    backgroundColor: '#F4F8F7',
    borderRadius: 5,
    width: 230,
    height: 37,
    fontSize: 17,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  calendar: {
    position: 'absolute',
    right: 7,
    top: '10%',
    padding: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 25,
    color: '#A5A5A5',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  placeholder: {
    fontSize: 17,
    color: '#969a99',
  },
});
