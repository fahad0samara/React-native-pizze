import Icon, {Icons} from "./Icon";
import * as Animatable from "react-native-animatable";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useEffect, useRef} from "react";

import Details from "../screens/Details";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Like from "../screens/Like";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

export default function Navigation({}: {}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Like"
        component={Like}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: "Oops!"}}
      />
      <Stack.Group screenOptions={{presentation: "formSheet"}}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Ionicons,
    activeIcon: "grid",
    inActiveIcon: "grid-outline",
    component: TabOneScreen,
  },
  {
    route: "Like",
    label: "Like",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: Like,
  },
  {
    route: "Cart",
    label: "Cart",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "cart",
    inActiveIcon: "cart-outline",
    component: Cart,
  },
  {
    route: "Account",
    label: "Account",
    type: Icons.FontAwesome,
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: Account,
  },
];

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabButton = (props: {
  item: any;
  onPress: any;
  accessibilityState: any;
}) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      /*
      // @ts-ignore */

      viewRef.current.animate({
        0: {scale: 1.9, rotate: "0deg"},
        1: {scale: 1.7, rotate: "360deg"},
      });
    } else {
      /*
      // @ts-ignore */
      viewRef.current.animate({
        0: {
          scale: 1.7,
          rotate: "360deg",
        },
        1: {scale: 1, rotate: "0deg"},
      });
    }
  }, [focused]);

  return (
    // @ts-ignore
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? "white" : "black"}
          activeIcon={""}
          inActiveIcon={""}
          size={0}
          route={""}
          style={undefined}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 45,
          backgroundColor: "#eab308",
          position: "absolute",
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            // @ts-ignore

            name={item.route}
            // @ts-ignore
            component={item.component}
            options={{
              tabBarShowLabel: false,
               // @ts-ignore
              tabBarButton: props =>
               // @ts-ignore
               <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
