import React, { useEffect } from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";


const Item = ({ remainingTime, animatedColor }) => {
  useEffect(() => {
    if (remainingTime === 1) {
      console.log("teste");
    }
  }, [remainingTime]);

  return (
    <View>
      <Animated.Text style={{ color: animatedColor, fontSize: 100 }}>
        {remainingTime}
      </Animated.Text>
    </View>
  );
};

export default () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsPlaying((prev) => !prev)}>
        <CountdownCircleTimer
          initialRemainingTime={13}
          isPlaying={isPlaying}
          duration={10}
          colors={[
            ["#004777", 0.4],
            ["#F7B801", 0.4],
            ["#A30000", 0.2],
          ]}
          onComplete={() => [true]}
        >
          {(props) => <Item {...props} />}
        </CountdownCircleTimer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
