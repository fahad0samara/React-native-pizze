import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker";
import {FontAwesome} from "@expo/vector-icons";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const Account = () => {
  const [promise, setpromise] = useState<any>(null); //  this is the state that will hold the promise

  const [image, setImage] = useState<any>(null); // this is the state that will hold the image
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const holdpromise =
        await ImagePicker.requestMediaLibraryPermissionsAsync(); // this will hold the promise
      setpromise(holdpromise); // this will set the promise to the state
    })();
  }, []);
  // this wen the user enter the screen
  useEffect(() => {
    // setIsLoading
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  const pickImage = async () => {
    setLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (promise === false) {
    return <Text>No access to camera</Text>;
  }
  // set is loading to true when the user enter the screen
  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
          }}
        >
          {
            // profile
          }

          {
            // if ther is no image
          }

          <ImageBackground
            blurRadius={5}
            source={{uri: image}}
            style={{width: "100%", height: "100%", borderRadius: 100}}
          >
            <View
              style={{
                marginHorizontal: 15,
                marginTop: "40%",
                borderRadius: 50,

                height: responsiveHeight(66),
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(7, 0, 0,0.7)",
              }}
            >
              {
                // if ther is no image
              }
              {image === null ? (
                <TouchableOpacity
                  onPress={pickImage}
                  style={{
                    width: 150,
                    height: 100,
                    borderRadius: 50,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{
                      uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png",
                    }}
                    style={{
                      width: 150,
                      height: 150,
                      position: "absolute",
                      top: -60,
                      borderRadius: 200,
                      borderWidth: 5,
                      borderColor: "#eab308",
                    }}
                  />
                  <FontAwesome
                    name="camera"
                    size={24}
                    color="white"
                    style={{position: "absolute", top: 50, left: 50}}
                  />

                  <Text
                    style={{
                      color: "white",
                      fontSize: 20,
                      fontWeight: "bold",
                      position: "absolute",
                      top: 50,
                      left: 80,
                    }}
                  >
                    Add Photo
                  </Text>
                </TouchableOpacity>
              ) : //set the loaded image
              loading ? (
                <TouchableOpacity
                  onPress={pickImage}
                  style={{
                    width: 150,
                    height: 100,
                    borderRadius: 50,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{uri: image}}
                    style={{
                      width: 150,
                      height: 150,
                      position: "absolute",
                      top: "-50%",
                      borderRadius: 200,
                      borderWidth: 5,
                      borderColor: "#eab308",
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <Text>loading...</Text>
              )}

              <View
                style={{
                  width: "80%",

                  marginBottom: "30%",
                }}
              >
                <View
                  style={{
                    marginBottom: -20,
                  }}
                >
                  <Text
                    style={{
                      borderBottomWidth: 3,
                      textAlign: "center",
                      borderBottomColor: "#eab308",
                      marginTop: 10,

                      fontSize: responsiveFontSize(3),
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    fahad al samara
                  </Text>
                </View>

                {
                  // edit profile
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="user" size={24} color="#eab308" />
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Edit Profile
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={24} color="#eab308" />
                </View>
                {
                  // history of orders
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="history" size={24} color="#eab308" />
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      History of orders
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={24} color="#eab308" />
                </View>
                {
                  // about us
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="info" size={24} color="#eab308" />
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      About us
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={24} color="#eab308" />
                </View>
                {
                  // contact us
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="phone" size={24} color="#eab308" />
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Contact us
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={24} color="#eab308" />
                </View>
                {
                  // version
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="info" size={24} color="#eab308" />
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Version
                    </Text>

                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      1.0.0
                    </Text>

                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      (Beta)
                    </Text>
                  </View>
                </View>
                {
                  // logout
                }
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 40,

                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="sign-out" size={24} color="#eab308" />
                    
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: "#fff",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Logout
                    </Text>
                  </View>
                  <FontAwesome name="angle-right" size={24} color="#eab308" />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <ActivityIndicator size="large" color="#eab308" />
        </View>
      )}
    </>
  );
};

export default Account;
