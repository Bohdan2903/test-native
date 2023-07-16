import React from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Snackbar from 'react-native-snackbar';
import TouchID from 'react-native-touch-id'
import { setUser } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from "@react-native-material/core";


const optionalConfigObject = {
    title: 'Authentication required', // Android
    imageColor: '#e6000f', // Android
    imageErrorColor: '#e6000f', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel',
    fallbackLabel: '', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: true, // if true is passed, itwill allow isSupported to return an error if the device is not enrolled in touch id/face id etc. Otherwise, it will just tell you what method is supported, even if the user is not enrolled.  (default false)
}
export const Auth = () => {
    const { user } = useSelector(({ user }) => user)
    const dispatch = useDispatch()

    const getBiometrySensor = async () => {
        try {
            const biometryType = await TouchID.isSupported(optionalConfigObject)
            switch (biometryType) {
                case 'FaceID':
                    return 'Face ID'
                case 'TouchID':
                    return 'Touch ID'
                default:
                    return 'Fingerprint'
            }
        } catch (e) {
            return Alert.alert(String(e))
        }
    }
    const authenticate = async () => {
        const biometryType = await getBiometrySensor()
        if (biometryType) {
            const success = await TouchID.authenticate(biometryType, optionalConfigObject)
            if (success) {
                Snackbar.show({
                    text: 'Authenticated',
                    duration: 3,
                    backgroundColor: 'green',
                });
                dispatch(
                    setUser({
                        id: new Date(),
                    })
                )
            } else {
                Snackbar.show({
                    text: 'Error',
                    duration: 3,
                    backgroundColor: 'red',
                });
                if (!!user) {
                    dispatch(setUser(null))
                }

            }
        }
    }

    return (
        <View style={styles.container}>
            <Button style={styles.btn} uppercase={false} onPress={authenticate} title={'Authenticate'}/>
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
