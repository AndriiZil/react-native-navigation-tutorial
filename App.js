import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
