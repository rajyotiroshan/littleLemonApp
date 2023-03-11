import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItem() {
  return (
    <View style={menuStyle.container}>
      <ScrollView indicatorStyle={"white"} style={menuStyle.innerContainer}>
        <Text style={menuStyle.headerText}>View Menu</Text>
        <Text style={menuStyle.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}

const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "black",
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
  },
  itemText: {
    color: 'red',
    fontSize: 36,
  },
});
