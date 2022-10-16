import {View, Text} from "react-native";
import React, {useEffect} from "react";
import CircularProgress from "react-native-circular-progress-indicator";
const LoadingPayment = ({ navigation, route }: any) => {
  const {total, cartData} = route.params;
 
  useEffect(() => {
    // navigate to payment screen after 5 seconds
    // and pass the data to the payment screen
    // and don't allowed to go back to the loading screen
    setTimeout(() => {
      // and don't allowed to go back to the loading screen
      navigation.replace("History", {
        total: total,
        cartData: cartData,
      });
    }, 1000);
  }, []);

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
        inActiveStrokeColor={"#2ecc71"}
        inActiveStrokeOpacity={0.2}
        progressValueColor={"#fff"}
        valueSuffix={"%"}
        onAnimationComplete={() => {
          alert("callback");
        }}
      />
      {
        // Add loading to order here
      }
      <Text style={{color: "#fff", fontSize: 40, marginTop: 40}}>
        processing...
      </Text>
    </View>
  );
};

export default LoadingPayment