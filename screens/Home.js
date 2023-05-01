import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       {/* <MainHeader title="Travel App" />  */}
      <ScreenHeader mainTitle="Dream Trip" secondTitle="สำหรับคุณ" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader
          title="ทริปตอนนี้"
          buttonTitle="ทั้งหมด"
          onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});


export default Home;
