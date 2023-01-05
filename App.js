import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      <Image 
      style={{height: 100, marginBottom: 80}}
      source={require('./../expoCoder/img/giphy.gif')} /> 

      <View style={styles.containerDos}>
      <Text style={styles.welcome}>¡Bienvenido!</Text>
      <Text style={styles.grey}>Este es mi primer proyecto en React Native</Text>

      <Button 
      title="Click para comenzar"
      onPress={() => Alert.alert('Gracias por su visita')}
      color="grey" />

      </View>

      <Text style={styles.footer}>Developed by Alexis Burgos - 2023</Text>
    
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4fc3c',
    alignItems: 'center',
    padding: 45,
       
  },
  containerDos: {

    borderWidth: 6,
    padding: 25,
    marginBottom: 120,
    
    

  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 30, 
    color: 'black',
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,

  },
  grey: {
    fontWeight: 'bold',
    fontSize: 20, 
    color: 'grey',
    marginBottom: 50,
    
  },
  footer: {
    margintop: 10,

  },
 
});




