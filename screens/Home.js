import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {colors} from '../constants/theme';
import MainHeader from '../components/shared/MainHeader';
import ScreenHeader from '../components/shared/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/shared/SectionHeader';
import TripsList from '../components/TripsList';

const Home = () => {
  

  return (
    <View style={styles.container}>
       <MainHeader title="ท่องเที่ยวสุคีรีน" /> 
      <ScreenHeader mainTitle="Dream Trip" secondTitle="สำหรับคุณ" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <SectionHeader //ตรงนี้ข้อความด้านล่าง
          title="ทริปตอนนี้"
          buttonTitle="ทั้งหมด"
          onPress={() => {}}
        />
        <TripsList list={PLACES} /> 
        {/* ตรงกล่องข้างล่าง */}
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
