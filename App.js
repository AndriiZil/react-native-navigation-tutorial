import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

import FavouritesContainerProvider from './store/context/favourites-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: { backgroundColor: '#351401' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#b28e76'
    }}>
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' color={color} size={size}/>
          )
      }} />
      <Drawer.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' color={color} size={size}/>
          )
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavouritesContainerProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            cardStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false
              }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContainerProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
