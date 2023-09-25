import {useState} from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants';
import {ScreenHeaderBtn, SreenHeaderBtn, Welcome, Drinks} from '../components';
import { ColorSpace } from 'react-native-reanimated';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightwhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension = "100%"/>
                    ),
                    headerTitle: "AutoBart"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex:1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome/>
                    <Drinks/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;