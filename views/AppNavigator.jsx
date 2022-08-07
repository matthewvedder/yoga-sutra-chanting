import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath, TopNavigation, Icon, TopNavigationAction } from '@ui-kitten/components';
import Chapter1 from './Chapter1'

const { Navigator, Screen } = createDrawerNavigator();

const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline'/>
);

let navigate = {}

const MenuAction = () => {
  return (
    <TopNavigationAction onPress={() => navigate.toggleDrawer()} icon={MenuIcon}/>
  )
}

const DrawerContent = ({ navigation, state }) => {
  navigate = navigation
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title='Samādhi Pāda' />
      <DrawerItem title='Sādhana Pāda' />
      <DrawerItem title='Vibhūti Pāda' />
      <DrawerItem title='Kaivalya Pāda' />
      <DrawerItem title='About' />
    </Drawer>
  )
}

const DrawerNavigator = () => (
  <Navigator
    drawerContent={props => <DrawerContent {...props}/>}
    drawerStyle={{ backgroundColor: 'transparent' }}
  >
    <Screen name='Chapter 1' component={Chapter1}/>
    <Screen name='Chapter 2' component={Chapter1}/>
    <Screen name='Chapter 3' component={Chapter1}/>
    <Screen name='Chapter 4' component={Chapter1}/>
    <Screen name='About' component={Chapter1}/>
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TopNavigation
      alignment='center'
      title='Yoga Sūtras of Patanjali'
      accessoryLeft={MenuAction}
    />
    <DrawerNavigator/>
  </NavigationContainer>
);

export default AppNavigator
