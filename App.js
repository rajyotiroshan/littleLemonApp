import { View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}
      >
        <LittleLemonHeader />
        <MenuItem/>
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
