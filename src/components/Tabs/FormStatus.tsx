import { Button, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../styles'

export const FormStatus = () => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        ...globalStyles.container,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(233,234,250)',
      }}
    >
      <Text style={{ ...globalStyles.text, color: '#000' }}>form status</Text>
      <View style={{ marginTop: 'auto', marginBottom: 24 }}>
        <Button color={'black'} title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}
