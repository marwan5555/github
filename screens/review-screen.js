import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../types";
import Reviews from "../components/reviews/reviews";
import { COLORS } from "../constants";
import Divider from "../components/shared/divider";

const ReviewScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { reviews } = route.params;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Divider enabledSpacing={false} elevations={false} />

      <ScrollView>
        {/* Render your reviews here */}
      </ScrollView>
    </View>
  );
};

ReviewScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      reviews: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
