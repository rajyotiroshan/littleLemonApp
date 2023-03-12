import { View, StyleSheet } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <>
      <View style={appStyles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
          <MenuItems/> 
        <LittleLemonFooter/>
      </View>

      {/*       <View style={{
          flex: 1,
          backgroundColor: "#495E57",
        }}>
        <WelcomeScreen />
      </View>

      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View> */}
    </>
  );
}

//@rajan
/* export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#495E57', justifyContent:'space-between' }}>
      <LittleLemonHeader />
      <LittleLemonFooter/>
    </View>

  );
} */
const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
});
