import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/colors";

class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>
    );
  }
}

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <View style={styles.imageContainer}>
          <LogoTitle />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: "20%",
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
