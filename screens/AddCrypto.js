import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Input from "../components/Input";
import Buttons from "../components/Button";
import * as fetchCryptoCurrency from "../data/actions/CryptoCurrency";

const AddCrypto = (props) => {
  const [cryptText, setCryptText] = useState("");

  const dispatch = useDispatch();
  const IPHandler = (text) => {
    setCryptText(text.replace(/\s+/g, ""));
  };

  const submitHandler = useCallback(() => {
    if (cryptText.length <= 0) {
      return;
    } else {
      dispatch(fetchCryptoCurrency.searchCrypto(cryptText));
      props.navigation.goBack();
    }
  }, [dispatch, cryptText]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={1}
        style={styles.component}
      >
        <View>
          <View style={styles.secondView}>
            <Text style={styles.TextStyle}>Add a Cryptocurrency</Text>
            <Input onTextChange={IPHandler} />
            <View style={{ alignItems: "flex-end" }}>
              <Buttons title="Add" onPress={submitHandler} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

AddCrypto.navigationOption = {
  headerTitle: "",
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  secondView: { marginHorizontal: 25 },

  TextStyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonStyle: {},
});

export default AddCrypto;
