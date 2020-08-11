import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Buttons = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "yellow",
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: 130,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Buttons;
