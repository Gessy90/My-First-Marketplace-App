import React, {useState} from 'react';
import{View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from './AppText';
import Screen from "./Screen";
import PickerItem from './PickerItem';

function AppPicker({icon,placeholder,items,PickerItemComponent=PickerItem ,onSelectItem,numberOfColumns=1,selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        //you can't have 2 components Modal and TouchableWithoutFeedback from our function component that's why we use React.Fragment
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                    <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={colors.cardText}
                        style={styles.icon}
                        />
                    )}
                   {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" color={colors.black} onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data= {items}
                        numColumns={numberOfColumns}
                        keyExtractor={ item => item.value.toString()}
                        renderItem={({item}) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
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
    },
    placeholder:{
        fontSize: 15,
        fontFamily: "Futura",
        color: colors.medium,
        flex: 1
    }
})
export default AppPicker;