import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Contact, Auth, Article } from './screens'
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
    );
}
const ContactScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Contacts</Text>
        </View>
    );
}


const SettingsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
        </View>
    );
}


const App = () => {
    const { user } = useSelector(({ user }: any) => user)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" options={{ title: 'Home' }}>
                            {(props) => <Home {...props} />}
                        </Stack.Screen>

                        <Stack.Screen name="Article" component={Article}/>
                        <Stack.Screen name="Contact" options={{ title: 'Contact' }}>
                            {(props) => <Contact {...props} />}
                        </Stack.Screen>
                        <Tab.Navigator>
                            <Tab.Screen name="Home" component={HomeScreen}/>
                            <Tab.Screen name="Contacts" component={ContactScreen}/>
                            <Tab.Screen name="Settings" component={SettingsScreen}/>
                        </Tab.Navigator>
                    </>
                ) : (
                    <Stack.Screen name="Auth" options={{ title: 'Auth' }} component={Auth}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
