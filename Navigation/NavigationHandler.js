import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, Header } from "react-navigation-stack";

import AddCrypto from "../screens/AddCrypto";
import MainDisplay from "../screens/MainDisplay";
import Colors from "../constants/colors";

const NavigationMngr = createStackNavigator({
  MainDisplay: {
    screen: MainDisplay,
    navigationOptions: { headerShown: false },
  },
  addNewCrypto: {
    screen: AddCrypto,
    navigationOptions: {
      headerBackTitle: "Back to List",
      headerTitle: "",
      headerStyle: {
        backgroundColor: Colors.background,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    },
  },
});

export default createAppContainer(NavigationMngr);
