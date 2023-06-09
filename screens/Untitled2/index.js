import React from "react";
import { View, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
  return <View style={styles.container}>
      <Image source={require("./Minimalist simple plant logo(1).png")} style={styles.image} resizeMode="cover" />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D3B398",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: 560
  }
});
export default SplashScreen;