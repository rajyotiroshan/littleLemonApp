import * as React from "react";
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
