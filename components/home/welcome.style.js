import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  welcomeText: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 7,
    marginTop: top,
    color: color,
    marginHorizontal: 12
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginHorizontal: 12
  },
  searchIcon: {
    marginHorizontal: 10,
    color: Colors.gray,
    marginVertical: 10
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small
  },
  searchInput: {
    fontFamily: 'regular',
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary
  }
})

export default styles