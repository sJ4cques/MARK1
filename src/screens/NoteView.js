import * as React from "react";
import * as RN from "react-native";
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { database } from "../config/fb";



export default function NoteView () {
    

    const Info = async () => {
        const docRef = doc(database, "products", "H9H6fyRN6RCcQuO7Q1CC" )
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
    }

    
    
    return(
        <RN.View style={styles.productContainer}>
            <RN.Text style={styles.name}>TITULO</RN.Text>
            <RN.Text style={styles.price}>DESCRIPCIÓN</RN.Text>

            <RN.Button title="Información" onPress={Info} /> 
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    }
})