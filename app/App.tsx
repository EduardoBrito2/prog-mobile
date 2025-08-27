import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
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
import CepScreen from './Cep/screens/CepScreen';
import { CepProvider } from './Cep/context/CepContext';
import HistoryScreen from './Cep/screens/HistoryScreen';

export default function App() {
  const Drawer = createDrawerNavigator();

  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator
  //       initialRouteName="exercicio 1"
  //     >
  //       <Drawer.Screen
  //         name="exercicio 1"
  //         component={Um}
  //         options={{
  //           drawerIcon: () => <Ionicons name="home" size={24} color="black" />, // Ícone para o exercício 1
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 2"
  //         component={Dois}
  //         options={{
  //           drawerIcon: () => <Ionicons name="document-text" size={24} color="black" />, // Ícone para o exercício 2
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 3"
  //         component={Tres}
  //         options={{
  //           drawerIcon: () => <Ionicons name="people" size={24} color="black" />, // Ícone para o exercício 3
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 4"
  //         component={Quatro}
  //         options={{
  //           drawerIcon: () => <Ionicons name="bulb" size={24} color="black" />, // Ícone para o exercício 4
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 5"
  //         component={Cinco}
  //         options={{
  //           drawerIcon: () => <Ionicons name="cog" size={24} color="black" />, // Ícone para o exercício 5
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 6"
  //         component={Seis}
  //         options={{
  //           drawerIcon: () => <Ionicons name="hammer" size={24} color="black" />, // Ícone para o exercício 6
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 7"
  //         component={Sete}
  //         options={{
  //           drawerIcon: () => <Ionicons name="rocket" size={24} color="black" />, // Ícone para o exercício 7
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 8"
  //         component={Oito}
  //         options={{
  //           drawerIcon: () => <Ionicons name="heart" size={24} color="black" />, // Ícone para o exercício 8
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 9"
  //         component={Nove}
  //         options={{
  //           drawerIcon: () => <Ionicons name="star" size={24} color="black" />, // Ícone para o exercício 9
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="exercicio 10"
  //         component={Dez}
  //         options={{
  //           drawerIcon: () => <Ionicons name="school" size={24} color="black" />, // Ícone para o exercício 10
  //         }}
  //       />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
  return(
    <CepProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Consulta CEP">
          <Drawer.Screen name="Consulta CEP" component={CepScreen} />
          <Drawer.Screen name="Histórico CEP" component={HistoryScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CepProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
