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
} from "../Redux/action";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {FontAwesome} from "@expo/vector-icons";

const Like = ({navigation}: any) => {
  // typescript

  const cartData2 = useSelector((state: any) => state.cartData2);
  const dispatch = useDispatch();
  // show the timestamp
  const showTime = (time: any) => {
    const date = new Date(time);
    return date.toLocaleString();
  };
  //

  // total price
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let total = 0;
    cartData2.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cartData2]);

  return cartData2.length > 0 ? (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <Image
        source={require("../assets/images/Like.png")}
        style={{
          position: "absolute",
          right: -60,

          width: responsiveWidth(40),
          height: responsiveHeight(20),
        }}
      />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          marginHorizontal: 20,

          justifyContent: "space-between",

          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#000",

            marginTop: 40,
            justifyContent: "center",
            marginLeft: responsiveWidth(2),
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome name="angle-left" size={24} color="white" />
          <Text
            style={{
              color: "#eab308",
              fontSize: responsiveFontSize(4),
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cartData2}
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
                {
                  // show the timestamp
                }
          

                <View
                  style={{
                    marginTop: 15,

                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#eab308",
                      width: "40%",
                      padding: 4,
                    }}
                  >
                    <Text
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 15,
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(2.3),
                        color: "#fff",
                      }}
                    >
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fff",
                      width: "40%",
                      padding: 5,
                      marginLeft: 3,
                    }}
                    onPress={() => {
                      dispatch(removeDataFromCart2(item.id));
                    }}
                  >
                    <Text
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 30,
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: responsiveFontSize(2.3),
                      }}
                    >
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
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
        alignItems: "center",

        justifyContent: "center",
      }}
    >
      <Image
        style={{
          width: responsiveWidth(40),
          height: responsiveHeight(20),
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
          

          fontSize: responsiveFontSize(4),
          color: "#fff",
          marginTop: 20,
        }}
      >
        You do not have any 
      </Text>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",

        
          fontWeight: "bold",
          fontSize: responsiveFontSize(3.5),
          color: "#fff",
        }}
      >
        favorite items
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#eab308",

          width: "60%",
          borderRadius: 10,
          marginVertical: 20,
        
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
  );
};

export default Like;
