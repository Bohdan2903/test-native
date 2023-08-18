import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import TouchID from 'react-native-touch-id'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from 'react-native-snackbar'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { setUser } from '../store/actions'

const optionalConfigObject = {
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
}
export const Auth = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  useEffect(() => {
    TouchID.isSupported(optionalConfigObject).then((r) => r)
  }, [])

  const authenticate = () => {
    return TouchID.authenticate('', optionalConfigObject)
      .then(async () => {
        Snackbar.show({
          text: 'Authenticated Successfully',
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'OK',
            textColor: 'green',
            onPress: () => console.log('OK Pressed'),
          },
        })
        const token = JSON.stringify(new Date())
        dispatch(
          setUser({
            id: token,
          })
        )
        await AsyncStorage.setItem('token', token)
      })
      .catch(() => {
        !!user && dispatch(setUser(null))
      })
  }

  const handlePress = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(authenticate)
      .catch((error) => {
        console.log(error, 'error')
      })
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btn} onPress={handlePress} underlayColor="#0380BE" activeOpacity={1}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
          }}
        >
          Authenticate
        </Text>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7',
  },
})
