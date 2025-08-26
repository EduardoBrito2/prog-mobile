import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Um from './screept/Um';
import Dois from './screept/Dois';
import Tres from './screept/Tres';
import Quatro from './screept/Quatro';
import Cinco from './screept/Cinco';
import Seis from './screept/Seis';
import Sete from './screept/Sete';
import Oito from './screept/Oito';

export default function App() {
  return (
    <View style={styles.container}>
      <Oito/>
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
