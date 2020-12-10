import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {

    return (
        <ImageBackground
            style = {styles.background}
            source= {require("../assets/background.jpg")}
        >
            <View style = {styles.logoCont}>
                <Image style = {styles.logo} source = {require("../assets/logo.jpg")}/>
            </View>
            <View style= {styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" color="secondary"/>
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
    buttonContainer: {
        padding: 20,
        width: "100%"
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