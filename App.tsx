import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Circle from "./src/circle";

const BG_COLOR = "#0d2b45";

const COLORS = [
  "#203c56",
  "#544e68",
  "#8d697a",
  "#d08159",
  "#ffaa5e",
  "#ffd4a3",
  "#ffecd6",
];

function App() {
  return (
    <View style={styles.container}>
      {COLORS.map((color, index) => (
        <Circle key={color} scale={1 - index * 0.1} color={COLORS[index]} />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
