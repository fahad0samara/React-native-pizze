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
} from "react-native";
import {BlurView} from "expo-blur";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import {RootTabScreenProps} from "../types";
import {FontAwesome} from "@expo/vector-icons";
import ModalScreen from "./ModalScreen";

import {images } from "../constants";


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
      name: "Rice",
   
    },
    {
      id: 2,
      name: "Nood",

    },
    {
      id: 3,
      name: "Hot Dogs",
   
    },
    {
      id: 4,
      name: "Salads",
 
    },
    {
      id: 5,
      name: "Burgers",

    },
    {
      id: 6,
      name: "Pizza",

    },
    {
      id: 7,
      name: "Snacks",

    },
    {
      id: 8,
      name: "Sushi",
 
    },
    {
      id: 9,
      name: "Desserts",

    },
    {
      id: 10,
      name: "Drinks",

    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

     const restaurantData = [
       {
         id: 1,
         name: "ByProgrammers Burger",
         rating: 4.8,
         categories: [5, 7],
         priceRating: affordable,
         photo: images.burger_restaurant_1,
         duration: "30 - 45 min",
         location: {
           latitude: 1.5347282806345879,
           longitude: 110.35632207358996,
         },
         courier: {
           avatar: images.avatar_1,
           name: "Amy",
         },
         menu: [
           {
             menuId: 1,
             name: "Crispy Chicken Burger",
             photo: images.crispy_chicken_burger,
             description: "Burger with crispy chicken, cheese and lettuce",
             calories: 200,
             price: 10,
           },
           {
             menuId: 2,
             name: "Crispy Chicken Burger with Honey Mustard",
             photo: images.honey_mustard_chicken_burger,
             description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
             calories: 250,
             price: 15,
           },
           {
             menuId: 3,
             name: "Crispy Baked French Fries",
             photo: images.baked_fries,
             description: "Crispy Baked French Fries",
             calories: 194,
             price: 8,
           },
         ],
       },
       {
         id: 2,
         name: "ByProgrammers Pizza",
         rating: 4.8,
         categories: [2, 4, 6],
         priceRating: expensive,
         photo: images.pizza_restaurant,
         duration: "15 - 20 min",
         location: {
           latitude: 1.556306570595712,
           longitude: 110.35504616746915,
         },
         courier: {
           avatar: images.avatar_2,
           name: "Jackson",
         },
         menu: [
           {
             menuId: 4,
             name: "Hawaiian Pizza",
             photo: images.hawaiian_pizza,
             description: "Canadian bacon, homemade pizza crust, pizza sauce",
             calories: 250,
             price: 15,
           },
           {
             menuId: 5,
             name: "Tomato & Basil Pizza",
             photo: images.pizza,
             description:
               "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
             calories: 250,
             price: 20,
           },
           {
             menuId: 6,
             name: "Tomato Pasta",
             photo: images.tomato_pasta,
             description: "Pasta with fresh tomatoes",
             calories: 100,
             price: 10,
           },
           {
             menuId: 7,
             name: "Mediterranean Chopped Salad ",
             photo: images.pizza,
             description: "Finely chopped lettuce, tomatoes, cucumbers",
             calories: 100,
             price: 10,
           },
         ],
       },
       {
         id: 3,
         name: "ByProgrammers Hotdogs",
         rating: 4.8,
         categories: [3],
         priceRating: expensive,
         photo: images.hot_dog_restaurant,
         duration: "20 - 25 min",
         location: {
           latitude: 1.5238753474714375,
           longitude: 110.34261833833622,
         },
         courier: {
           avatar: images.avatar_3,
           name: "James",
         },
         menu: [
           {
             menuId: 8,
             name: "Chicago Style Hot Dog",
             photo: images.chicago_hot_dog,
             description: "Fresh tomatoes, all beef hot dogs",
             calories: 100,
             price: 20,
           },
         ],
       },
       {
         id: 4,
         name: "ByProgrammers Sushi",
         rating: 4.8,
         categories: [8],
         priceRating: expensive,
         photo: images.japanese_restaurant,
         duration: "10 - 15 min",
         location: {
           latitude: 1.5578068150528928,
           longitude: 110.35482523764315,
         },
         courier: {
           avatar: images.avatar_4,
           name: "Ahmad",
         },
         menu: [
           {
             menuId: 9,
             name: "Sushi sets",
             photo: images.sushi,
             description: "Fresh salmon, sushi rice, fresh juicy avocado",
             calories: 100,
             price: 50,
           },
         ],
       },
       {
         id: 5,
         name: "ByProgrammers Cuisine",
         rating: 4.8,
         categories: [1, 2],
         priceRating: affordable,
         photo: images.noodle_shop,
         duration: "15 - 20 min",
         location: {
           latitude: 1.558050496260768,
           longitude: 110.34743759630511,
         },
         courier: {
           avatar: images.avatar_4,
           name: "Muthu",
         },
         menu: [
           {
             menuId: 10,
             name: "Kolo Mee",
             photo: images.kolo_mee,
             description: "Noodles with char siu",
             calories: 200,
             price: 5,
           },
           {
             menuId: 11,
             name: "Sarawak Laksa",
             photo: images.sarawak_laksa,
             description: "Vermicelli noodles, cooked prawns",
             calories: 300,
             price: 8,
           },
           {
             menuId: 12,
             name: "Nasi Lemak",
             photo: images.nasi_lemak,
             description: "A traditional Malay rice dish",
             calories: 300,
             price: 8,
           },
           {
             menuId: 13,
             name: "Nasi Briyani with Mutton",
             photo: images.nasi_briyani_mutton,
             description: "A traditional Indian rice dish with mutton",
             calories: 300,
             price: 8,
           },
         ],
       },
       {
         id: 6,
         name: "ByProgrammers Dessets",
         rating: 4.9,
         categories: [9, 10],
         priceRating: affordable,
         photo: images.kek_lapis_shop,
         duration: "35 - 40 min",
         location: {
           latitude: 1.5573478487252896,
           longitude: 110.35568783282145,
         },
         courier: {
           avatar: images.avatar_1,
           name: "Jessie",
         },
         menu: [
           {
             menuId: 12,
             name: "Teh C Peng",
             photo: images.teh_c_peng,
             description: "Three Layer Teh C Peng",
             calories: 100,
             price: 2,
           },
           {
             menuId: 13,
             name: "ABC Ice Kacang",
             photo: images.ice_kacang,
             description: "Shaved Ice with red beans",
             calories: 100,
             price: 3,
           },
           {
             menuId: 14,
             name: "Kek Lapis",
             photo: images.kek_lapis,
             description: "Layer cakes",
             calories: 300,
             price: 20,
           },
         ],
       },
     ];

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

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
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
          padding: 5,
     
          backgroundColor: "#fff",
          borderRadius: 10,

        }}
      >
        {/* Image */}
        <View style={{}}>
          <ImageBackground
            source={item.photo}
            resizeMode="cover"
            style={{
              width: 170,
              height: 250,
              borderRadius: 10,
            }}
          ></ImageBackground>
        </View>

        {/* Restaurant Info */}
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
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
