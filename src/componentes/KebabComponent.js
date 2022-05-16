import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../Style.js'

const KebabComponent = () => {
  return (
    <View>
        <Image source={styles.kebab}/>
        <Text>J'aime les kebabs</Text>
    </View>
  )
}

export default KebabComponent