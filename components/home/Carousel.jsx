import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import fn2 from '../../assets/images/fn2.jpg'
import fn3 from '../../assets/images/fn3.jpg'
import fn4 from '../../assets/images/fn4.jpg'

export default function Carousel() {
  const slides = [fn2, fn3, fn4]


  return (
    <View>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "93%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  )
}
