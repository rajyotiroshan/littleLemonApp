import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}
const footerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#EE9972",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

//@rajan
/* export default function LittleLemonFooter() {
  return (
    <View
      style={{
        height: '5%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#F4CE14",
        marginTop: 5
      }}
    >
      <Text
        style={{
          padding: 5,
          fontSize: 10,
          color: "black",
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
} */
