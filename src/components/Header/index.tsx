import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../styles'

export const Header = () => {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.title}>To do list</Text>
    </View>
  )
}
