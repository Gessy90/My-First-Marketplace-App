import React, {useState} from 'react';
import{Image, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from "../components/Screen";
import colors from "../config/colors";

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen  style={styles.screen}>
            <Image
                style= {styles.logo}
                source = {require("../assets/logo.jpg")}
            />
            <AppTextInput
                icon="email"
                autoCapitalize="none"
                autoCorrect= {false}
                placeholder= "Email"
                keyboardType= "email-address"
                textContentType="emailAddress"
                onChangeText={text => setEmail(text)}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect= {false}
                placeholder= "Password"
                icon="lock"
                textContentType="password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <AppButton title="Login" onPress={() => console.log(email, password)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.secondary,
        padding:10
    },
    logo:{
        width: 300,
        height: 150,
        alignSelf:"center",
        marginTop: 50,
        marginBottom: 20
    }
})
export default LoginScreen;