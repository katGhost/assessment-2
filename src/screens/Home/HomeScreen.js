import * as React from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet, SafeAreaView} from 'react-native';
import BottomCarousel from '../../components/Dashboard/BottomCarousel';
import DashContainer from '../../components/Dashboard/DashContainer';
import HomeHeaderItem from '../../components/Dashboard/HomeHeaderItem';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      {/* Header */}
      <HomeHeaderItem />

      {/* DashBoard, main image in container */}
      <DashContainer />

      {/* Render Flatlist horizontally */}
      <BottomCarousel />
    </SafeAreaView>
  );
};

