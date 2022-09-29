import React from 'react';
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
} from "@expo/vector-icons";


export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    EvilIcons,
}
export type IconType = {
  type: typeof Icons;
  activeIcon: string;
  inActiveIcon: string;
  size: number;

  route: string;
  name: string;
  color: string;
  style: any;
};
 


const Icon = ({type, name, color, size = 24, style}: IconType) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        // @ts-ignore
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

export default Icon