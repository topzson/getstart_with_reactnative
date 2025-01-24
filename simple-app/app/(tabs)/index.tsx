import { Text, View ,StyleSheet} from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}
    >
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>Go to about</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#25292e',
  },
  text:{
    color:'#fff',
    fontSize: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
