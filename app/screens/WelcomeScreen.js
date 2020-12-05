import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function WelcomeScreen(props) {

    return (
        <ImageBackground
            style = {styles.background}
            source= {require("../assets/background.jpg")}
        >
            <View style = {styles.logoCont}>
                <Image style = {styles.logo} source = {require("../assets/logo.jpg")}/>
            </View>
            <View style = {styles.loginButton}>
                <Text style = {styles.text}>Login</Text>
            </View>
            <View style = {styles.registerButton}>
                <Text style = {styles.text}>Register</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#f6d4cb",
        alignItems: "center",
        justifyContent: "center",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#ffebec",
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        width: 300,
        height: 150,
    },
    logoCont: {
        position: "absolute",
        alignItems: "center",
        top: 50,
    },
    text:{
        color:"#c1736b",
        fontSize: 20,
        fontFamily: "Futura",
        alignSelf: "center",
    }
});
export default WelcomeScreen;