import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOption from "./components/MenuOption";
import Controls from "./components/Controls";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={24} color="gray" />
      </View>

      <Image source={car} style={styles.image} resizeMode="contain" />
      <Controls />
      <FlatList data={menuOptions} showsVerticalScrollIndicator={false} renderItem={MenuOption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "gray",
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 300,
  },
});
