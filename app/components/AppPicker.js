import React from 'react';
import{View, StyleSheet, TextInput} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from './AppText';

function AppPicker({icon,placeholder, ...otherProps}) {
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
           <AppText style={styles.text}>{placeholder}</AppText>
            <MaterialCommunityIcons
                name="chevron-down"
                size={20}
                color={colors.cardText}
            />
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
    },
    text:{
        flex: 1
    }
})
export default AppPicker;