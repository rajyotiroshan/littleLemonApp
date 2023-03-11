import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyles.container}>
      <ScrollView indicatorStyle={"white"}>
        <Text
          style={welcomeStyles.titleText}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={welcomeStyles.mainText}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container:{
    flex: 1
  },
  scrollContainer:{

  },
  titleText:{
    padding: 40,
    fontSize: 50,
    color: "#EDEFEE",
    textAlign: "center",
  },
  mainText:{
    fontSize: 38,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  }

});
