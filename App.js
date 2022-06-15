import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar firstname="Pedro" lastname={2333} />
      <Saludar firstname="Andres" lastname="Camacho" />
      {/* <Saludar firstname="Andres" lastname="Camacho" />
      <Saludar firstname="Carlos" lastname="Sanchez" />
      <Saludar firstname="Pedro" lastname="Gonzalez" /> */}
      <LoginForm />
    </View>
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
