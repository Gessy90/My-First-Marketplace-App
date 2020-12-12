import React from 'react';
import{Image, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from "../components/Screen";
import colors from "../config/colors";
import { Formik } from 'formik';
import * as Yup from "yup";
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';

//using Yup for validations so that we can validate the email address and the password
//I've set up the password to have at least 5 characters
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });

function LoginScreen(props){
    return (
        <Screen  style={styles.screen}>
            <Image
                style= {styles.logo}
                source = {require("../assets/logo.jpg")}
            />
            <Formik
                initialValues = {{ email: '', password: ''}}
                onSubmit = { values => console.log(values)}
                validationSchema = {validationSchema}
            >
                {() => (
                    <>
                        <AppFormField
                            name="email"
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect= {false}
                            placeholder= "Email"
                            keyboardType= "email-address"
                            textContentType="emailAddress"
                        />
                        <AppFormField
                            name="password"
                            autoCapitalize="none"
                            autoCorrect= {false}
                            placeholder= "Password"
                            icon="lock"
                            textContentType="password"
                            secureTextEntry={true}
                        />
                        <SubmitButton title="Login" />
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