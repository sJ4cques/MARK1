import React from "react"
import { Text, View, StyleSheet } from "react-native"






export default function Add () {
    return (
        <View style={styles.container}>
            <Text>ESTO ES ADD</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})