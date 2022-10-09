import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const AlertaEntrada = () => {
  const createAlert = () =>
    Alert.prompt(
      "Entrada de Código",
      "Digite o Código Recebido por SMS!",
      [
        {
          text: "OK",
          onPress: (code) => Alert.alert("Código Digitado: " + code)
        },
      ],
      'plain-text',
      "",
      "numeric"
    );

  return (
    <View style={styles.container}>
      <View style={{margin: 10}}>
        <Button title={"MOSTRAR ALERTA"} onPress={createAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
});

export default AlertaEntrada;