import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './../modules/home/Home';
import Feeds from './../modules/feeds/Feeds';
import Chat from './../modules/chat/Chat';
import Notifications from './../modules/notifications/Notifications';
import NewFeeds from './../modules/feeds/NewFeeds';

const Tab = createBottomTabNavigator();

function Layout({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'md-list' : 'md-list';
          } else if (route.name === 'Feeds') {
            iconName = focused ? 'md-search' : 'md-search';
          } else if (route.name === 'NewFeeds') {
            iconName = focused
              ? 'ios-add-circle-outline'
              : 'ios-add-circle-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'md-chatbubbles' : 'md-chatbubbles';
          } else if (route.name === 'Notifications') {
            iconName = focused
              ? 'ios-notifications-outline'
              : 'ios-notifications-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="NewFeeds" component={NewFeeds} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
export default Layout;
