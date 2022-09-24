
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {BlurView} from "expo-blur";
import React from "react";

import {RootTabScreenProps} from "../types";
import {FontAwesome} from "@expo/vector-icons";

import {images} from "../constants";
import {restaurantData} from "../Data/RestaurantData";
import {isLoading} from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
export const renderNew = ({item, navigation}: any) => (
  <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", item)}>
    <BlurView intensity={5} tint="dark" style={style.card}>
      <Image
        source={item.photo}
        style={{
          height: responsiveHeight(20),
          width: "100%",
        }}
      />
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          position: "absolute",
          right: 4,
            top: 5,
            backgroundColor: "#fff",
          borderBottomStartRadius: 20,
          borderTopEndRadius: 20,
          overflow: "hidden",
        }}
      >
        <BlurView
          tint="dark"
          intensity={10}
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <FontAwesome
            style={{
              marginLeft: 5,
            }}
            name="newspaper-o"
            color={"#eab308"}
            size={20}
          />
          <Animatable.Text
            style={{
                            color: "green",
                            fontSize: responsiveFontSize(2),
            fontStyle: "italic",
              marginLeft: 5,
            }}
          >
            New
          </Animatable.Text>
        </BlurView>
      </Animatable.View>
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
    height: responsiveHeight(30),

        elevation: 10,
        shadowColor: "#eab308",
        shadowOffset: {
            width: 0,
            height: 2,
        },
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
