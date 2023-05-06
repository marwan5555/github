import React, { createFactory, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, sizes, spacing } from "../../constants/theme";
import * as Animatable from "react-native-animatable";
import BottomSheet from "@gorhom/bottom-sheet";
import CustomHandler from "./CustomHandler";
import CustomBackground from "./CustomBackground";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const TripDetailsCard = ({ trip }) => {
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ["30%", "80%"], []); //ตัวที่ทำให้มีแถบเลื่อน

  const titleStyle = useAnimatedStyle(() => ({ //ตัวทำให้เกิดอนิเมะชั้น
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.primary] 
    ),
  }));

  const locatonStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      animatedIndex.value,
      [0, 0.08],
      [colors.white, colors.lightGray] 
    ),
    fontSize: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [sizes.title, sizes.body],
      Extrapolation.CLAMP
    ),
  }));

  return (
    <BottomSheet
      index={0}
      animatedIndex={animatedIndex}
      snapPoints={snapPoints}
      backgroundComponent={CustomBackground} //ดึกbackground มาใช้ในไฟล์ customBackground
      handleComponent={CustomHandler}
    >
      <Animatable.View
        style={styles.header}
        animation="fadeInUp"
        delay={500}
        easing="ease-in-out"
        duration={400}
      >
        <Animated.Text style={[styles.title, titleStyle]}>
          {trip.title}
        </Animated.Text> 
        {/* ตรงนี้เป็นคำเมื่อเลี้ยงขึ้นไปตัวหลัก */}
        <View style={styles.location}>
        <Animated.Text style={[styles.location, locatonStyle]}>
          {trip.location}
        </Animated.Text>
        </View>
      </Animatable.View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: spacing.l,
    paddingHorizontal: spacing.l,
  },
  title: {
    fontSize: sizes.title,
    fontWeight: "bold",
    color: colors.white,
  },
  location: {
    flexDirection:'row',
    alignItems:'center'
  },
  locationText:{
    fontSize: sizes.title,
    color: colors.white,
  },
});

export default TripDetailsCard;
