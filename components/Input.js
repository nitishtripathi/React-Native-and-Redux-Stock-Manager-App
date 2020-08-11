import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = (props) => {
  return (
    <View>
      <TextInput
        {...props}
        style={{ ...styles.IOContainer, ...props.style }}
        placeholder="Use a name or ticker symbol"
        onChangeText={props.onTextChange}
        value={props.value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  IOContainer: {
    height: 50,
    borderWidth: 1,
    marginVertical: 20,
    color: "#64AFCB",
    borderColor: "#64AFCB",
    width: "100%",
    marginTop: 10,
    backgroundColor: "white",
    zIndex: 2,
    padding: 10,
  },
});

export default Input;
