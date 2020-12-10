import React from 'react';
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList, StyleSheet, View } from 'react-native';
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon:{
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon:{
            name: "email",
            backgroundColor: colors.primary
        }
    },

]
function AccountScreen(props) {
    return (
        <Screen style = {styles.screen}>
            <View style = {styles.container}>
                <ListItem
                    title="Gessica S"
                    subTitle="gessica@hello.com"
                    image={require("../assets/avatar.jpg")}
                />
            </View>
            <View style = {styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={ menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({item})=>
                        <ListItem
                            title={item.title}
                            IconComponent = {
                                <Icon name ={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }

                        />
                    }
                />
            </View>
            <ListItem
                title= "Log Out"
                IconComponent = {
                    <Icon name ="logout" backgroundColor="#c97c7b"/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
       marginVertical: 20
    },
    screen:{
        backgroundColor: colors.secondary
    }
})
export default AccountScreen;
