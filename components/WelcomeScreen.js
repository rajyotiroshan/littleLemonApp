import { View, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{
        alignItems: "center",
        padding: 20
    }}>
      <Text style={{color:'white', fontSize: 40, fontWeight: "bold", textAlign:'center'}}>Welcome to Little Lemon</Text>
      <Text style={{color:'white', fontSize: 25, marginTop: 50, textAlign
    :'center'}}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}
