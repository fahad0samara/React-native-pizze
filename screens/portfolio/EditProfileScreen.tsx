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
  Platform,
  Alert,
} from "react-native";
import {useEffect, useRef, useState} from "react";
import Animated from "react-native-reanimated";
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {
  responsiveWidth,
  responsiveScreenHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import {GestureHandlerRootView, TextInput} from "react-native-gesture-handler";
import {FontAwesome} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {auth, db} from "../../firebase/Firebase";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import {collection, getDocs, getFirestore, updateDoc} from "firebase/firestore";

import {storage} from "../../firebase/Firebase";
import {LinearGradient} from "expo-linear-gradient";
const EditProfileScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const bottomSheetModalRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const snapPoints = [responsiveScreenHeight(50), responsiveScreenHeight(90)];
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  function handlePresentModal() {
    //@ts-ignore
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  function handleDismissModal() {
    //@ts-ignore
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }



 
  const choosePhotoFromLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
         console.log(result.uri, "uri");
   
     
    
    }
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        height: responsiveScreenHeight(50),
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 20, marginBottom: 10}}>Upload Photo</Text>
        <Text style={{fontSize: 14, marginBottom: 10}}>
          Choose Your Profile Picture
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <TouchableOpacity >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="camera" size={35} color="#D8D9DB" />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Camera
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {
                // icon camera
              }
              <FontAwesome name="camera" size={40} color="black" />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Gallery
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleDismissModal()}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FF6347",
            fontWeight: "bold",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );

  const getUser = async () => {
    const user = auth.currentUser;
    const userRef = collection(db, "users");
    const snapshot = await getDocs(userRef);
    snapshot.forEach(doc => {
      if (doc.id === user.uid) {
        console.log("====================================");
        console.log(doc.data());
        console.log("====================================");

        setUserData(doc.data());
      }
    });
  };

   /**
    * I'm trying to update the user's profile information in the firestore database.
    */
    const handleUpdate = async () => {
   let imgUrl = await uploadImage();

   if (imgUrl == null && userData.userImg) {
     imgUrl = userData.userImg;
   }
   

    
      const user = auth.currentUser;
      const userRef = collection(db, "users");
        const snapshot = await getDocs(userRef);
      snapshot.forEach(doc => {
        if (doc.id === user.uid) {
          console.log("====================================");
          console.log(doc.data());
          console.log("====================================");
          //@ts-ignore
          updateDoc(doc.ref, {
            //@ts-ignore
            firstname: userData.firstname,
            lastname: userData.lastname,
            about: userData.about,
            phone: userData.phone,
            country: userData.country,
            city: userData.city,
            userImg: imgUrl,
          }).then(() => {
            console.log("User Updated!");
            Alert.alert(
              "Profile Updated!",
              "Your profile has been updated successfully."
            );
          });
        }
      });
    };

  // upload image to firebase storage
  /* Checking if the image is null. If it is null, it will return null. */
    const uploadImage = async () => {
      if (image == null) {
        return null;
      }




 




// Upload file and metadata to the object
  
      
      
      
      
      


// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
/* *|CURSOR_MARCADOR|* */
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
    };


  
    

  useEffect(() => {
    getUser();
  }, []);

  return (
    // edit profile screen
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
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
          {renderContent()}
        </BottomSheetModal>

        <View style={{alignItems: "center"}}>
          <TouchableOpacity
            // handlePresentModal
            onPress={() => handlePresentModal()}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg"
                    : "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
                }}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: "bold"}}>
            {userData ? userData.firstname : ""}
            {userData ? userData.lastname : ""}
          </Text>
          {/* <Text>{user.uid}</Text> */}
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.firstname : ""}
            onChangeText={txt => setUserData({...userData, firstname: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            value={userData ? userData.lastname : ""}
            onChangeText={txt => setUserData({...userData, lastname: txt})}
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#333333" size={20} />

          <TextInput
            multiline
            numberOfLines={3}
            placeholder="About Me"
            placeholderTextColor="#666666"
            value={userData ? userData.about : ""}
            onChangeText={txt => setUserData({...userData, about: txt})}
            autoCorrect={true}
            style={[styles.textInput, {height: 40}]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#333333" size={20} />

          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.phone : ""}
            onChangeText={txt => setUserData({...userData, phone: txt})}
            style={styles.textInput}
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="globe" color="#333333" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.country : ""}
            onChangeText={txt => setUserData({...userData, country: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="map-marker" color="#333333" size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.city : ""}
            onChangeText={txt => setUserData({...userData, city: txt})}
            style={styles.textInput}
          />
        </View>
        {
          // handleUpdate
        }
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => handleUpdate()}
        >
          <Text style={styles.panelButtonTitle}>Update</Text>
        </TouchableOpacity>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
export default EditProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    width: "100%",
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#2e64e5",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#333333",
  },
});

