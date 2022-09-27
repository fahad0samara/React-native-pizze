import {FontAwesome} from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
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
  let {item} = route.params;
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  React.useEffect(() => {}, []);

  function renderItemInfoSection() {
    return (
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

        {/* Color Overlay */}

        {/* Navigation header */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            height: 80,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => navigation.goBack()}
          >
            <FontAwesome
              name="chevron-left"
              size={responsiveFontSize(3)}
              color="white"
        
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: "center", justifyContent: "center"}}
          ></View>

          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={() => console.log("Click More")}
          >
            <FontAwesome
              name="ellipsis-v"
              size={responsiveFontSize(4)}
              color={"red"}
            />
          </TouchableOpacity>
        </View>

        {/* Item Cover */}

        {/* Item Name and Author */}
        <View
          style={{flex: 1.8, alignItems: "center", justifyContent: "center"}}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              color: item.navTintColor,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(4.5),
              color: item.navTintColor,
            }}
          >
            {item.author}
          </Text>
        </View>

        {/* Item Info */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 8,
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
    );
  }

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

        {/* Description */}
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

  function renderBottomButton() {
    return (
      <View style={{flex: 1, flexDirection: "row"}}>
        {/* Itemmark */}
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
          onPress={() => navigation.navigate("Saved", console.log(item))}
        >
          <FontAwesome
            name="cart-plus"
            size={responsiveFontSize(4)}
            color={"red"}
         
          />
        </TouchableOpacity>

        {/* Start Reading */}
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
          onPress={() => console.log("Start Reading")}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (item) {
    return (
      <View style={{flex: 1, backgroundColor: "black"}}>
        {/* Item Cover Section */}
        <View style={{flex: 4}}>{renderItemInfoSection()}</View>

        {/* Description */}
        <View style={{flex: 2}}>{renderItemDescription()}</View>

        {/* Buttons */}
        <View style={{height: 70, marginBottom: 30}}>
          {renderBottomButton()}
        </View>
      </View>
    );
  } else {
    return <></>;
  }
};

export default ItemDetail;