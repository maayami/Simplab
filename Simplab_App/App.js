import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as AuthProvider} from './android/app/src/context/AuthContext';
import {Context as AuthContext} from './android/app/src/context/AuthContext';
import TourMain from './android/app/src/screens/Tour/TourMain';
import Home from './android/app/src/screens/Home/Home';
import router from './android/app/src/screens/Team/router';

const Stack = createStackNavigator();

function App() {
  const {state} = React.useContext(AuthContext);
  console.log(state);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {state.token === null ? (
          <>
            <Stack.Screen name="Auth" component={TourMain} />
          </>
        ) : (
          <Stack.Screen name="router" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
