import React from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"



export default function Home () {
    const navigation = useNavigation()
    return (
        <>
        <Text>ESTO ES HOME</Text>
        <Pressable onPress={() => navigation.navigate('Add')} style={styles.BtnAdd}>
            <Text style={{color: 'skyblue', fontSize: 25}}>Add</Text>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    BtnAdd:{
        alignSelf:'center'
    }
})