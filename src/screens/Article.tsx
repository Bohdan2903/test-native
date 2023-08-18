import React from 'react'
import { Text, Image, View } from 'react-native'
import { globalStyles } from '../components/styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const Article = ({ route }: NativeStackScreenProps<any>) => {
  return (
    <View style={{ backgroundColor: '#5db9ea', ...globalStyles.main, padding: 16 }}>
      <Text style={globalStyles.title}>{route?.params?.item.name}</Text>
      <Text style={{ color: '#000000', marginVertical: 16, fontSize: 24 }}>{route?.params?.item.text}</Text>
      {route.params?.item.date && (
        <Text style={{ color: '#000000', marginVertical: 16, fontSize: 18 }}>{new Date(route.params.item.date).toDateString()}</Text>
      )}
      {route.params?.item.image && (
        <Image source={{ uri: route.params?.item.image }} style={{ width: 'auto', height: 200, marginVertical: 16 }} />
      )}
      {route.params?.item.imagePath && (
        <Image
          source={{
            uri: `data:image/*;base64,${route.params.item.imagePath}`,
          }}
          style={{ width: 'auto', height: 200, marginVertical: 16 }}
        />
      )}
    </View>
  )
}
