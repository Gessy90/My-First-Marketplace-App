import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import AppText from './AppText';
import colors from "../config/colors";

function PickerItem({item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
        color:colors.cardText
    }
})

export default PickerItem;
