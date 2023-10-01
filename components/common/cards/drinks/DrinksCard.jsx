import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Modal, Button, SafeAreaView, Image} from 'react-native'
import {COLORS, icons, images, SIZES} from '../../../../constants';
import drinksList from '../../../home/menu/catalog'
import styles from '../../../home/menu/drinks.style'

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
        {selectedDrink && (
          <React.Fragment>
            <Image 
              source={selectedDrink.image}
              style = {{width:200, height: 200, alignSelf: 'center'}}
            />
            <Text style={styles.headerTitle}> Ingredients: {selectedDrink?.name} </Text>
            <Text style={styles.header}> {selectedDrink?.ingredients.join(', ')} </Text>
            
            <Button title="Purchase" onPress={closeModal}/>
            <Button title="Close" onPress={closeModal}/>
          </React.Fragment>
        )}
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default DrinksCard;