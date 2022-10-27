import "react-native-gesture-handler";

import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {useEffect, useRef, useState} from "react";
import {getStorage, ref, uploadBytes} from "firebase/storage"; 
import {GestureHandlerRootView, TextInput} from "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Linking,
} from "react-native";
import {chef} from "../Data/RestaurantData";
import * as ImagePicker from "expo-image-picker";
import {FontAwesome} from "@expo/vector-icons";

import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { auth, db } from "../firebase/Firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";
export default function ADD({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [dataChef, setdataChef] = useState(chef); // data chef from Restaurant
  const [loadingChef, setLoadingChef] = useState(false); // loading
  const [infoList, setInfoList] = useState([]); // list of info
  const [promise, setpromise] = useState<any>(null); //  this is the state that will hold the promise
  const [uri, seturi] = useState<any>(null); // this is the state that will hold the uri
  const [image, setImage] = useState<any>(null); // this is the state that will hold the image
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //    sendEmail
  const sendEmail = () => {
    Linking.openURL(
      `mailto:${email}?subject=Hello&body=Hello ${name} your password is ${password}`
    );
  };
  const user = auth.currentUser;
  // get data from firebase
  // const getData = async () => {
  //   // get data for current user
  //   const db = getFirestore();
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach(doc => {
  //     if (doc.id === user?.uid) {
  //       setInfoList(doc.data());
  //       console.log(doc.data());
  //     }
  //   });
  // };

  // get data from firebase


  //  function to handleLogout with firebase
  const handleLogout = () => {
    auth.signOut();
    navigation.navigate("Sing");
  };
  // fatch
  useEffect(() => {
    setLoadingChef(true);
    setTimeout(() => {
      setLoadingChef(false);
    }, 2000);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [userData, setUserData] = useState(null);
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModalRef2 = useRef(null);
  // responsiveHeight,
  // responsiveWidth,

  const snapPoints = [responsiveScreenHeight(50), responsiveScreenHeight(90)];

  const snapPoints2 = [responsiveScreenHeight(50), responsiveScreenHeight(88)];

  function handlePresentModal() {
    //@ts-ignore
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  function handlePresentModal2() {
    //@ts-ignore
    bottomSheetModalRef2.current?.present();
    setTimeout(() => {
      setIsOpen2(true);
    }, 100);
  }

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



//  edit profile
  //  const getUser = async () => {
  //    await firestore()
  //      .collection("users")
  //      .doc(route.params ? route.params.userId : user.uid)
  //      .get()
  //      .then(documentSnapshot => {
  //        if (documentSnapshot.exists) {
  //          console.log("User Data", documentSnapshot.data());
  //          setUserData(documentSnapshot.data());
  //        }
  //      });
  //  };
  const getUser = async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(doc => {
      if (doc.id === user?.uid) {
        setUserData(doc.data());
        console.log(doc.data(), "doc.data()");
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);


   





  
    
    



  
  

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <>
          {isLoading ? (
            <View
              style={{
                flex: 1,
              }}
            >
              <ImageBackground
                blurRadius={5}
                source={require("../assets/images/Greek.jpg")}
                style={{width: "100%", height: "100%", borderRadius: 100}}
              >
                <View
                  style={{
                    marginHorizontal: 15,
                    marginTop: "40%",
                    borderRadius: 50,

                    height: responsiveScreenHeight(66),
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(7, 0, 0,0.7)",
                  }}
                >
                  {
                    // if ther is no image
                  }
                  <Image
                    style={{
                      width: 150,
                      height: 150,
                      position: "absolute",
                      top: "-25%",
                      borderRadius: 200,
                      borderWidth: 5,
                      borderColor: "#eab308",
                    }}
                    source={{
                      uri: userData
                        ? userData.userImg
                        : "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
                    }}
                  />

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
                        {userData ? userData.firstname : null}{" "}
                        {userData ? userData.phone : null}
                      </Text>

                      
                      

                      

                      
                    </View>

                    {
                      // edit profile
                    }
                    <TouchableOpacity
                      // navigate to EditProfileScreen
                      onPress={() => navigation.navigate("EditProfileScreen")}
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
                      <FontAwesome
                        name="angle-right"
                        size={24}
                        color="#eab308"
                      />
                    </TouchableOpacity>

                    {
                      // about us
                    }
                    <TouchableOpacity
                      onPress={handlePresentModal}
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
                      <FontAwesome
                        name="angle-right"
                        size={24}
                        color="#eab308"
                      />
                    </TouchableOpacity>

                    {
                      // contact us
                    }
                    <TouchableOpacity
                      onPress={handlePresentModal2}
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
                      <FontAwesome
                        name="angle-right"
                        size={24}
                        color="#eab308"
                      />
                    </TouchableOpacity>
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
                    <TouchableOpacity
                      onPress={handleLogout}
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
                        <FontAwesome
                          name="sign-out"
                          size={24}
                          color="#eab308"
                        />

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
                      <FontAwesome
                        name="angle-right"
                        size={24}
                        color="#eab308"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#eab308" />
            </View>
          )}
        </>

        <BottomSheetModal
          ref={bottomSheetModalRef2}
          index={1}
          snapPoints={snapPoints2}
          backgroundStyle={{
            borderColor: "#eab308",

            borderWidth: 2,
            borderRadius: 40,

            backgroundColor: "#000",
          }}
          onDismiss={() => setIsOpen2(false)}
        >
          {
            // border
          }
          <View
            style={{
              width: "20%",
              height: 2,
              marginHorizontal: "40%",
              backgroundColor: "#eab308",
              borderRadius: 10,
              marginTop: 1,
            }}
          ></View>
          {
            // close button
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 2,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#eab308",
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setIsOpen2(false);
                //@ts-ignore
                bottomSheetModalRef2.current?.close();
              }}
            >
              <FontAwesome name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {
            // contact us
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(3),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Contact us
            </Text>
          </View>
          {
            // email
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Email
            </Text>
          </View>
          {
            // email input
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TextInput
              // don't allows user enter  more than 10 characters
              onChangeText={text => {
                if (text.trimStart().length != text.length) {
                  setEmail(text);
                }
              }}
              value={email}
              style={{
                width: "80%",
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 10,
                paddingLeft: 10,
                fontSize: responsiveFontSize(2),
              }}
              placeholder="Email"
              placeholderTextColor="#000"
            />
          </View>
          {
            // subject
          }

          {
            // message
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Message
            </Text>
          </View>
          {
            // message input
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <TextInput
              style={{
                width: "80%",
                height: responsiveScreenHeight(10),
                backgroundColor: "#fff",
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="Message"
              placeholderTextColor="#000"
              value={message}
              onChangeText={text => setMessage(text)}
            />
          </View>
          {
            // send button
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#eab308",
                width: "80%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                sendEmail();
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Send
              </Text>
            </TouchableOpacity>
          </View>

          {
            // border
          }
          <View
            style={{
              width: "20%",
              height: 2,
              marginHorizontal: "40%",
              backgroundColor: "#eab308",
              borderRadius: 10,
              marginTop: 15,
            }}
          ></View>

          {
            // social media
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Social Media
            </Text>
          </View>
          {
            // facebook
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#4267B2",
                width: "80%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Linking.openURL("$");
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          {
            // instagram
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#b74178",
                width: "80%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Linking.openURL("$");
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Instagram
              </Text>
            </TouchableOpacity>
          </View>
          {
            // twitter
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#1da1f2",
                width: "80%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Linking.openURL("$#");
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Twitter
              </Text>
            </TouchableOpacity>
          </View>
          {
            // youtube
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FF0000",
                width: "80%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                Linking.openURL("H");
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                youtube
              </Text>
            </TouchableOpacity>
          </View>

          {
            // border
          }
          <View
            style={{
              width: "20%",
              height: 2,
              marginHorizontal: "40%",
              backgroundColor: "#eab308",
              borderRadius: 10,
              marginTop: 20,
            }}
          ></View>

          {
            // footer
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              All Rights Reserved 2022
            </Text>
          </View>
        </BottomSheetModal>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{
            borderColor: "#eab308",

            borderWidth: 2,
            borderRadius: 40,

            backgroundColor: "#000",
          }}
          onDismiss={() => setIsOpen(false)}
        >
          {
            // border
          }
          <View
            style={{
              width: "20%",
              height: 2,
              marginHorizontal: "40%",
              backgroundColor: "#eab308",
              borderRadius: 10,
              marginTop: 1,
            }}
          ></View>
          {
            // close button
          }
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 2,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#eab308",
                width: 30,
                height: 30,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setIsOpen(false);
                //@ts-ignore
                bottomSheetModalRef.current?.close();
              }}
            >
              <FontAwesome name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {
            // about us
          }
          <Text
            style={{
              fontSize: responsiveFontSize(3),
              marginLeft: 30,
              marginBottom: 10,
              color: "#eab308",
              fontWeight: "bold",
            }}
          >
            Pizza Time :
          </Text>
          <View
            style={{
              marginTop: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                marginHorizontal: 20,
                fontStyle: "italic",
                fontWeight: "bold",

                color: "#fff",
              }}
            >
              PizzaTime has been creating the freshest and best tasting pizza’s
              since 1985. We love exceeding the expectations of our customers by
              providing a fast and affordable service that hands downs just
              can’t be beat. Its taken decades of service to perfect our recipes
              but result is the best pizza Puget Sound.
            </Text>
          </View>
          {
            // info
          }
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {
              // render data for sheaf
            }
            <View>
              {/*  dataChef
          
           id: 1,
                nameicon: "Paul Bocuse.",
                image: images.chef1,
          */}
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: "#eab308",
                  marginBottom: 2,
                  shadowColor: "#000",
                  fontWeight: "bold",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                }}
              >
                Our Chef
              </Text>
              <FlatList
                data={dataChef}
                renderItem={({item}) =>
                  //  loding data
                  loadingChef ? (
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <ActivityIndicator size="large" color="#eab308" />
                    </View>
                  ) : (
                    <View
                      style={{
                        alignItems: "center",
                        marginVertical: 10,
                        marginHorizontal: 8,
                      }}
                    >
                      <Image
                        source={item.photo}
                        style={{
                          borderRadius: 50,
                          width: responsiveWidth(20),
                          height: responsiveScreenHeight(10),
                          resizeMode: "contain",
                        }}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: responsiveFontSize(2),
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </Text>
                      {
                        // rating
                      }
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 5,
                        }}
                      >
                        <FontAwesome
                          name="star"
                          size={responsiveFontSize(2)}
                          color="#eab308"
                        />
                        <Text
                          style={{
                            color: "white",
                            fontSize: responsiveFontSize(2),
                            fontWeight: "bold",
                          }}
                        >
                          {item.rating}
                        </Text>
                      </View>
                    </View>
                  )
                }
                //@ts-ignore
                keyExtractor={
                  item => item.id
                  // item.id
                }
                numColumns={3}
              />
            </View>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
