import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../Style.js'

const FormComponent = () => {
  return (
    <View style={styles.header}>
        <TextInput></TextInput>
        <TouchableOpacity style={styles.button}>
            <Text>Bouton</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FormComponent