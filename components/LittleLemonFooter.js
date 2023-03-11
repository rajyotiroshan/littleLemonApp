import { View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

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
