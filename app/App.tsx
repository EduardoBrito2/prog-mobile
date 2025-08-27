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
import Nove from './screept/Nove';
import Dez from './screept/Dez';
import Onze from './screept/Onze';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Onze} />
      </Stack.Navigator>
    </NavigationContainer>
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
