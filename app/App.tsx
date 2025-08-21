import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Um from './screept/Um';
import Dois from './screept/Dois';

export default function App() {
  return (
    <View style={styles.container}>
      <Dois/>
      <StatusBar hidden/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
