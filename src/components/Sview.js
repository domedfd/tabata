import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";

export default function Sview({ children, style }) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, ...style }}>
      {children}
    </View>
  );
}
