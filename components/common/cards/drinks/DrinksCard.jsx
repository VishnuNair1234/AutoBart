import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import drinksList from '../../../home/menu/catalog'
import styles from './drinkscard.style'

const DrinksCard = () => {
  const handleDrinkPress = (drinkName) => {
    console.log(`Selected Drink: ${drinkName}`);
  };

  return (
    <View>
      {drinksList.map((drink, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleDrinkPress(drink.name)}
          style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        >
          <Text>{drink.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DrinksCard;