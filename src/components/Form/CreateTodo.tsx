import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

export const CreateTodoForm = ({ handleSubmit }: { handleSubmit: (text: string) => void }) => {
  const [text, setText] = useState('')
  const onChange = (el: NativeSyntheticEvent<TextInputChangeEventData>) => setText(el.nativeEvent.text)
  return (
    <View>
      <TextInput style={styles.input} onChange={onChange} placeholder={'Enter todo'} />
      <Button color={'green'} title={'Add task'} onPress={() => handleSubmit(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    opacity: 0.8,
    padding: 8,
    fontSize: 16,
  },
})
