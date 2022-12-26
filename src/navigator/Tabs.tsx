import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { TabList } from './TabList';
import { TabSearchScreen } from './TabSearch';

const Tab = createBottomTabNavigator();




export const Tabs = () =>  {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white', 
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856d6', 
        tabBarLabelStyle: {
          marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.92)',
          borderWidth: 0, 
          elevation: 0, 
          height: (Platform.OS === 'ios') ? 80 : 60
        }
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={TabList} 
        options={{
          tabBarLabel: 'Listado', 
          tabBarIcon: ({color}) => (
            <Icon 
              name= 'list-outline'
              color={ color }  
              size={25} 
            />
          )
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={TabSearchScreen}
        options={{
          tabBarLabel: 'Búsqueda', 
          tabBarIcon: ({color}) => (
            <Icon 
              name= 'search-outline'
              color={ color }  
              size={25} 
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}