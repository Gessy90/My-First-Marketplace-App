import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItems';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image  style = {styles.image} source = {require("../assets/shorts.jpg")}/>
            <View style = {styles.detailsContainer}>
                <AppText style = {styles.title}>Shorts for sale</AppText>
                <AppText style = {styles.price}>£20</AppText>
                <View style= {styles.userContainer}>
                    <ListItem
                        image= {require("../assets/avatar.jpg")}
                        title = "Gessica"
                        subtitle = "4 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        // marginTop: 20
    },
    detailsContainer:{
        padding: 20
    },
    title:{
      fontSize: 24,
      fontWeight: "500",
      color: colors.cardText,
      fontWeight: "bold",
    },
    price:{
        color:colors.cardText,
        fontWeight: "bold",
        fontStyle: "italic",
        marginVertical: 10
    },
    userContainer:{
        marginVertical: 20
    }
})
export default ListingDetailsScreen;