import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNtestBtn from '../../src';

export default function App() {
  const [isClick, setIsClick] = useState(true);
  const [msg, setMsg] = useState('');

  const handleMsg = () => {
    ReactNtestBtn.testing(' sidoo', (error, response) => {
      if (error != null) {
        console.log('Failur!', error);
      } else {
        console.log('Message:- ', response);
        setMsg(response.message);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          isClick ? handleMsg() : setMsg('');
          setIsClick(!isClick);
        }}
      >
        <Text>Click Here</Text>
      </TouchableOpacity>
      <Text>THis result is: {msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#4CCD99',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
