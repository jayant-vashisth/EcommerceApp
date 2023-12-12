import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./productData.style";
import fn1 from "../assets/images/fn1.jpg";
import {
  Feather,
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

export default function ProductData({ navigation }) {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            () => {
              navigation.goBack();
            };
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image source={fn1} style={styles.image} />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>660.78$</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons key={index} name="star" size={24} color="gold" />
              );
            })}
          </View>

          <View style={styles.ratingCount}>
            <TouchableOpacity
              onPress={() => {
                count < 5 ? setCount(count + 1) : null;
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count}</Text>
            <TouchableOpacity
              onPress={() => {
                count > 0 ? setCount(count - 1) : null;
              }}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            temporibus accusantium odit soluta quasi quos, esse repellendus
            laudantium autem saepe molestiae harum? Consequatur omnis veniam
            distinctio numquam ab neque dolor.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>Jaipur</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
