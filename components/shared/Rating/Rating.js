import React from "react";
import { View, StyleSheet } from "react-native";
import { AirbnbRating } from "react-native-ratings";
import { colors } from "../../../constants/theme";
import { getCorrectRating } from "./utils";

const Rating = ({ containerStyle,rating, disabled = true, size = 12 }) => {
    const _rating =getCorrectRating(rating);
  return (
    <View style={[styles.container,containerStyle]}>
      <AirbnbRating
        defaultRating={_rating}
        count={5}
        showRating={false}
        selectedColor={colors.primary}
        isDisabled={disabled}
        size={size}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    marginEnd:-2,
  },
});

export default Rating;
