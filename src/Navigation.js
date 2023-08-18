import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import Add from './screens/Add'
import NoteView from "./screens/NoteView";

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Add" component={Add}
                options={() => ({
                    headerTintColor: 'skyblue',
                    headerBackTitleVisible: false,
                    headerTitle: 'Back',
                    presentation: 'modal' 
                  })}
            />
            <Stack.Screen name="NoteView" component={NoteView} 
                options={() => ({
                    headerTintColor: 'skyblue',
                    headerBackTitleVisible: false,
                    headerTitle: 'Back', 
                  })}
            />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}