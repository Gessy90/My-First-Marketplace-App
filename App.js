import React from 'react';
import {View} from 'react-native';


export default function App() {
//in react native all components by deafult have their position set to relative.
//if I change the position to absolute, I can move a component relative to its parents
  return (
  <View
    style = {{
      backgroundColor:"white",
      flex: 1,
      flexDirection: "row", //horizontal axis
      justifyContent: "center", //main/primary axis
      alignItems: "center",
      alignContent: "center", //secondary axis
      flexWrap: "wrap"
    }}
  >

    <View
      style = {{
        backgroundColor:"dodgerblue",
        width: 100,
        height: 100,
      }}
    />

    <View
      style = {{
        backgroundColor:"gold",
        width: 100,
        height: 100,
        top: 20,
        left: 20,
        position: "absolute"
      }}
    />

    <View
      style = {{
        backgroundColor:"tomato",
        width: 100,
        height: 100,
      }}
    />

  </View>
  );
}


