import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomInfo({ text }) {

  return (
    <View style={styles.info}>
      <Text style={styles.title}>Protein Life</Text>
      <Text style={styles.description}>whey all you want and get that summer body</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   info: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    padding: 10,
   },
   title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'capitalize',
    color: '#FFFFFF',
    marginVertical: 10,
   },
   description: {
    letterSpacing: 1,
    color: '#FFFFFF',
   },
})
