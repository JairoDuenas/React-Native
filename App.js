import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Curso React Native</Text>
        <Saludar firstname="Pedro" lastname="Sanchez" />
        <Saludar firstname="Andres" lastname="Camacho" />
        {/* <Saludar firstname="Andres" lastname="Camacho" />
      <Saludar firstname="Carlos" lastname="Sanchez" />
      <Saludar firstname="Pedro" lastname="Gonzalez" /> */}
        <LoginForm />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
