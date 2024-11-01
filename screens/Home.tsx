import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";

import React from "react";

import {info, RootTabScreenProps} from "../types";
import {FontAwesome} from "@expo/vector-icons";

import {restaurantData, TopPizza, categoryData} from "../Data/RestaurantData";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import New from "./New/New";

import RenderFirstCard from "../components/RenderFirstCard";
import RenderTop from "../components/RenderTop";

export default function Home({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [Hours, setHours] = React.useState("");
  React.useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setHours("Good Morning");
    } else if (hour < 18) {
      setHours("Good Afternoon");
    } else {
      setHours("Good Evening");
    }
  }, []);

  const [search, setSearch] = React.useState(""); //search
  const [searchData, setSearchData] = React.useState(restaurantData); //search data
  const [loading, setLoading] = React.useState(false);
  //loading

  // search function
  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = restaurantData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearchData(newData);
      setSearch(text);

      setLoading(false);
    } else {
      setSearchData(restaurantData);

      setSearch(text);
    }
  };

  // price rating

  const [categories, setCategories] = React.useState(categoryData); //category data
  const [selectedCategory, setSelectedCategory] = React.useState(); //selected category
  const [restaurants, setRestaurants] = React.useState(restaurantData); //restaurant data
  const [topPizza, setTopPizza] = React.useState(TopPizza); //top pizza data

  function onSelectCategory(category: any) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  const RenderCategories = ({item}: info) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#000",
      }}
      onPress={() => onSelectCategory(item)}
    >
      <Text
        style={{
          marginTop: responsiveHeight(0.5),
          padding: responsiveWidth(2.5),
          fontSize: responsiveFontSize(2),
          marginLeft: 3,
          borderRadius: 15,

          fontWeight: "bold",
          alignItems: "center",
          textAlign: "center",
          // @ts-ignore
          backgroundColor: selectedCategory?.id == item.id ? "#fff" : "#eab308",
          // @ts-ignore
          color: selectedCategory?.id == item.id ? "#000" : "black",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#000",
            padding: 20,
          }}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.title}> {Hours} FAHAD </Text>
          </View>

          <Pressable
            onPress={() => navigation.navigate("Modal")}
            style={({pressed}) => ({
              opacity: pressed ? 0.5 : 1,
              backgroundColor: "#000",
            })}
          >
            <FontAwesome
              name="paint-brush"
              size={35}
              style={{
                marginRight: 15,
                marginTop: 10,
                backgroundColor: "#eab308",
                borderRadius: 50,
                padding: 5,
                shadowColor: "#000",

                shadowOffset: {
                  width: 5,
                  height: 4,
                },
                shadowOpacity: 12,
                shadowRadius: 3.84,
                elevation: 9,

                color: "white",
              }}
            />
          </Pressable>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Modal")}
          style={styles.getStartedContainer}
        >
          <FontAwesome
            name="search"
            size={25}
            style={{
              position: "absolute",
              backgroundColor: "#eab308",
              borderRadius: 50,
              padding: 5,
              shadowColor: "#000",

              top: 10,
              left: 10,
              color: "#fff",
            }}
          />
          <TextInput
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            placeholder="Search for a pizza..."
            placeholderTextColor={"#000"}
            style={{
              borderRadius: 10,
              paddingLeft: 40,
              fontWeight: "bold",
              fontSize: 15,

              height: 40,
              width: 300,
              shadowColor: "#000",
            }}
          />
        </Pressable>

        {
          // RenderCategories
        }
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          // @ts-ignore
          renderItem={RenderCategories}
          contentContainerStyle={{paddingVertical: 20}}
        />

        {
          // render the first card
        }
        <FlatList
          removeClippedSubviews={true}
          data={restaurants}
          initialNumToRender={4}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <RenderFirstCard item={item} />}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#000",
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              fontWeight: "bold",
              color: "#fff",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Top pizza
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("TabTwo")}>
            <View
              style={{
                backgroundColor: "#000",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2.3),
                  fontWeight: "bold",
                  color: "#eab308",
                  alignItems: "center",
                  textAlign: "center",
                  marginRight: 10,
                }}
              >
                view all
              </Text>
              <FontAwesome
                style={{
                  backgroundColor: "#eab308",
                  borderRadius: 50,
                  padding: 1.5,
                  shadowColor: "#fff",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 12,
                  shadowRadius: 3.84,
                  elevation: 9,
                  color: "#fff",

                  fontWeight: "bold",

                  alignItems: "center",
                  textAlign: "center",
                }}
                name="angle-right"
                size={30}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          removeClippedSubviews={true}
          data={topPizza}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => <RenderTop item={item} />}
        />
        {
          // render the New card
        }
        <New />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  welcomeContainer: {
    marginLeft: 1,
    fontWeight: "bold",

    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    marginTop: 5,

    marginLeft: 2,
  },
  getStartedContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,

    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
