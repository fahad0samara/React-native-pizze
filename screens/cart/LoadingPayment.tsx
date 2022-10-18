import {View, Text} from "react-native";
import React, {useEffect} from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import {useSelector} from "react-redux";
const LoadingPayment = ({navigation, route}: any) => {
  // randomNumber number to simulate the payment process
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  // Progress.Bar


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        value={100}
        progressValueColor={"#ecf0f1"}
        inActiveStrokeOpacity={0.4}
        activeStrokeColor={"#eab308"}
        valueSuffix={"%"}
        progressValueFontSize={40}
        duration={100000}
        onAnimationComplete={() =>
          // set alert message and navigate to the home screen
          // alert the order has been placed successfully and set the random number to the order number
          {
            alert(
              `Order placed successfully, your table  number is ${randomNumber}`
            );

            //  navigate to the home screen
            navigation.navigate("Root");
          }
        }
      />
      {
        ///    Food is being prepared please wait
      }
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#eab308",
            textAlign: "center",
            fontWeight: "bold",

            fontSize: 40,
          }}
        >
          Food is being prepared
        </Text>
        <Text
          style={{
            color: "#eab308",
            fontSize: 40,
          }}
        >
          please wait
        </Text>
      </View>
      {
        // show the random number the user will taken for the food id
      }
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",

            fontSize: 30,
          }}
        >
          {
            /// number of the table
          }
          your table number is
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 40,
          }}
        >
          {
            /// number of the table
          }
          {randomNumber}
        </Text>
      </View>

      {
        // show the user the button to go to the home screen  or the order screen
      }
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#eab308",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 40,
            }}
            onPress={() => {
              navigation.navigate("Root");
            }}
          >
            Home
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoadingPayment;
