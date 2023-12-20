import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={require("./assets/ravdoor.png")} resizeMode='cover' />
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#999" : "black",
            },
            styles.newClientContainer,
          ]}
        >
          <Text style={styles.whiteText}>לקוח חדש</Text>
        </Pressable>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#999" : "black",
            },
            styles.newClientContainer,
          ]}
        >
          <Text style={styles.whiteText}>לקוח קיים</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  upperContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  newClientContainer: {
    margin: 4,
    // backgroundColor: "black",
    width: 200,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  whiteText: {
    color: "white",
    fontWeight: "400",
    fontFamily: "ArialHebrew",
  },
});
