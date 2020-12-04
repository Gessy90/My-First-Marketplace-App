import React from 'react';
import {View} from 'react-native';


export default function App() {
  //if items overflow across the main axis, one or more items get shrunk so that others can fit on the screen and that's why we use flex-wrap + alignContent
  //alignItems determines the alignment of items within each line
  //alignContent determines the alignment of the entire CONTENT!!!! (this only works with wrapping)
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
        height: 300,
      }}
    />

    <View
      style = {{
        backgroundColor:"gold",
        width: 100,
        height: 100,
      }}
    />

    <View
      style = {{
        backgroundColor:"tomato",
        width: 100,
        height: 100,
      }}
    />

    <View
      style = {{
        backgroundColor:"grey",
        width: 100,
        height: 100,
      }}
    />

    <View
      style = {{
        backgroundColor:"green",
        width: 100,
        height: 100,
      }}
    />
  </View>
  );
}


