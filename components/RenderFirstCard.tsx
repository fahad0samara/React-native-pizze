
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
import {useNavigation} from "@react-navigation/native";
const RenderFirstCard = ({  item }:any) => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          item,
        })
      }
    >
      <BlurView intensity={5} tint="dark" style={style.card}>
        <Image
          source={item.photo}
          style={{
            height: responsiveHeight(20),
            width: "100%",
            borderBottomRightRadius: 10,
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
            backgroundColor: "#eab308",
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
            <Animatable.Text
              style={{
                color: "#fff",
                fontSize: responsiveFontSize(2),
                fontStyle: "italic",
                fontWeight: "bold",
                marginLeft: 5,
              }}
            >
              {item.size}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
            }}
          >
            <FontAwesome name="star" color={"yellow"} size={18} />
            <Text style={style.rating}>{item.rating}</Text>
          </View>
        </View>
      </BlurView>
    </TouchableOpacity>
  );
};

export default RenderFirstCard
const style = StyleSheet.create({
  card: {
    height: responsiveHeight(30),

    elevation: 5,
    shadowColor: "#eab308",
    shadowOffset: {
      width: 5,
      height: 6,
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
    fontStyle: "italic",
  },
  rating: {
    fontWeight: "bold",
    color: "#eab308",
    fontStyle: "italic",
    fontSize: 15,
    marginLeft: 5,
  },
});
