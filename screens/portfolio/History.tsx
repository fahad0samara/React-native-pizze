import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  decreaseCartQuantity,
  deleteAllFromCart,
  increaseCartQuantity,
  removeDataFromCart2,
} from "../../Redux/action";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {FontAwesome} from "@expo/vector-icons";

const Like = ({navigation, route}: any) => {
  // get the data from route
  const { total, cartData } = route?.params;
 
  // get the data from redux
  const cart = useSelector((state: any) => state.cart);
  console.log("cart", cart);

  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        // render the data here
        // FlatList
      }

      {
        // FlatList
      }
      <FlatList
        data={cartData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(20),
              backgroundColor: "#fff",
              borderRadius: 10,
              marginTop: 30,
              marginHorizontal: 20,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: responsiveWidth(30),
                height: responsiveHeight(20),
                backgroundColor: "#fff",
                borderRadius: 10,
          
                flexDirection: "row",
              
              }}
            >
              <Image
                source={item.photo}
                style={{
                  width: responsiveWidth(30),
                  height: responsiveHeight(20),
                  borderRadius: 10,
                }}
              />
              {
                // render the Name
              }
              <Text
                style={{
                  color: "#000",
                  fontSize: responsiveFontSize(2),
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                {item.name}
              </Text>

              {
                // render the price
              }
              <Text
                style={{
                  color: "#000",
                  fontSize: responsiveFontSize(2),
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                {item.price}
              </Text>
            </View>
          </View>
        )}
      />
      {
        // tOTa
      }
      <Text
        style={{
          color: "#fff",
          fontSize: responsiveFontSize(3),
          marginTop: 40,
        }}
      >
        {total}
      </Text>
    </View>
  );

  
   
};

export default Like;
