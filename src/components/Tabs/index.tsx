import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AddTodo } from './AddTodo'
import { FormStatus } from './FormStatus'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={{ bottom: 'maximum' }}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#5a5a5a',
          tabBarStyle: {
            paddingBottom: 2,
            paddingTop: 5,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: '#74b5ff',
            position: 'absolute',
            height: 50,
          },
          tabBarLabelStyle: {
            padding: 0,
            flex: 1,
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Add ToDo" component={AddTodo} />
        <Tab.Screen name="Form Status" component={FormStatus} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}
