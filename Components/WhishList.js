import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import WhishListAll from "../SubComponents/WhishListAll";

export default function WhishList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.backBotton}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
          </TouchableOpacity>
        </View>
        <View style={styles.txtWraper}>
          <Text style={styles.txt}>WHISH LIST</Text>
        </View>
      </View>

      <ScrollView>
        <WhishListAll bookData="../" />
        <WhishListAll bookData="../" />
        <WhishListAll bookData="../" />
        <WhishListAll bookData="../" />
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
