import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const SIZE = width * 0.75;
const DISTANCE = width * 0.25;

type Props = {
  color: string;
  scale?: number;
};

function Circle({ color, scale = 1 }: Props) {
  const animatedSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: 10,
  });

  const animatedStyle = useAnimatedStyle(() => {
    const { qw, qx } = animatedSensor.sensor.value;

    const y = interpolate(qx, [0, 0.5, 1], [1, 0, -1]);

    return {
      transform: [
        { translateX: withSpring((qw * DISTANCE) / scale) },
        { translateY: withSpring((y * DISTANCE) / scale) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            backgroundColor: color,
            width: SIZE * scale,
            height: SIZE * scale,
            borderRadius: (SIZE / 2) * scale,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});

export default Circle;
