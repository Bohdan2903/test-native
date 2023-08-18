import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import { globalStyles } from '../styles'
import logout from '../../assets/logout.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUser } from '../../store/actions'
import { useDispatch } from 'react-redux'

export const Header = () => {
  const dispatch = useDispatch()

  const handleLogOut = async () => {
    await AsyncStorage.setItem('token', '')
    dispatch(setUser(null))
  }
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.title}>To do list</Text>
      <TouchableOpacity onPress={handleLogOut} style={{ marginLeft: 32 }}>
        <SvgXml xml={String(logout)} width={20} height={20} fill={'#1c1c1c'} />
      </TouchableOpacity>
    </View>
  )
}
