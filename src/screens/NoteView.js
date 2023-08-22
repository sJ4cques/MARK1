import * as React from "react";
import * as RN from "react-native";
import { getFirestore, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore"
import { database } from "../config/fb";


export default function NoteView () {
    

    React.useEffect(() => {
        const collectionRef = collection(database, "products");
        const q = query(collectionRef, orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
         
          console.log("querySnapshot unsusbscribe");
          setProducts(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              isSold: doc.data().isSold,
              createdAt: doc.data().createdAt,
              link: doc.data().link
            }))
          );
        });
        return unsubscribe; 
      }, []);

    
    
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