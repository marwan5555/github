import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Alert = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>หน้าAlert</Text>
    </View>
  );
};

export default Alert;
