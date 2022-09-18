import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import React from "react";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const HomeScreen = () => {
  return (
    <View style={styles.GettingStartedPage}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#000", "#eab308"]}
        style={styles.background}
      >
        <Image
          style={styles.DeliveryMan2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yrw3mljxp4l-2%3A4176?alt=media&token=bb26164f-4d8e-40ee-840e-ae2a39362e06",
          }}
        />
      </LinearGradient>

      <View style={styles.Group1082}>
        <Text style={styles.multiple1}>Quick Delivery at </Text>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 70,

            alignItems: "center",
          }}
        >
          <Text style={styles.multiple2}>your </Text>
          <Text style={styles.multiple3}>Doorstep</Text>
        </View>
        <Text style={styles.Txt403}>
            We are here to help you with your daily needs and essentials at your doorstep
        </Text>
        <TouchableOpacity style={styles.Button}>
       
            <Text style={styles.Txt022}>Get Started</Text>
     
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },

  GettingStartedPage: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    borderRadius: 22,
    backgroundColor: "white",
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/yrw3mljxp4l-2%3A4177?alt=media&token=24bc8f97-65d6-4a4a-bdad-c9c98ee5772f), linear-gradient(132.14deg, rgba(246,137,137,1) 0%, rgba(254,81,80,1) 100%, ) , linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    width: 414,
    height: 896,
  },
  DeliveryMan2: {
    position: "absolute",
    top: 0,

    width: responsiveWidth(100),
    height: responsiveHeight(70),
  },
  Group1082: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: responsiveHeight(70),

    width: responsiveWidth(100),
    height: responsiveHeight(70),
    backgroundColor: "#000",
    borderRadius: 26,
  },
  multiple1: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    marginHorizontal: 50,
    marginTop: 20,
    fontSize: responsiveFontSize(4.5),

    color: "rgba(255, 255, 255, 1)",
    letterSpacing: 0,
  },
  multiple2: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",

    fontSize: responsiveFontSize(4.5),
    color: "#fff",
    letterSpacing: 0,
  },
  multiple3: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",

    fontSize: responsiveFontSize(4.5),
    color: "#eab308",
    letterSpacing: 0,
  },
  Txt403: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 40,
    marginVertical: 20,

    color: "#9ca3af",
  },
  Button: {
    display: "flex",
    width: responsiveWidth(100),
    height: responsiveHeight(8),

    backgroundColor: "#eab308",
    borderRadius: 34,
    marginTop: -10,

    justifyContent: "center",
    alignItems: "center",
  },
  Txt022: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",

    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
