import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Circle from "./src/circle";

const COLORS = ["#1a1c2c", "#5d275d", "#b13e53", "#ef7d57"];

function App() {
  return (
    <View style={styles.container}>
      <Circle color={COLORS[1]} />
      <Circle scale={0.75} color={COLORS[2]} />
      <Circle scale={0.5} color={COLORS[3]} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS[0],
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
