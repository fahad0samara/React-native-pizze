import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

const Payment = ({ route, navigation }: any) => {
  // get the data from route
  const { total, cartData } = route.params;
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardHolder, setCardHolder] = React.useState("");
  const [cardSucceed, setCardSucceed] = React.useState(false);

  const [cardNumberError, setCardNumberError] = React.useState(false);
  const [cardName, setCardName] = React.useState("");

  const [cardNameError, setCardNameError] = React.useState(false);
  const [cardNameSucceed, setNameCardSucceed] = React.useState(false);

  const [cardDate, setCardDate] = React.useState("");

  const [cvv, setCVV] = React.useState("");
  const [cvvError, setCvvError] = React.useState(false);
  const [cvvSucceed, setCvvSucceed] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/Cart.png")}
        style={{
          width: responsiveWidth(102),
          height: responsiveScreenHeight(30),

          marginTop: responsiveScreenHeight(10),
          marginLeft: responsiveWidth(-3),
        }}
      >
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            top: responsiveScreenHeight(20),
            left: responsiveWidth(15),
            fontSize: responsiveFontSize(3),
            fontStyle: "italic",
            fontWeight: "bold",
            fontVariant: ["small-caps"],
          }}
        >
          {cardName}
        </Text>
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            top: responsiveScreenHeight(13),
            left: responsiveWidth(22),
            fontSize: responsiveFontSize(3),
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {cardNumber}
        </Text>
        <Text
          style={{
            color: "#eab308",
            position: "absolute",
            top: responsiveScreenHeight(18),
            left: responsiveWidth(72),
            fontSize: responsiveFontSize(1.5),
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {cardDate}
        </Text>
        <Text
          style={{
            color: "#eab308",
            position: "absolute",
            top: responsiveScreenHeight(18),
            left: responsiveWidth(50),
            fontSize: responsiveFontSize(1.5),
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {cvv}
        </Text>
      </ImageBackground>
      {
        //  textInput for card number and name and date and cvv
      }
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
      >
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveScreenHeight(50),
            backgroundColor: "#000",
            marginTop: responsiveScreenHeight(5),
          }}
        >
          <Text
            style={{
              color: "#fff",

              top: responsiveScreenHeight(2),
              left: responsiveWidth(5),
              fontSize: responsiveFontSize(2),
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Card Number
          </Text>

          {
            // error message for card number and delet the massage when the user type the number
            // and the massage will succeed when the user type the number
          }

          {cardNumberError ? (
            <Text
              style={{
                color: "red",
                top: responsiveScreenHeight(2),
                left: responsiveWidth(5),
                fontSize: responsiveFontSize(1.5),
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Please enter a valid card number
            </Text>
          ) : null}
          {cardSucceed ? (
            <Text
              style={{
                color: "green",
                top: responsiveScreenHeight(2),
                left: responsiveWidth(5),
                fontSize: responsiveFontSize(1.5),
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Card number is valid
            </Text>
          ) : null}

          {
            // textInput for card number
          }
          <TextInput
            value={cardNumber}
            placeholder="Enter your card number"
            keyboardType="numeric"
            style={{
              width: responsiveWidth(90),
              height: responsiveScreenHeight(5),
              backgroundColor: "#fff",

              top: responsiveScreenHeight(3),
              left: responsiveWidth(5),
              borderRadius: 10,
              borderWidth: 5,
              borderColor: "#eab308",
              fontSize: responsiveFontSize(2),
              fontStyle: "italic",
              fontWeight: "bold",

              paddingLeft: responsiveWidth(5),
            }}
            maxLength={19}
            onChangeText={text => {
              setCardNumber(
                text
                  .replace(/\s/gi, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()
              );
              // show the error and succeed message
              if (text.length === 19) {
                setCardSucceed(true);
                setCardNumberError(false);
              }
              if (text.length < 19) {
                setCardSucceed(false);
                setCardNumberError(true);
              }
            }}
          />

          {
            // textInput for card name
          }
          <Text
            style={{
              color: "#fff",

              top: responsiveScreenHeight(5),
              left: responsiveWidth(5),
              fontSize: responsiveFontSize(2),
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Card Name
          </Text>
          {
            // error message for card holder name
          }
          {cardNameError ? (
            <Text
              style={{
                color: "red",
                top: responsiveScreenHeight(5),
                left: responsiveWidth(5),
                fontSize: responsiveFontSize(1.5),
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Please enter a valid card holder name
            </Text>
          ) : null}
          {
            // succeed message for card holder name
          }
          {cardNameSucceed ? (
            <Text
              style={{
                color: "green",
                top: responsiveScreenHeight(5),
                left: responsiveWidth(5),
                fontSize: responsiveFontSize(1.5),
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Card holder name is valid
            </Text>
          ) : null}

          <TextInput
            value={cardName}
            placeholder="Card Name"
            style={{
              width: responsiveWidth(90),
              height: responsiveScreenHeight(5),
              backgroundColor: "#fff",

              top: responsiveScreenHeight(7),
              left: responsiveWidth(5),
              borderRadius: 10,
              borderWidth: 5,
              borderColor: "#eab308",
              fontSize: responsiveFontSize(2),
              fontStyle: "italic",
              paddingLeft: responsiveWidth(5),
              fontWeight: "bold",
            }}
            onChangeText={text => {
              setCardName(text);
              // show the error message
              if (text.length > 0) {
                setCardNameError(false);
                setNameCardSucceed(true);
              }
              if (text.length === 0) {
                setCardNameError(true);
                setNameCardSucceed(false);
              }
            }}
          />
          {
            // textInput for card date and cvv
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: responsiveScreenHeight(2),
            }}
          >
            <View
              style={{
                width: responsiveWidth(45),
                height: responsiveScreenHeight(10),

                marginTop: responsiveScreenHeight(5),
              }}
            >
              <Text
                style={{
                  color: "#fff",

                  top: responsiveScreenHeight(2),
                  left: responsiveWidth(5),
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Card Date
              </Text>

              <TextInput
                value={cardDate}
                keyboardType="numeric"
                placeholder="MM/YY"
                style={{
                  width: responsiveWidth(40),
                  height: responsiveScreenHeight(5),
                  backgroundColor: "#fff",

                  top: responsiveScreenHeight(3),
                  left: responsiveWidth(5),
                  borderRadius: 10,
                  borderWidth: 5,
                  borderColor: "#eab308",
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  paddingLeft: responsiveWidth(5),
                  fontWeight: "bold",
                }}
                onChangeText={text => {
                  setCardDate(
                    text
                      .replace(/\s/gi, "")
                      .replace(/(\d{2})/g, "$1/")
                      .trim()
                  );
                }}
                maxLength={5}
              />
            </View>
            <View
              style={{
                width: responsiveWidth(45),
                height: responsiveScreenHeight(10),
                backgroundColor: "#000",
                marginTop: responsiveScreenHeight(5),
              }}
            >
              <Text
                style={{
                  color: "#fff",

                  top: responsiveScreenHeight(2),
                  left: responsiveWidth(5),
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                CVV
              </Text>

              <TextInput
                value={cvv}
                keyboardType="numeric"
                placeholder="CVV"
                style={{
                  width: responsiveWidth(40),
                  height: responsiveScreenHeight(5),
                  backgroundColor: "#fff",

                  top: responsiveScreenHeight(3),
                  left: responsiveWidth(5),
                  borderRadius: 10,

                  borderWidth: 5,
                  borderColor: "#eab308",
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  paddingLeft: responsiveWidth(5),
                  fontWeight: "bold",
                }}
                maxLength={3}
                onChangeText={text => {
                  setCVV(text);
                  // show the error message
                  if (text.length === 3) {
                    setCvvError(false);
                    setCvvSucceed(true);
                  }
                  if (text.length < 3) {
                    setCvvError(true);
                    setCvvSucceed(false);
                  }
                }}
              />
            </View>
          </View>
          {
            // display the button if all the textInput are valid
          }
          {cardNumberError || cardNameError || cvvError ? (
            <TouchableOpacity
              onPress={() => {
                alert("Please enter valid card details");
              }}
              style={{
                width: responsiveWidth(90),
                height: responsiveScreenHeight(5),
                backgroundColor: "#000",
                borderRadius: 10,
                borderWidth: 5,
                borderColor: "#eab308",
                top: responsiveScreenHeight(5),
                left: responsiveWidth(5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Pay
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                  navigation.navigate("LoadingPayment", {
                    total: total,
                    cartData: cartData,
                  });
              }}
              style={{
                width: responsiveWidth(90),
                height: responsiveScreenHeight(5),
                backgroundColor: "#eab308",
                borderRadius: 10,
                borderWidth: 5,
                borderColor: "#eab308",
                top: responsiveScreenHeight(5),
                left: responsiveWidth(5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: responsiveFontSize(2),
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                Pay
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Payment;
