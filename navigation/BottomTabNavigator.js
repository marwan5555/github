import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Activity from '../screens/Activity';
import Chat from '../screens/Chat';
import Feed from '../screens/Feed';
import Alert from '../screens/Alert';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Alert" component={Alert} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
