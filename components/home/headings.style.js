import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerTitle: {
    fontFamily: "semibold",
    fontSize: SIZES.xLarge - 2
  }
})

export default styles