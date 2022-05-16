import React from 'react'
import { View, Text, Stylesheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import styles from './Style.js'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  )
}

export default App