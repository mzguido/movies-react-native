import { StyleSheet, TextInput, Image, Pressable } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { SetStateAction, useState } from "react";

let colors = Colors.light;

export default function MovieSearch({ navigation }: any) {
  const [search, setSearch] = useState("");

  const handleSearchPress = () => {
    console.log(search);
    navigation.navigate("Results", { movieTitle: search });
  };
  const handleClearPress = () => {
    setSearch(" ");
    textInput?.clear();
  };

  let textInput: TextInput | null = null;

  return (
    <View style={styles.container}>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,4,0.1)" /> */}
      <View style={styles.search}>
        <Text style={styles.title}>Buscar pelicula</Text>
        <TextInput
          ref={(input) => {
            textInput = input;
          }}
          style={styles.input}
          onChangeText={setSearch}
          placeholder="Ingresa el nombre de una pelicula"
        ></TextInput>

        <View style={styles.searchButtons}>
          <Pressable style={styles.searchButton} onPress={handleSearchPress}>
            <Text style={styles.text}>Buscar</Text>
          </Pressable>

          <Pressable style={styles.clearButton} onPress={handleClearPress}>
            <Text style={styles.text}>Limpiar</Text>
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.image}
        source={require("../assets/images/chairs.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  searchButtons: {
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    justifyContent: "space-between",
  },
  searchButton: {
    width: "48%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  clearButton: {
    width: "48%",
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "80%",
    height: 45,
    backgroundColor: colors.bgDarker,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
