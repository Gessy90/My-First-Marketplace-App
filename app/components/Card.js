import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subtitle, image}) {
    return (
        <View style={ styles.card}>
            <Image style = {styles.image} source = {image} />
            <View style = {styles.detailsContainer}>
                <AppText  style = {styles.title} numberOfLines={1}>{title}</AppText>
                <AppText  style = {styles.subtitle} numberOfLines={2}>{subtitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.primary,
        marginBottom: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title:{
        color: colors.cardText,
        marginBottom: 7,
        fontWeight: "bold",
    },
    subtitle:{
        color: colors.cardText,
        fontWeight: "bold",
        fontStyle: "italic"
    }
})
export default Card;