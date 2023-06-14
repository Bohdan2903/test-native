import React from 'react'
import { Button, Text, View, Alert, TouchableOpacity } from 'react-native'
import { useForm } from 'react-hook-form'
import { Input } from '../Form/Input'
import { globalStyles } from '../styles'
import { setNews } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Contact = ({ navigation }: any) => {
  const { news } = useSelector(({ news }) => news)
  const dispatch = useDispatch()
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const onSubmit = (data: any) => {
    dispatch(
      setNews([
        ...news,
        {
          ...data,
          id: new Date().toISOString(),
          anons: data.text,
        },
      ])
    )
    Alert.alert('Form sumbit', `${data.name}-${data.text}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ])
    reset()
  }

  const navigateBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{ backgroundColor: 'aqua', ...globalStyles.main }}>
      <Text style={globalStyles.text}>Contact page</Text>
      <View style={{ backgroundColor: '#fff', marginVertical: 16, padding: 16 }}>
        <Text>Name</Text>
        <Input name={'name'} control={control} errors={errors} rules={{ required: true }} />
        {errors.name && <Text>This field is required</Text>}
        <Text>Text</Text>
        <Input name={'text'} control={control} errors={errors} rules={{ required: true }} />
        {errors.text && <Text>This field is required</Text>}

        <View
          style={{
            backgroundColor: '#000',
            margin: 20,
          }}
        >
          <Button title="Submit" onPress={handleSubmit(onSubmit)} disabled={!!errors && Object.keys(errors).length > 0} />
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: 'black', padding: 20 }} onPress={navigateBack}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> Back </Text>
      </TouchableOpacity>
    </View>
  )
}
