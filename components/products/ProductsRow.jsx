import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./productsRow.style";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

export default function ProductsRow() {
  const product = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={(item) => {
          return <ProductCardView />;
        }}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}
