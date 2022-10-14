import React from "react";
import {StyleSheet, Dimensions, Image, Platform, View} from "react-native";
import { Text } from "react-native-animatable";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
const {width} = Dimensions.get("screen");
import {useDispatch, useSelector} from "react-redux";
import { removeDataFromCart } from "../../Redux/action";

export default function AnimatedBoxesScrollView({ horizontal, boxes }) {
    const cartData = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  // REMOVE_ALL_FROM_CARTHistory
  const removed = (id) => {
    dispatch(removeDataFromCart(id));
  };

  
  // total price

  const direction = useSharedValue(0);
  const valuesOfBoxes = boxes.map(() => useSharedValue(0));

  const scrollHandler = useAnimatedScrollHandler({
    onEndDrag: () => {
      direction.value = 0;
    },
    onScroll: (event, ctx) => {
      const contentOffsetXY = horizontal
        ? event.contentOffset.x
        : event.contentOffset.y;
      const yDirection = contentOffsetXY - (ctx?.y ?? 0);
      direction.value = Math.sign(yDirection);
      ctx.y = contentOffsetXY;
    },
  });

  return (
    <View style={horizontal ? {height: 172, marginLeft: 18} : {flex: 1}}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        horizontal={horizontal}
        decelerationRate={0.5}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={() =>
          Platform.select({android: (direction.value = 0)})
        }
        nestedScrollEnabled={true}
        style={[
          horizontal ? styles.horizontalScrollView : styles.verticalScrollView,
        ]}
      >
        {cartData.map((item, i) => {
          const perspectiveStyle = useAnimatedStyle(() => {
            valuesOfBoxes[i].value = withSpring(
              interpolate(
                direction.value,
                [-1, 0, 1],
                [-5, 0, 5],
                Extrapolate.CLAMP
              )
            );
            return {
              transform: [
                {perspective: 150},
                horizontal
                  ? {rotateY: `${valuesOfBoxes[i].value}deg`}
                  : {rotateX: `${valuesOfBoxes[i].value}deg`},
              ],
            };
          });

          return (
            <Animated.View
              key={item.id}
              style={[
                horizontal
                  ? styles.horizontalScrollItem
                  : styles.verticalScrollItem,
                perspectiveStyle,
              ]}
            >
              <Image style={styles.image} source={item.photo} />

              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Text>
              {
                // delet item from cart
              }
              <Text
                style={{
                  color: "#fff",

                  fontWeight: "bold",
                }}
                onPress={() =>
                  removed(item.id)
                }
             
              >
                delete
              </Text>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalScrollView: {
    paddingHorizontal: 18,
    marginTop: 9,
  },
  horizontalScrollView: {
    backgroundColor: "#282A35",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingLeft: 9,
    paddingRight: 9,
  },
  verticalScrollItem: {
    height: 200,
    marginVertical: 12,
  },
  horizontalScrollItem: {
    width: width * 0.7,
    marginHorizontal: 9,
    marginVertical: 18,
    height: 140,
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 16,
  },
});
