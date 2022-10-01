import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  decreaseCartQuantity,
  deleteAllFromCart,
  increaseCartQuantity,
  removeDataFromCart,
} from "../Redux/action";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {FontAwesome} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const Cart = ({navigation}: any) => {
  const dispatch = useDispatch();
  let cartItems = useSelector(store => store.cartData);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
   const total = cartItems.reduce((total, cartItem) => {
     const item0 = cartItems.find(i => i.id === cartItem.id);
     return total + (item0?.price || 0) * cartItem.quantity;
   }, 0);


  const decreaseQuantity = (id: any) => {
    if (cartItems.find((item: any) => item.id === id).quantity === 1) {
      dispatch(removeDataFromCart(id));
    } else {
      dispatch(decreaseCartQuantity(id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["#eab308", "#eab308"]}
        />
      </View>
      <View
        style={{
          flexDirection: "row",

          marginHorizontal: 10,

          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#000",

            marginTop: 20,
            justifyContent: "center",
            marginLeft: responsiveWidth(2),
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="angle-left" size={24} color="white" />
          <Text
            style={{
              color: "#eab308",
              fontSize: responsiveFontSize(3),
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {/* 
       find the length of the cartData array and if it is greater than 0 then show the cart items
      */}
      {cartItems.length > 0 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#000",
          }}
        >
          <FlatList
            data={cartItems}
            renderItem={({item}) => (
              <>
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",

                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 20,

                    marginBottom: 40,
                  }}
                >
                  <Image
                    source={item.photo}
                    style={{
                      width: 120,

                      height: 130,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                      borderRadius: 20,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      marginTop: 20, //
                    }}
                  >
                    <Text
                      style={{
                        color: "#eab308",
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(3),
                      }}
                    >
                      {item.name}
                    </Text>

                    <View
                      style={{
                        marginTop: 20,

                        flexDirection: "row",
                      }}
                    >
                      {/*
                      decreaseCartQuantity */}
                      <TouchableOpacity
                        onPress={() =>
                          // setconter
                          decreaseQuantity(item.id)
                        }
                      >
                        <FontAwesome
                          name="minus"
                          size={24}
                          color="#eab308"
                          style={{marginRight: 10}}
                        />
                      </TouchableOpacity>
                      {
                        // show the total of the item
                      }

                      <Text
                        style={{
                          color: "#eab308",
                          fontWeight: "bold",
                          fontSize: responsiveFontSize(3),
                        }}
                      >
                        {
                          // show the   of the item
                          item.quantity
                        }
                      </Text>

                      <Text
                        style={{
                          color: "#eab308",
                          fontSize: responsiveFontSize(3),
                          marginHorizontal: 10,
                        }}
                      >
                        {item.total}
                      </Text>
                      {/*
                      increaseCartQuantity
                      */}
                      <TouchableOpacity
                        onPress={() =>
                          //   increase the quantity
                          dispatch(increaseCartQuantity(item.id))
                        }
                      >
                        <FontAwesome name="plus" size={24} color="#eab308" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {/*
                     show the total of the item
                      */}

                <Text
                  style={{
                    color: "#eab308",
                    fontSize: responsiveFontSize(3),
                    marginHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "#eab308",
                      fontSize: responsiveFontSize(3),
                      marginHorizontal: 10,
                      marginTop: 10,
                    }}
                  >
                    {cartQuantity}
                  </Text>
                  <Text
                    style={{
                      color: "#eab308",
                      fontSize: responsiveFontSize(3),
                      marginHorizontal: 10,
                      marginTop: 10,
                    }}
                  >
                    {
                      // show the total of the item
                    }
                    {total}$
                  </Text>
                </Text>
              </>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "#000",
            flex: 1,

            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: responsiveWidth(40),
              height: responsiveHeight(20),
              marginLeft: 120,
              marginTop: 40,
            }}
            source={require("../assets/images/Like0.png")}
          />
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 5,
              fontWeight: "bold",
              marginHorizontal: 35,

              fontSize: responsiveFontSize(4),
              color: "#fff",
              marginTop: 20,
            }}
          >
            You do not have pizza,
          </Text>
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",

              marginLeft: 75,
              fontWeight: "bold",
              fontSize: responsiveFontSize(3.5),
              color: "#fff",
            }}
          >
            add a pizza to the list
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#eab308",

              width: "60%",
              borderRadius: 10,
              marginVertical: 20,
              marginLeft: 80,
            }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                fontSize: responsiveFontSize(3.5),
                fontWeight: "bold",
                marginLeft: 50,
                color: "#fff",
              }}
            >
              Add pizza
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000",
  },
  item: {
    height: responsiveHeight(30),

    borderBottomLeftRadius: 100, // logic goes here
    borderBottomRightRadius: 100,

    overflow: "hidden",

    marginTop: -150, // move container
    paddingTop: 50, // move inner item down
  },
});

export default Cart;
