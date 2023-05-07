import React, { createFactory, useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, sizes, spacing } from "../../constants/theme";
import * as Animatable from "react-native-animatable";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CustomHandler from "./CustomHandler";
import CustomBackground from "./CustomBackground";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Divider  from '../shared/Divider';
import SectionHeader from "../shared/SectionHeader";

const AnimatableDivider = Animated.createAnimatedComponent(Divider);

const TripDetailsCard = ({ trip }) => {
  const animatedIndex = useSharedValue(0);
  const snapPoints = useMemo(() => ["30%", "80%"], []); //เราสามารถเลื่อน BottomSheet ได้ใน 2 จุดคือ จุดที่ความสูงเท่ากับ 30% และ 80% ของหน้าจอ

  const titleStyle = useAnimatedStyle(() => ({
    //ตัวทำให้เกิดอนิเมะชั้น
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

  const contentStyle = useAnimatedStyle(() => ({
    transform:[
      {
        translateY:interpolate(
          animatedIndex.value,
          [0,0.08],
          [40,0],
          Extrapolation.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      animatedIndex.value,
      [0, 0.08],
      [0, 1],
      Extrapolation.CLAMP,
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
          <Animated.Text style={[styles.locationText, locatonStyle]}>
            {trip.location}
          </Animated.Text>
        </View>
      </Animatable.View>
      <AnimatableDivider style={contentStyle}/>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Animated.View style={contentStyle}>
        <SectionHeader
          title="Summary"
          containerStyle={styles.SectionHeader} 
          titleStyle={styles.sectionTitle}
        />
        {/* ตัวอักษรในแถวข้อมูลด้านล่างเส้น ตรง title คือ คำ
        ส่วนที่เหลือเป็นการกำหนดstyles*/}
        <View style={styles.summary}>
        <Text style={styles.summaryText}>{trip.description}</Text>
        </View>
        </Animated.View>
      </BottomSheetScrollView>
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
    flexDirection: "row",
    alignItems: "flex-start",
  },
  locationText: {
    fontSize: sizes.title,
    color: colors.white,
  },
  locationIcon: {
    tintColor: colors.gray,
  },
  SectionHeader: {
    marginTop: spacing.m,
  },
  sectionTitle: {
    color: colors.lightGray,
    fontWeight: 'normal',
  },
  summary: {
  marginHorizontal: spacing.l,
  },
  summaryText: {
    color: colors.primary,
  },
});
  
export default TripDetailsCard;
