import { StyleSheet, Text } from "react-native";
import { View } from "../components/Themed";

function MovieResults({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <Text>{route.params.movieTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MovieResults;
