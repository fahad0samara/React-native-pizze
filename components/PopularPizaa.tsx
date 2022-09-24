import {FontAwesome} from "@expo/vector-icons";
import {BlurView} from "expo-blur";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";

import * as Animatable from "react-native-animatable";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const renderTop = ({item, navigation}: any) => (
  <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", item)}>
    <BlurView intensity={90} tint="dark" style={style.card}>
      <Image
        source={item.photo}
        style={{
          height: responsiveHeight(15),
          width: "100%",
          borderTopRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      />

      <Text style={style.cardName}>{item.name}</Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={style.price}>{item.price}</Text>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <FontAwesome name="star" color={"yellow"} size={18} />
          <Text style={style.rating}>{item.rating}</Text>
        </View>
      </View>
    </BlurView>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  card: {
    height: responsiveHeight(25),

    elevation: 10,
    width: responsiveWidth(45),
    marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: responsiveFontSize(2.3),
    color: "#eab308",
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    color: "#eab308",
    fontSize: responsiveFontSize(2.3),
  },
  rating: {
    fontWeight: "bold",
    color: "#eab308",
    fontSize: 12,
  },
});
