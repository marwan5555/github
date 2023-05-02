import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Activity from '../screens/Activity';
import Chat from '../screens/Chat';
import Feed from '../screens/Feed';
import Alert from '../screens/Alert';
import { Ionicons } from '@expo/vector-icons';
import TripDetailsScreen from '../screens/TripDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="หน้าหลัก"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />     
          ),
          
        }}
      />
      <Tab.Screen
        name="แชท"
        component={Chat}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="กิจกรรม"
        component={Activity}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ฟีช"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="แจ้งเตือน"
        component={Alert}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
    
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
