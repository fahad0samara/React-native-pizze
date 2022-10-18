import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CircularProgress from "react-native-circular-progress-indicator";
import { useSelector } from 'react-redux';


const LoadingCart = ({navigation, route}:any) => {
    


  // useEf
  useEffect(() => {
    // navigate to payment screen after 5 seconds
    // and pass the data to the payment screen
    // and don't allowed to go back to the loading screen
    setTimeout(() => {
      // and don't allowed to go back to the loading screen
      navigation.replace("Payment", {
   
      });
    }, 1000);
  }, []);
;

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
        inActiveStrokeColor={"#eab308"}
        inActiveStrokeOpacity={0.2}
        progressValueColor={"#fff"}
        progressValueFontSize={40}
        duration={1000}
        valueSuffix={"%"}
      />
      <Text style={{color: "#fff", fontSize: 40, marginTop: 40}}>
        processing...
      </Text>
    </View>
  );
};

export default LoadingCart
