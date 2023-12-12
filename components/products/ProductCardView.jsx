import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { COLORS } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import fn1 from "../../assets/images/fn1.jpg";
import { useNavigation } from "@react-navigation/native";

export default function ProductCardView() {
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate("ProductData");
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={fn1} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>Product</Text>

          <Text style={styles.supplier}>Product</Text>

          <Text style={styles.price}>4546$</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
