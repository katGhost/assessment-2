import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BottomInfo({ text }) {

  return (
    <View style={styles.info}>
      <Text style={styles.title}>Modern Something</Text>
      <Text style={styles.description}>Yeah its all about this shit here</Text>
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
