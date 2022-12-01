import { StyleSheet, Pressable, Alert, Text, View } from 'react-native';

<Pressable
  style={({ pressed }) => [
    {
      backgroundColor: pressed ? 'red' : 'blue',
    },
    estilos.button,
  ]}
  onPress={() => Alert.alert('Button Pressionado!')}>
  <Text style={estilos.buttonText}>Button</Text>
</Pressable>

const estilos = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});