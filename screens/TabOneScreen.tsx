import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "../components/Themed";
import {RootTabScreenProps} from "../types";
import {FontAwesome} from "@expo/vector-icons";
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
    
  }, [])

    


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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
