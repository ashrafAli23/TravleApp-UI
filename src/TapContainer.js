import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Like from './screens/Like';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tap = createBottomTabNavigator();

const TapNavigator = () => {
  return (
    <Tap.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
      }}>
      <Tap.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tap.Screen
        name="like"
        component={Like}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
          ),
        }}
      />
      <Tap.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />
    </Tap.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default TapNavigator;
