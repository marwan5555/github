import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colors, sizes } from "../../constants/theme";

const CustomBackground = ({ animatedIndex, style }) => {
  const containerStyle = useAnimatedStyle(() => ({
    ...style,
    backgroundColor: colors.white,
    borderTopLeftRadius: sizes.radius,  // ขอบบน
    borderTopRightRadius: sizes.radius, // ขอบบน
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.10],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
  return <Animated.View style={containerStyle} />;
};

export default CustomBackground;
