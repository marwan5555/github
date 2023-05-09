import React from "react";
import Carousel from "../shared/Carousel";
import { Text, View } from "react-native";

const HotelsCarousel = ({ hotels }) => {
  return (
    <Carousel
      items={hotels}
      renderItem={({ item, style }) => {
        return (
          <View style={style}>
            <Text>ที่พัก</Text>
          </View>
        );
      }}
    />
  );
};

export default HotelsCarousel;
