import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Modal, Button, SafeAreaView} from 'react-native'
import {COLORS, icons, images, SIZES} from '../../../../constants';
import drinksList from '../../../home/menu/catalog'
import styles from './drinkscard.style'

const DrinksCard = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDrinkPress = (drink) => {
    setSelectedDrink(drink);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View>
      {drinksList.map((drink, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleDrinkPress(drink)}
          style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        >
          <Text>{drink.name}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
          <React.Fragment>
            <Text> Ingredients: {selectedDrink?.name} </Text>
            {selectedDrink && (
              <Text> {selectedDrink?.ingredients.join(', ')} </Text>
            )}
            <Button title="Close" onPress={closeModal}/>
          </React.Fragment>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default DrinksCard;