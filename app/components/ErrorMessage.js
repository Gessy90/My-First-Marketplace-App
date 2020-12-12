import React from 'react';
import{StyleSheet} from 'react-native';
import AppText from './AppText';

function ErrorMessage({error, visible}) {
    //if visible is false or we don't have an error return null
    if(!error || !visible) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error:{
        color: "red"
    }
})
export default ErrorMessage;