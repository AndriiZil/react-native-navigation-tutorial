import { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

import MealsDetails from '../components/MealsDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { FavouritesContext } from '../store/context/favourites-context';
import meal from '../models/meal';

function MealDetailScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
          onPress={changeFavouriteStatusHandler}
          icon={ mealIsFavourite ? 'star' : 'star-outline' }
          color='white'
        />
      }
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealsDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer : {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center',
  }
});

export default MealDetailScreen;
