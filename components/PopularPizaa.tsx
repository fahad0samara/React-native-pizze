import {FontAwesome} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import * as Animatable from "react-native-animatable";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const renderItemm = ({ item }: any) => ((


 
    <TouchableOpacity
        style={{
            padding: responsiveWidth(3),
     
        }}
    >
        {/* Image */}
      
        <Image
            source={item.photo}
            style={{
                width: responsiveWidth(40),
                height: responsiveHeight(30),



            

               

              
         
                
            }}

         
        
        />
        </TouchableOpacity>
  
));



const styles = StyleSheet.create({

});
