import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AllBookAvailable from "../SubComponents/AllBookAvailable";
import { FontAwesome5 } from "@expo/vector-icons";
import CurrentReadAll from "../SubComponents/CurrentReadAll";

export default function CurrentReading({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.backBotton}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
          </TouchableOpacity>
        </View>
        <View style={styles.txtWraper}>
          <Text style={styles.txt}>CURRENT READING BOOK</Text>
        </View>
      </View>

      <ScrollView>
        <CurrentReadAll bookData="../" />
        <CurrentReadAll bookData="../" />
        <CurrentReadAll bookData="../" />
        <CurrentReadAll bookData="../" />
      </ScrollView>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 40,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backBotton: {
    flex: 1,
  },
  txtWraper: {
    flex: 9,
    padding: 10,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 17,
  },
});
