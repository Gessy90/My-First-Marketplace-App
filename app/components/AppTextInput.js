import React from 'react';
import{View, StyleSheet, TextInput} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.cardText}
                style={styles.icon}
                />
            )}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.primary,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    textInput:{
        fontSize: 15,
        fontFamily: "Futura",
        color: colors.cardText
    },
    icon:{
        marginRight: 10
    }
})
export default AppTextInput;