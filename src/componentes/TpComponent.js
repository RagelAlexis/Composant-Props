import React from 'react'
import { View, Text, Image, ScrollView, Pressable, TextInput, StyleSheet } from 'react-native';
import styles from '../../Style.js'

const TpComponent = () => {
    const data = require('../../assets/data/tp.json')
  return (
    <ScrollView >
      {data.map((element) => (
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex:1}}>
          <Image source={{ uri: element.img}} style={{ width: '100%', height: 300}}/>
          </View>
          <View style={{flex:1}}>
            <Text style={{ fontSize: 15, fontWeight: 'bold'}}>{element.title}</Text>
            <Text>{element.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default TpComponent