import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import Snackbar from 'react-native-snackbar'

import { Input } from '../components/Form/Input'
import { globalStyles } from '../components/styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export const Contact = ({ navigation }: NativeStackScreenProps<any>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = () => {
    Snackbar.show({
      text: 'Form successfully send',
      duration: Snackbar.LENGTH_LONG,
      action: {
        text: 'OK',
        textColor: 'green',
        onPress: () => console.log('OK Pressed'),
      },
    })
    reset()
  }

  return (
    <View style={{ backgroundColor: 'aqua', ...globalStyles.main, paddingVertical: 8 }}>
      <Text style={globalStyles.text}>Contact page</Text>
      <View style={{ flex: 1, backgroundColor: '#fff', marginVertical: 16, padding: 16 }}>
        <Text>Name</Text>
        <Input name={'name'} control={control} errors={errors} rules={{ required: true }} />
        {errors.name && <Text style={{ ...globalStyles.error }}>This field is required</Text>}
        <Text>Text</Text>
        <Input name={'text'} control={control} errors={errors} rules={{ required: true }} />
        {errors.text && <Text style={{ ...globalStyles.error }}>This field is required</Text>}

        <TouchableOpacity
          style={{ ...globalStyles.button, marginTop: 'auto', marginBottom: 8 }}
          onPress={handleSubmit(onSubmit)}
          disabled={!!errors && Object.keys(errors).length > 0}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <Button color={'black'} title="Back" onPress={() => navigation.goBack()} />
    </View>
  )
}
