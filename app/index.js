import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#161818'
  },
  header: {
   marginTop:20,
   flexDirection:'row',
   justifyContent:'space-between'
  },
  title: {
    fontSize: 24,
    color:'#eee',
    fontWeight: "bold",
    marginBottom:8,
  },
  subtitle: {
    color: "gray",
    fontWeight:'500'
  },
});
