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
    Text, View 
} from "react-native";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import React from "react";



import { RootTabScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";


import { images } from "../constants";
import { restaurantData } from "../Data/RestaurantData";
import { isLoading } from "expo-font";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";


export const renderItem = ({ item }: any) => (

  <TouchableOpacity
    style={{
   
      padding: responsiveWidth(3),
      borderRadius: 15,

      alignItems: "center",
      justifyContent: "center",
      borderBottomStartRadius: 40,
      borderTopEndRadius: 40,
    }}
  >
    {/* Image */}

    <ImageBackground
      source={item.photo}
      style={{
        width: responsiveWidth(40),

        height: responsiveHeight(30),
        alignItems: "center",
        justifyContent: "center",
        borderBottomStartRadius: 40,
        borderTopEndRadius: 40,
      }}
    >
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          borderBottomStartRadius: 20,
          borderTopEndRadius: 20,
          overflow: "hidden",
        }}
      >
        <BlurView
          tint="dark"
          intensity={100}
          style={{
            flexDirection: "row",
            padding: 10,
          }}
        >
          <FontAwesome
            style={{
              marginLeft: 5,
            }}
            name="star"
            color={"#eab308"}
            size={20}
          />
          <Animatable.Text
            style={{
              color: "white",
              marginLeft: 5,
            }}
          >
            {item.rating}
          </Animatable.Text>
        </BlurView>
      </Animatable.View>
      <BlurView
        tint="dark"
        intensity={100}
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,

          borderTopEndRadius: 40,
          overflow: "hidden",

          width: responsiveWidth(40),
          height: responsiveHeight(13),
        }}
      >
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 5,

            backgroundColor: "transport",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),

              color: "white",
            }}
          >
            {item.name}
          </Text>
          {/* rating */}

          {/* time */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "white",
              }}
            >
              {item.time}
            </Text>
            <FontAwesome
              name="clock-o"
              size={20}
              color="#eab308"
              style={{marginLeft: 5}}
            />
          </View>
        </View>
        {/* size */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {item.size} / {item.people}
          </Text>
          <FontAwesome
            name="user"
            size={20}
            color="#eab308"
            style={{marginLeft: 5}}
          />
          {/* price */}
        </View>
      </BlurView>
    </ImageBackground>

    {/* Restaurant Info */}
  </TouchableOpacity>
);
