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
import ModalScreen from "./ModalScreen";

import {images} from "../constants";
import {restaurantData, TopPizza, categoryData} from "../Data/RestaurantData";
import {isLoading} from "expo-font";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import {renderCard} from "../components/Card";
import { renderNew } from "../components/Card2";


const New = ({navigation}:any) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#000",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            fontWeight: "bold",
            color: "#fff",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          New pizza
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("TabTwo")}>
          <View
            style={{
              backgroundColor: "#000",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "bold",
                color: "#eab308",
                alignItems: "center",
                textAlign: "center",
                marginRight: 10,
              }}
            >
              view all
            </Text>
            <FontAwesome
              style={{
                backgroundColor: "#eab308",
                borderRadius: 50,
                padding: 1.5,
                shadowColor: "#fff",
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 12,
                shadowRadius: 3.84,
                elevation: 9,
                color: "#fff",

                fontWeight: "bold",

                alignItems: "center",
                textAlign: "center",
              }}
              name="angle-right"
              size={30}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={restaurantData}
        renderItem={renderNew}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingLeft: 20,
        }}
      />
    </>
  );
};

export default New;
