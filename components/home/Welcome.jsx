import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, 0)}>
          {" "}
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.black, 0)}>
          {" "}
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather
            name={"search"}
            size={24}
            style={styles.searchIcon}
            onPressIn={() => { navigation.navigate("Search") }}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            value=''
            style={styles.searchInput}
            placeholder='What are you looking for'
            onPressIn={() => { navigation.navigate("Search") }}
          />
        </View>


        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name={"camera-outline"}
              style={styles.cameraBtn}
              size={SIZES.xLarge}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
