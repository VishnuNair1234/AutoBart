import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './drinks.style'
import {useRouter} from 'expo-router'
import {COLORS, SIZES} from '../../../constants'
import DrinksCard from '../../common/cards/drinks/DrinksCard'
import drinksList from './catalog'

const Drinks = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style = {styles.headerTitle}>Our Specialties</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data= {drinksList}
            renderItem = {(item) => (
              <TouchableOpacity>
                <DrinksCard
                  item={item}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item?.drink_id}
            contentContainerStyle={{ columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Drinks