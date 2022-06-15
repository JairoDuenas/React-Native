import React from "react";
import { Text } from "react-native";

export default function Saludar(props) {
  const { firstname, lastname } = props;

  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.defaultProps = {
  firstname: "Carlos",
  lastname: "Suarez",
};
