import React from 'react'
import { useController } from 'react-hook-form'
import { StyleSheet, TextInput } from 'react-native'

export const Input = ({ name, control, rules, errors }: any) => {
  const { field } = useController({
    control,
    name,
    rules,
  })
  const style = errors?.[name] ? { ...styles.input, ...styles.error } : { ...styles.input }
  return <TextInput value={field.value} onChangeText={field.onChange} onBlur={field.onBlur} style={style} />
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  error: {
    borderColor: '#f8063f',
  },
})
