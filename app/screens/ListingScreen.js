import React from 'react';
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { FlatList, StyleSheet} from 'react-native';

const listings = [
    {
        id: 1,
        title: "Shorts",
        price: 20,
        image: require("../assets/shorts.jpg")

    },
    {
        id: 2,
        title: "Adidas Trainers",
        price: 20,
        image: require("../assets/adidas.jpg")

    },
]
function ListingScreen(props) {
    return (
        <Screen style = {styles.screen}>
            <FlatList
                data={listings}
                //FlatList is looking for a string that's why we are doing this to the keyExtractor
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item})=>
                    <Card
                        title={item.title}
                        subtitle={"£" + item.price}
                        image= {item.image}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.secondary
    }
})
export default ListingScreen;