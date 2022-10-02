import {FontAwesome} from "@expo/vector-icons";
import React, {useState} from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Animated,
  ActivityIndicator,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addToCart2, increaseCartQuantity} from "../Redux/action";
const LineDivider = () => {
  return (
    <View style={{width: 1, paddingVertical: 5}}>
      <View
        style={{
          flex: 1,
          borderLeftColor: "red",
          borderLeftWidth: 2.5,
        }}
      ></View>
    </View>
  );
};

const ItemDetail = ({route, navigation}: any) => {
  let cartItems2 = useSelector(store => store.cartData2);
  let {item} = route.params;
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(4);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  let cartItems = useSelector(store => store.cartData);
  const handleCart = item => {
    const {id} = item;
    let newItem = {...item};

    let find = cartItems.find(item => item.id === id);
    if (!find) {
      newItem.quantity = 1;
      dispatch(addToCart(newItem));
    } else {
      dispatch(increaseCartQuantity(id));
    }
  };

  // add to order
  const AddTOcart = () => {
    let itemIndex = cartItems2.findIndex((cartItems2: any) => {
      return cartItems2.id === item.id;
    });
    if (itemIndex === -1) {
      dispatch(addToCart2(item));
    } else {
      dispatch(increaseCartQuantity(itemIndex));
    }
  };

  const indicator = new Animated.Value(0);

  function renderItemDescription() {
    // const indicator = new Animated.Value(0);

    const indicatorSize =
      scrollViewWholeHeight > scrollViewVisibleHeight
        ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
          scrollViewWholeHeight
        : scrollViewVisibleHeight;

    const difference =
      scrollViewVisibleHeight > indicatorSize
        ? scrollViewVisibleHeight - indicatorSize
        : 1;

    return (
      <View style={{flex: 1, flexDirection: "row", padding: 10}}>
        {/* Custom Scrollbar */}
        <View style={{width: 4, height: "100%", backgroundColor: "#000"}}>
          <Animated.View
            style={{
              width: 6,
              height: indicatorSize,
              backgroundColor: "#eab308",
              transform: [
                {
                  translateY: Animated.multiply(
                    indicator,
                    scrollViewVisibleHeight / scrollViewWholeHeight
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          />
        </View>

        {/* Description and scrollview */}
        <ScrollView
          contentContainerStyle={{paddingLeft: 10}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={(width, height) => {
            setScrollViewWholeHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => {
            setScrollViewVisibleHeight(height);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: indicator}}}],
            {useNativeDriver: false}
          )}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: "#eab308",
              marginBottom: 10,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: responsiveFontSize(2.5),

              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            {item.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  if (item) {
    return (
      <View style={{flex: 1, backgroundColor: "black"}}>
        {/* Item Cover Section */}
        <View style={{flex: 4}}>
          <View style={{flex: 1}}>
            <ImageBackground
              source={item.photo}
              resizeMode="cover"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />

            {/* Navigation header */}
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                marginTop: 20,

                height: 80,
                alignItems: "flex-end",
              }}
            >
              <TouchableOpacity
                style={{
                  marginLeft: 10,

                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.goBack()}
              >
                <FontAwesome
                  name="arrow-left"
                  size={responsiveFontSize(3.5)}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            {/* Item Info */}
            <View
              style={{
                flexDirection: "row",

                paddingVertical: 8,
                position: "absolute",
                bottom: 0,

                margin: 20,
                borderRadius: 10,
                backgroundColor: "rgba(0,0,00,0.8)",
              }}
            >
              {/* Rating */}
              <View style={{flex: 1, alignItems: "center"}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: "bold",

                    color: "white",
                  }}
                >
                  {item.price}
                </Text>
                <Text
                  style={{
                    color: "#eab308",
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: "bold",
                  }}
                >
                  price
                </Text>
              </View>

              <LineDivider />

              {/* time */}
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 7,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: "bold",

                    color: "white",
                  }}
                >
                  {item.time}
                </Text>
                <Text
                  style={{
                    color: "#eab308",
                    fontSize: responsiveFontSize(3),
                    fontWeight: "bold",
                  }}
                >
                  time
                </Text>
              </View>

              <LineDivider />

              {/* size */}
              <View style={{flex: 1, alignItems: "center"}}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    fontWeight: "bold",

                    color: "#fff",
                  }}
                >
                  {item.size}
                </Text>
                <Text
                  style={{
                    color: "#eab308",
                    fontSize: responsiveFontSize(3),
                    fontWeight: "bold",
                  }}
                >
                  size
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={{flex: 2}}>{renderItemDescription()}</View>
        {/* render ingredients*/}
        <View>
          {/*  ingredients
          
           id: 1,
                nameicon: "FLOUR",
                image: images.flour,
          */}
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: "#eab308",
              marginBottom: 2,
              shadowColor: "#000",
              fontWeight: "bold",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            }}
          >
            ingredients
          </Text>
          <FlatList
            data={item.ingredients}
            renderItem={({item}) => (
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 10,
                  marginHorizontal: 8,
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: responsiveWidth(15),
                    height: responsiveHeight(8),
                    resizeMode: "contain",
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: responsiveFontSize(2),
                    fontWeight: "bold",
                  }}
                >
                  {item.nameicon}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Buttons */}
        <View style={{height: 70, marginBottom: 30}}>
          <View style={{flex: 1, flexDirection: "row"}}>
            {/* hart */}
            <TouchableOpacity
              style={{
                width: 60,
                backgroundColor: "white",
                marginLeft: 10,
                marginVertical: 10,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Like", AddTOcart())}
            >
              <FontAwesome
                name="heart"
                size={responsiveFontSize(4)}
                color={"red"}
              />
            </TouchableOpacity>

            {/* order now */}
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#eab308",
                marginHorizontal: 10,
                marginVertical: 10,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Cart", handleCart(item))}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size="large" color="#eab308" />
        </View>
      </>
    );
  }
};

export default ItemDetail;
