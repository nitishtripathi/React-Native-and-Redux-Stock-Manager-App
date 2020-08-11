import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import * as fetchCryptoCurrency from "../data/actions/CryptoCurrency";
import Colors from "../constants/colors";

const ProductDisplayItem = (props) => {
  let dayResultIndicator = <Text />;

  if (props.dayresults > 0) {
    dayResultIndicator = (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="call-made" size={12} color="green" />
        <Text style={styles.GreenDayResultStyle}>
          {props.dayresults.toFixed(2)}
        </Text>
      </View>
    );
  } else {
    dayResultIndicator = (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="call-received" size={12} color="red" />
        <Text style={styles.RedDayResultStyle}>
          {props.dayresults.toFixed(2)}
        </Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.mainContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Text style={styles.TitleStyle}>{props.name}</Text>
          <Text style={styles.PriceStyle}>{props.price.toFixed(2)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 15,
          }}
        >
          <Text style={styles.SymbolStyle}>{props.symbol}</Text>
          {dayResultIndicator}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const MainDisplay = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const cyptos = useSelector((state) => state.cryptocurr.Cyrptocurrency);
  const dispatch = useDispatch();

  const loadingScreen = useCallback(async () => {
    setError(null);
    try {
      await dispatch(fetchCryptoCurrency.searchCrypto(null));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch, setError, setIsLoading]);

  useEffect(() => {
    setIsLoading(true);
    loadingScreen().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadingScreen]);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
        <Text numberOfLines={2}>
          An error occured. Please check your connection!
        </Text>
        <Button title="Try again" onPress={loadingScreen} />
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  // if (!isLoading && cyptos.length === 0) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="black" />
  //       <Text>Please check your Internet Connection</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <Header title="CryptoTracker Pro" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: Colors.background,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: "space-between", height: "80%" }}>
            <FlatList
              onRefresh={loadingScreen}
              refreshing={isLoading}
              data={cyptos}
              keyExtractor={(item, index) => item.id}
              renderItem={(itemData) => (
                <ProductDisplayItem
                  name={itemData.item.name}
                  price={itemData.item.price}
                  symbol={itemData.item.symbol}
                  dayresults={itemData.item.dayresults}
                  contentContainerStyle={styles.list}
                  onDelete={() => {
                    dispatch(fetchCryptoCurrency.deleteCrypt(itemData.item.id));
                  }}
                />
              )}
            />
            <Button
              title="+ Add a CryptoCurrency"
              onPress={() => {
                props.navigation.navigate("addNewCrypto");
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // elevation: 5,
    backgroundColor: Colors.background,
    height: 100,
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.6,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  TitleStyle: {
    fontSize: 22,
    marginVertical: 3,
  },
  PriceStyle: {
    fontSize: 22,
    marginVertical: 3,
  },
  SymbolStyle: {
    fontSize: 14,
  },
  GreenDayResultStyle: {
    fontSize: 14,
    color: "green",
  },
  RedDayResultStyle: { fontSize: 14, color: "red" },
  list: {},
});

export default MainDisplay;
