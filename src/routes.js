import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './pages/Login';

import Home from './pages/Home';
import NewTask from './pages/NewTask';

import User from './pages/User';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        resetOnBlur: true,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarLabel: 'Tarefas',
          tabBarIcon: ({color, size}) => (
            <Icon name="format-list-checkbox" color={color} size={size} />
          ),
        }}
      />
      <Stack.Screen
        name="User"
        component={UserRoutes}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Tarefas'}} />
      <Stack.Screen
        name="NewTask"
        component={NewTask}
        options={{title: 'Nova Tarefa'}}
      />
    </Stack.Navigator>
  );
};

const UserRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{title: 'Meu Perfil'}}
      />
    </Stack.Navigator>
  );
};

const SignedIn = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SignedOut = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {SignedIn, SignedOut};
