import React from 'react';
import {View} from 'react-native';


export default function App() {
  //the views are laid out VERTICALLY in a column, because that makes more sense in a mobile app. Usually we use our mobile in portrait mode
  return (
  <View
    style = {{
      backgroundColor:"white",
      flex: 1,
      flexDirection: "row", //horizontal axis
      justifyContent: "center", //main/primary axis
      alignItems: "center" //secondary axis
    }}
  >

    <View
      style = {{
        backgroundColor:"dodgerblue",
        width: 100,
        height: 300,
        alignSelf: "flex-start"
      }}
    />

    <View
      style = {{
        backgroundColor:"gold",
        width: 100,
        height: 200,
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


