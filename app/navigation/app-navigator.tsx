import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux'

import { StoreRef } from '@store'

import {
  WorkerProfileScreen,
  WorkerJobMatchesScreen,
  JobDetailsScreen
} from '@screens'
import { styles } from './app-navigator.styles'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {

  StoreRef.dispatch = useDispatch()

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <StatusBar barStyle={'light-content'}/>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'WorkerProfileScreen'} component={WorkerProfileScreen} />
          <Stack.Screen name={'WorkerJobMatchesScreen'} component={WorkerJobMatchesScreen} />
          <Stack.Screen name={'JobDetailsScreen'} component={JobDetailsScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  )

}
