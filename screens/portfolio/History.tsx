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

const Like = ({navigation}: any) => {
  const cartData2 = useSelector(state => state.cartData2);
  const dispatch = useDispatch();
  const deleteAll = id => {
    dispatch(removeDataFromCart2(id));
  };
  // remove all data from cart
  const removeData = (id: any) => {
    dispatch(removeDataFromCart2(id));
  };

  // total price
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    let total = 0;
    cartData2.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cartData2]);
  console.log("====================================");
  console.log(total);
  console.log("====================================");

  return cartData2.length > 0 ? (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <Image
        source={require("../../assets/images/Like.png")}
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
                  width: 100,

                  height: 100,
               
                  borderRadius: 70,
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
                  // add the time here
                }
                
                
            
                <Text
                  style={{
                    color: "#eab308",
                    fontWeight: "bold",
                    fontSize: responsiveFontSize(2),
                  }}
                >
                  {item.date}
                </Text>

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
        source={require("../../assets/images/Like0.png")}
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
  );
};

export default Like;