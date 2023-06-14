import React, { useState } from 'react'
import { Button, FlatList, Text, TouchableOpacity, View, Modal, Alert } from 'react-native'
import { globalStyles } from '../styles'
import { useForm } from 'react-hook-form'
import { Input } from '../Form/input'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../assets/close.svg'
import plusIcon from '../../assets/plus-circle.svg'

import { setNews } from '../../store/actions'
import { Header } from '../Header'
import { SvgXml } from 'react-native-svg'

export const Home = ({ navigation }: any) => {
  const [visible, setVisible] = useState<boolean>(false)
  const { news } = useSelector(({ news }: any) => news)
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
    setVisible(false)
    reset()
  }

  const navigateToContact = () => {
    navigation.navigate('Contact')
  }
  const handleDeleteNews = (id: any) => {
    dispatch(setNews(news.filter((el: any) => el.id !== id)))
  }

  return (
    <View style={{ backgroundColor: 'rgba(242,78,248,0.75)', ...globalStyles.main }}>
      <Modal visible={visible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              width: '80%',
              height: 350,
              overflow: 'scroll',
            }}
          >
            <View onTouchStart={() => setVisible(false)} style={{ marginLeft: 'auto', backgroundColor: '#000' }}>
              {/*<Svg>*/}
              {/*  <Use xlinkHref={"#close"} />*/}
              {/*</Svg>*/}
            </View>

            <View
              style={{
                backgroundColor: 'rgba(174,185,253,1)',
                flex: 1,
                padding: 8,
              }}
            >
              <Text style={{ ...globalStyles.text, color: '#000' }}>Add new article</Text>
              <View>
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
            </View>
          </View>
        </View>
      </Modal>
      <Header />
      <View style={globalStyles.container}>
        <View
          style={{
            padding: 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SvgXml xml={String(plusIcon)} width={40} height={40} fill={'#1c1c1c'} onPress={() => setVisible(true)} />
        </View>
        <FlatList
          data={news}
          style={{ marginVertical: 16 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Article', { item })}
              style={{
                marginVertical: 4,
                padding: 8,
                backgroundColor: 'whitesmoke',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text key={item.text}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleDeleteNews(item.id)}>
                <SvgXml xml={String(closeIcon)} width={24} height={24} fill={'#1c1c1c'} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
        <Button color={'black'} title="Contacts" onPress={navigateToContact} />
      </View>
    </View>
  )
}
