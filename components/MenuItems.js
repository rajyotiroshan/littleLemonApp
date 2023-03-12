import { View, Text, ScrollView, FlatList } from "react-native";
import { StyleSheet } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];
const Seperator = () => <View style={menuStyle.seperatorStyle}></View>;
const Header = () => <Text style={menuStyle.headerText}>Menu</Text>;
const Footer = () => (
  <Text style={menuStyle.footerText}>
    Pace Your Order Between 10 AM - 10 PM
  </Text>
);

const Item = ({ name, price }) => {
  return (
    <View style={menuStyle.menuItemContainer}>
      <Text style={[menuStyle.menuItemText, menuStyle.menuItemName]}>
        {name}
      </Text>
      <Text style={[menuStyle.menuItemText, menuStyle.menuItemPrice]}>
        {price}
      </Text>
    </View>
  );
};

export default function MenuItems() {
  const renderItems = ({ item }) => {
    return <Item {...item} />;
  };
  return (
    <View style={menuStyle.container}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      ></FlatList>
    </View>
  );
}
/* export default function MenuItems() {
  
  return (
    <View style={menuStyle.container}>
      <ScrollView indicatorStyle={"white"} style={menuStyle.innerContainer}>
        <Text style={menuStyle.headerText}>View Menu</Text>
        <Text style={menuStyle.itemText}>{menuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
} */

const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "yellow",
    fontSize: 36,
    textAlign: "center",
  },
  menuItemContainer: {
    flexDirection: "row",
    padding: 10,
  },
  menuItemText: {
    flex: 1,
    color: "#F4CE14",
    fontSize: 18,
  },
  menuItemName: {
    marginLeft: 20,
  },
  menuItemPrice: {
    textAlign: "right",
    marginRight: 20,
  },
  seperatorStyle: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 2,
  },
  footerText: {
    textAlign: "center",
    fontSize: 18,
    color: "green",
    padding: 10,
  },
});
