import MealItem from './MealItem';
import { FlatList, StyleSheet, View } from 'react-native';

function MealsList({ items }) {
  function renderMealItem({ item }) {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }

    return <MealItem {...mealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});

export default MealsList;
