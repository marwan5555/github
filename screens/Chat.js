import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>หน้าChat</Text>
    </View>
  );
};

export default Chat;
