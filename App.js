import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const nome = "Criado por Rodrigo.";

  return (
    <View style={styles.container}>
      <Text style={{color:"blue",fontSize: 25}}>Olá, Mundo!</Text>
      <Text>Logo React Native.</Text>
      <StatusBar style="auto" />

    <Image 
    source={{uri:"https://wallpapercave.com/wp/wp5542560.png"}}
    style ={{width: 300, height: 250}}
    />
    <Text style= {{fontSize: 20}}> {nome} </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
