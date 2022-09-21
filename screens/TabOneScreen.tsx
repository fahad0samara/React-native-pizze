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
} from "react-native";
import {BlurView} from "expo-blur";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import {RootTabScreenProps} from "../types";
import {FontAwesome} from "@expo/vector-icons";
import ModalScreen from "./ModalScreen";

import {images } from "../constants";
import { restaurantData } from "../Data/RestaurantData";
import { isLoading } from "expo-font";


export default function TabOneScreen({
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

  // Dummy Datas



  const categoryData = [
    {
      id: 1,
      name: "Neapolitan ",
    },
    {
      id: 2,
      name: "Chicago ",
    },
    {
      id: 3,
      name: "New York-Style",
    },
    {
      id: 4,
      name: "Sicilian",
    },
    {
      id: 5,
      name: "Greek ",
    },
    {
      id: 6,
      name: "California ",
    },
  

  ];

  // price rating


  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
 
  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }





  function renderMainCategories() {
    const renderItem = ({item}:any) => {
      return (
        <TouchableOpacity
       
          onPress={() => onSelectCategory(item)}
        >
          <Text
            style={{
              marginTop: 20,
              padding: 10,
              fontSize: 20,
              borderRadius: 15,
               
              fontWeight: "bold",
              alignItems: "center",
              textAlign: "center",
            
              backgroundColor:
                selectedCategory?.id == item.id ? "#eab308" : "white",
              color: selectedCategory?.id == item.id ? "#fff" : "black",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{padding: 10}}>
        <Text>Main</Text>
        <Text >Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: 20}}
        />
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({item}: any) => (
      <TouchableOpacity
        style={{
          marginBottom: 20,
          padding: 7,
          borderRadius: 40,
        }}
      >
        {/* Image */}

        <ImageBackground
          source={item.photo}
          style={{
            width: 175,
            height: 250,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
          }}
        >
          <BlurView
            tint="dark"
            intensity={90}
            style={{
              position: "absolute",
              bottom: 0,
              backgroundColor: "#eab308",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

              width: "100%",
              height: "40%",
            }}
          >
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 5,

                backgroundColor: "transport",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 20,

                  color: "white",
                }}
              >
                {item.name}
              </Text>
              {/* rating */}
           
              {/* time */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {item.time}
                </Text>
                <FontAwesome
                  name="clock-o"
                  size={20}
                  color="#eab308"
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            {/* size */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {item.size} / {item.people}
              </Text>
              <FontAwesome
                name="user"
                size={20}
                color="#eab308"
                style={{marginLeft: 5}}
              />
              {/* price */}
            

            </View>
          </BlurView>
        </ImageBackground>

        {/* Restaurant Info */}
      </TouchableOpacity>
    );

    return (
      <FlatList
        removeClippedSubviews={true}
        data={restaurants}
        initialNumToRender={4}

     
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{}}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
      
        {renderMainCategories()}
        {renderRestaurantList()}
      </ScrollView>
    </SafeAreaView>
  );
}
       
       
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
