import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './components/Pages/home'
import { Article } from './components/Pages/article'
import { Contact } from './components/Pages/contact'
import { Auth } from './components/Pages/auth'

const Stack = createNativeStackNavigator()
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

            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Contact" options={{ title: 'Contact' }}>
              {(props) => <Contact {...props} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Auth" options={{ title: 'Auth' }} component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
