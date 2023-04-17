import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Feed = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>หน้าFeed</Text>
    </View>
  );
};

export default Feed;
