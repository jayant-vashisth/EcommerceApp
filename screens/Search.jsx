import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { SIZES, COLORS } from '../constants'

export default function Search() {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name={"camera-outline"}
            size={SIZES.xLarge}
            style={styles.searchIcon}
            onPressIn={() => { navigation.navigate("Search") }}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            value=''
            style={styles.searchInput}
            placeholder='What are you looking for'
            onPressIn={() => {  }}
          />
        </View>


        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather
              name={"search"}
              size={24}
              style={styles.cameraBtn}

              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
