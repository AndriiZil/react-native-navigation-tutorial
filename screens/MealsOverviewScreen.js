import { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;
