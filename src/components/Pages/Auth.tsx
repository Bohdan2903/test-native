import React, { useEffect } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import TouchID from 'react-native-touch-id'
import { setUser } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const optionalConfigObject = {
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: true, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
}
export const Auth = () => {
  const { user } = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  useEffect(() => {
    TouchID.isSupported(optionalConfigObject).then((prop) => Alert.alert(String(prop)))
  }, [])

  const authenticate = () => {
    return TouchID.authenticate('', optionalConfigObject)
      .then(() => {
        Alert.alert('Authenticated Successfully')
        dispatch(
          setUser({
            id: new Date(),
          })
        )
      })
      .catch((error: { message: string }) => {
        Alert.alert(error.message)
        !!user && dispatch(setUser(null))
      })
  }

  const handlePress = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(authenticate)
      .catch((error) => {
        Alert.alert(error.message)
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
