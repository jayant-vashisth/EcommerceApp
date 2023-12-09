import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS } from '../../constants'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.black, 0)}>
        {" "}
        Find The Most
      </Text>
      <Text style={styles.welcomeText(COLORS.black)}>
        {" "}
        Luxurious Furniture
      </Text>
    </View>
  )
}
