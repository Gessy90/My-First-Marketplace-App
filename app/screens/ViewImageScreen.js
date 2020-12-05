import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
        <Image
            resizeMode="contain"
            style={styles.image}
            source= {require('../assets/chair.jpg')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000",
        flex: 1,
    },
    image:{
        width: "100%",
        height: "100%"
    },
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: "#ffebec",
        position: "absolute",
        top: 40,
        left: 30
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        right: 30
    }
})
export default ViewImageScreen;