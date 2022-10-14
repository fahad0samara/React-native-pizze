import { View, Text } from 'react-native'
import React from 'react'

const Payment = ({route}:any) => {
  // show the total amount
    const { total } = route.params;
    

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: "#fff", fontSize: 40, marginTop: 40}}>Payment</Text>
      <Text style={{color: "#fff", fontSize: 40, marginTop: 40}}>{total}</Text>
    </View>
  );
};

export default Payment