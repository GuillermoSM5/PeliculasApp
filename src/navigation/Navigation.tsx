import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreem from '../Screens/HomeScreen';
import DetailsMovie from '../Screens/DetailsMovie';
import {Movie} from '../interfaces/movieDb';

export type RootStackParams = {
  HomeScreem: undefined;
  DetailsMovie: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreem" component={HomeScreem} />
      <Stack.Screen name="DetailsMovie" component={DetailsMovie} />
    </Stack.Navigator>
  );
};

export default Navigation;
