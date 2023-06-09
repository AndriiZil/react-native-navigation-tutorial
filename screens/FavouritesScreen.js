import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
// import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';

function FavouritesScreen() {
  // const favouriteMealCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector(state => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter(meal => favouriteMealIds.includes(meal.id));

  if (!favouriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    )
  }

  return <MealsList items={favouriteMeals} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
});

export default FavouritesScreen;
