import React from "react";
import { View, Text } from "react-native";

const HotelsCarousel = ({ hotels }) => {
  React.useEffect(() => {
    console.log(hotels); // Log the hotels data to the console to check if it's available
  }, [hotels]);

  if (!hotels) {
    return <Text>No hotels available</Text>; // Render a message if the hotels data is not available
  }

  return (
    <View>
      {/* Render the hotels data */}
    </View>
  );
};

export default HotelsCarousel;
