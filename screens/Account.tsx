import { View, Text, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons';

const Account = () => {
  const [promise, setpromise] = useState<any>(null); //  this is the state that will hold the promise
  const [image, setImage] = useState<any>(null); // this is the state that will hold the image

  useEffect(() => {
  
    (async () => {

      const holdpromise =
        await ImagePicker.requestMediaLibraryPermissionsAsync(); // this will hold the promise
      setpromise(holdpromise); // this will set the promise to the state
      
   
    })();
  }, []);




  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (promise === false) {
    return <Text>No access to camera</Text>;
  
    
  }


  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      {
        // profile
      }
      <TouchableOpacity onPress={pickImage}>
        {
          image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          ) : (
            <FontAwesome name="user-circle" size={200} color="black" />
          )

        }
      



      </TouchableOpacity>
  
    </View>
  );
};

export default Account;
