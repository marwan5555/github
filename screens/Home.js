import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();



  return (
    <View >
      <Text>หน้าหลัก</Text>
    </View>
  );
};


export default Home;
