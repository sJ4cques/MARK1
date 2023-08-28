import * as React from "react"
import * as RN from "react-native"
import { getFirestore, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore"
import { database } from "../config/fb"


export default function NoteView () {
    

    
    
    return(
        <RN.View style={styles.productContainer}>
            <RN.Text style={styles.name}>TITULO</RN.Text>
            <RN.Text style={styles.price}>DESCRIPCIÓN</RN.Text>

            <RN.Button title="Información" /> 
        </RN.View>
    )

}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray'
    }
})