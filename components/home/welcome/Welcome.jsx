// welcome page 

// imports
import { useState } from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
} from 'react-native';
import {useRouter} from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

// definitions
const drinks = ["Browse our menu", "Concoct your drink"]

// welcome page function
const Welcome = () => {
  const router = useRouter();
  const [activeDrinkType, setActiveDrinkType] = useState("Browse our menu")

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Vishnu</Text>
        <Text style={styles.welcomeMessage}>Create your perfect drink</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value = ""
            onChange={() => {}}
            placeholder="What drink are you craving?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style= {styles.tabsContainer}>
        <FlatList
          data = {drinks}
          renderItem = {({item}) => (
            <TouchableOpacity
              style = {styles.tab(activeDrinkType, item)}
              onPress = {() => {
                setActiveDrinkType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style = {styles.tabText(activeDrinkType, item)}> {item} </Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome