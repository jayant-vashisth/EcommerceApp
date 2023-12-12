import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import Welcome from '../components/home/Welcome'
import Carousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductsRow from '../components/products/ProductsRow'



export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons
            name={"location-outline"}
            style={styles.location}
          />
          <Text>Delhi, India</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto
                name='shopping-bag'
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings/>
        <ProductsRow/>
      </ScrollView>
    </SafeAreaView>
  )
}
