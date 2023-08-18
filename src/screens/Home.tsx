import React from 'react'
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../components/styles'
import { useDispatch, useSelector } from 'react-redux'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Header } from '../components'
import { SvgXml } from 'react-native-svg'
import { setNews } from '../store/actions'
import closeIcon from '../assets/close.svg'

export const Home = ({ navigation }: NativeStackScreenProps<any>) => {
  const { news } = useSelector(({ news }) => news)
  const dispatch = useDispatch()

  const navigateToContact = () => {
    navigation.navigate('Contact')
  }
  const addNewTask = () => {
    navigation.navigate('AddToDo')
  }
  const handleDeleteNews = (id: any) => {
    dispatch(setNews(news.filter((el: any) => el.id !== id)))
  }

  return (
    <View style={{ backgroundColor: 'rgb(255,255,255)', ...globalStyles.main }}>
      <Header />
      <View style={{ ...globalStyles.container }}>
        <FlatList
          data={news}
          style={{ marginVertical: 24 }}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                backgroundColor: '#fff',
                elevation: 5,
                marginVertical: 8,
                padding: 4,
                shadowOpacity: 0.3,
                shadowRadius: 1,
                shadowColor: '#000',
                shadowOffset: { height: 2, width: 0 },
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate('Article', { item })}
                style={{
                  marginVertical: 4,
                  padding: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text key={item.text}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleDeleteNews(item.id)}>
                  <SvgXml xml={String(closeIcon)} width={20} height={20} fill={'#1c1c1c'} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Button color={'black'} title="Contacts" onPress={navigateToContact} />
          <Button color={'blue'} title="Add Task" onPress={addNewTask} />
        </View>
      </View>
    </View>
  )
}
