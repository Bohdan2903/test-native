import React from 'react'
import { Text, Image, View } from 'react-native'
import { globalStyles } from '../../styles'

export const Article = ({ route }: any) => {
    console.log(route.params.item, 'route.params.item')
    return (
        <View style={{ backgroundColor: '#bcff96', ...globalStyles.main }}>
            <Text style={globalStyles.title}>{route.params.item.name}</Text>
            <Text style={{ color: '#7f95e7', marginVertical: 16, fontSize: 18 }}>{route.params.item.text}</Text>
            {route.params.item.image && <Image source={{ uri: route.params.item.image }} style={{ width: 'auto', height: 200 }} />}
        </View>
    )
}
