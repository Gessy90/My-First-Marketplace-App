import React from 'react';
import{Image, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from "../components/Screen";
import colors from "../config/colors";
import { Formik } from 'formik'

function LoginScreen(props) {

    return (
        <Screen  style={styles.screen}>
            <Image
                style= {styles.logo}
                source = {require("../assets/logo.jpg")}
            />
            <Formik
                initialValues = {{ email: '', password: ''}}
                onSubmit = { values => console.log(values)}
            >
                {({ handleChange, handleSubmit}) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect= {false}
                            placeholder= "Email"
                            keyboardType= "email-address"
                            textContentType="emailAddress"
                            onChangeText={handleChange("email")}
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect= {false}
                            placeholder= "Password"
                            icon="lock"
                            textContentType="password"
                            secureTextEntry={true}
                            onChangeText={handleChange("password")}
                        />
                        <AppButton title="Login" onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
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