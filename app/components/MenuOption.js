import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
const MenuOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Link href={item.href} style={styles.optionText}>
        {item.name}
      </Link>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: "auto" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default MenuOption;
