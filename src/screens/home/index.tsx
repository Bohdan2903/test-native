import React, { useState } from 'react'
import { SvgXml } from 'react-native-svg'
import { FlatList, Text, TouchableOpacity, View, Modal, Alert, ScrollView } from 'react-native'
import { globalStyles } from '../../styles'
import { useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setNews } from '../../store/actions'
import { Header } from '../../components/Header'

import { IconButton, Button } from "@react-native-material/core";

import closeIcon from '../../assets/close.svg'
import plusIcon from '../../assets/plus-circle.svg'

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
            <ScrollView>
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
                                width: '90%',
                                height: 350,
                                overflow: 'scroll',
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'rgba(174,185,253,1)',
                                    flex: 1,
                                    padding: 8,
                                }}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ ...globalStyles.text, color: '#000' }}>Add new article</Text>
                                    <View onTouchStart={() => setVisible(false)}
                                          style={{ marginLeft: 'auto' }}>
                                        <IconButton onPress={() => setVisible(false)}
                                                    icon={<SvgXml xml={String(closeIcon)} width={24} height={24}
                                                                  fill={'black'}/>
                                                    }/>
                                    </View>
                                </View>


                                <View>
                                    <Text>Name</Text>
                                    <Input name={'name'} control={control} errors={errors} rules={{ required: true }}/>
                                    {errors.name && <Text>This field is required</Text>}
                                    <Text>Text</Text>
                                    <Input name={'text'} control={control} errors={errors} rules={{ required: true }}/>
                                    {errors.text && <Text>This field is required</Text>}

                                    <View
                                        style={{ margin: 20 }}
                                    >
                                        <Button title="Submit" onPress={handleSubmit(onSubmit)}
                                                disabled={!!errors && Object.keys(errors).length > 0}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Header/>
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
                        <SvgXml xml={String(plusIcon)} width={40} height={40} fill={'#1c1c1c'}
                                onPress={() => setVisible(true)}/>
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
                                <IconButton onPress={() => handleDeleteNews(item.id)}
                                            icon={<SvgXml xml={String(closeIcon)} width={24} height={24}
                                                          fill={'#1c1c1c'}/>
                                            }/>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View>
                    <View
                        style={{
                            padding: 4,
                        }}
                    >
                        <Button variant={'text'} color={'black'} title="Contacts" onPress={navigateToContact}/>

                        <View
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <IconButton
                                icon={<SvgXml xml={String(closeIcon)} width={24} height={24}
                                              fill={'#1c1c1c'}/>
                                }/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
