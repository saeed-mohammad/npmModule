import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNtestBtn from '../../src';

export default function App() {
  const [isClick, setIsClick] = useState(true);
  const [msg, setMsg] = useState('');

  const [isClick1, setIsClick1] = useState(true);
  const [msg1, setMsg1] = useState('');


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

  const handleMsg1 = () => {
    ReactNtestBtn.anothertesting(' testing another message', (error, response) => {
      if (error != null) {
        console.log('Failur!', error);
      } else {
        console.log('Message1:- ', response);
        setMsg1(response.message);
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


            {/* another button */}
            <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          isClick1 ? handleMsg1() : setMsg1('');
          setIsClick1(!isClick1);
        }}
      >
        <Text>another msg</Text>
      </TouchableOpacity>
      <Text>THis result is: {msg1}</Text>
      {/* another button */}

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
