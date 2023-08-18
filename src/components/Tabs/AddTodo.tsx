import React, { useState } from 'react'
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { globalStyles } from '../styles'
import { Input } from '../Form/Input'
import { setNews } from '../../store/actions'

export const AddTodo = () => {
  const { news } = useSelector(({ news }) => news)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [filePath, setFilePath] = useState<string>('')
  const [date, setDate] = useState<Date | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const chooseFile = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        includeExtra: true,
        selectionLimit: 1,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker')
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage)
        } else {
          if (response?.assets?.[0]?.base64) {
            setFilePath(response.assets[0].base64)
            clearErrors('file')
          } else {
            setError('file', { type: 'manual', message: 'File is too large' })
          }
        }
      }
    )
  }

  const onSubmit = (data: FieldValues) => {
    dispatch(
      setNews([
        ...news,
        {
          ...data,
          id: new Date().toISOString(),
          imagePath: filePath,
          date: date || '',
          anons: data.text,
        },
      ])
    )
    setDate(null)
    setFilePath('')
    reset()
  }
  return (
    <View
      style={{
        ...globalStyles.container,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(233,234,250)',
      }}
    >
      <Text style={{ ...globalStyles.text, color: '#000' }}>Add new article</Text>
      <View style={{ width: '100%', flex: 1 }}>
        <ScrollView>
          <Text>Name</Text>
          <Input name={'name'} control={control} errors={errors} rules={{ required: true }} />
          {errors.name && <Text style={{ ...globalStyles.error }}>This field is required</Text>}
          <Text>Text</Text>
          <Input name={'text'} control={control} errors={errors} rules={{ required: true }} />
          {errors.text && <Text style={{ ...globalStyles.error }}>This field is required</Text>}
          {!!filePath && (
            <Image
              source={{
                uri: `data:image/*;base64,${filePath}`,
              }}
              style={{ width: 100, height: 100, marginBottom: 10 }}
            />
          )}
          <TouchableOpacity onPress={chooseFile} style={{ padding: 10, backgroundColor: '#8b7efd', alignSelf: 'flex-start' }}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
          {errors.file && <Text style={{ ...globalStyles.error }}>{`${errors.file?.message}`}</Text>}

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              marginVertical: 16,
              padding: 10,
              backgroundColor: '#8b7efd',
              alignSelf: 'flex-start',
            }}
          >
            {date ? <Text>{new Date(date).toDateString()}</Text> : <Text>Chose Day</Text>}
          </TouchableOpacity>
          <DatePicker
            date={date || new Date()}
            mode={'date'}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
            modal
            open={open}
          />

          <View
            style={{
              backgroundColor: '#000',
              margin: 24,
            }}
          >
            <TouchableOpacity
              style={{ ...globalStyles.button }}
              onPress={handleSubmit(onSubmit)}
              disabled={!!errors && Object.keys(errors).length > 0}
            >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ marginTop: 'auto', marginBottom: 24 }}>
        <Button color={'black'} title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}
