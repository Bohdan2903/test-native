import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Article, Contact, Auth, AddTask } from './screens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUser } from './store/actions'

const Stack = createNativeStackNavigator()
const App = () => {
  const dispatch = useDispatch()

  const { user } = useSelector(({ user }) => user)

  useEffect(() => {
    getData().then((r) => r)
  }, [])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if (value !== null) {
        dispatch(
          setUser({
            id: value,
          })
        )
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">{(props) => <Home {...props} />}</Stack.Screen>
            <Stack.Screen name="AddToDo" options={{ headerShown: false }} component={AddTask} />
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
