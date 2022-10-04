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
  TOTAL_PRICE,
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
  const cartData = useSelector(state => state.cartData);
  let cartItems = useSelector(store => store.cartData);
  console.log("====================================");
  console.log();
  console.log("====================================");

  // this function is use to get the total price of the cart
  const total = cartItems.reduce((total, cartItem) => {
    const item = cartItems.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const decreaseQuantity = (id: any) => {
    if (cartItems.find((item: any) => item.id === id).quantity === 1) {
      dispatch(removeDataFromCart(id));
    } else {
      dispatch(decreaseCartQuantity(id));
    }
  };

  const CartCard = ({item}: any) => {
    return (
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
            width: responsiveWidth(35),

            height: responsiveHeight(20),
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            width: responsiveWidth(50),
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
              alignItems: "center",
            }}
          >
            {/*
                      decreaseCartQuantity */}
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                width: 70,
                height: 40,

                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() =>
                // setconter
                decreaseQuantity(item.id)
              }
            >
              <FontAwesome name="minus" size={24} color="#eab308" />
            </TouchableOpacity>
            {
              // show the total of the item
            }

            <Text
              style={{
                color: "#eab308",
                fontWeight: "bold",
                marginHorizontal: 10,
                fontSize: responsiveFontSize(4),
              }}
            >
              {
                // show the   of the item
                item.quantity
              }
            </Text>

            {/*
                      increaseCartQuantity
                      */}
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                width: 70,
                height: 40,

                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
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
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.item]}>
        <LinearGradient
          style={StyleSheet.absoluteFill}
          colors={["#eab308", "#eab308"]}
        />
      </View>

      {/* 
       find the length of the cartData array and if it is greater than 0 then show the cart items
      */}
      {cartData.length > 0 ? (
        <>
          <View style={styles.header}>
            <FontAwesome
              name="arrow-circle-left"
              size={28}
              onPress={navigation.goBack}
            />
            <Text style={{fontSize: 20, fontWeight: "bold"}}>Cart</Text>
          </View>
          <FlatList
            data={cartData}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20}}
          />

          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 2,
            }}
          >
            <View
              style={{
                marginVertical: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: responsiveFontSize(3),
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: "#eab308",
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(3),
                }}
              >
                ${total}
              </Text>
            </View>
            <View
              style={{
                borderTopWidth: 1,
                marginVertical: 1,

                borderTopColor: "#eeeeee",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "bold",
                  marginVertical: responsiveHeight(1),
                  fontSize: responsiveFontSize(3),
                }}
              >
                Tax
              </Text>
              <Text
                style={{
                  color: "#eab308",
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(3),
                }}
              >
                Free
              </Text>
            </View>

            <View
              style={{
                borderTopWidth: 1,

                borderTopColor: "#eee",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
                marginBottom: -30,
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: responsiveFontSize(3),
                }}
              >
                SubTotal
              </Text>
              <Text
                style={{
                  color: "#eab308",
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(4),
                }}
              >
                ${total}
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 40,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                paddingVertical: 15,
                marginVertical: responsiveHeight(8),
                borderRadius: 20,
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={{color: "#000", fontSize: 18, fontWeight: "bold"}}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </>
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
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,

    marginVertical: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "red",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
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
  background: {
    position: "absolute",
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },

  Group1082: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: responsiveHeight(60),

    width: responsiveWidth(100),
    height: responsiveHeight(70),
    backgroundColor: "#fff",
    borderRadius: 26,
  },
});

export default Cart;
