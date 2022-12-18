import React from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath, TopNavigation, Icon, TopNavigationAction } from '@ui-kitten/components';
import Chapter1 from './Chapter1'
import Chapter2 from './Chapter2'
import Chapter3 from './Chapter3'
import Chapter4 from './Chapter4'
import About from './About'

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
      <DrawerItem title='Samādhi Pādaḥ' />
      <DrawerItem title='Sādhana Pādaḥ' />
      <DrawerItem title='Vibhūti Pādaḥ' />
      <DrawerItem title='Kaivalya Pādaḥ' />
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
    <Screen name='Chapter 2' component={Chapter2}/>
    <Screen name='Chapter 3' component={Chapter3}/>
    <Screen name='Chapter 4' component={Chapter4}/>
    <Screen name='About' component={About}/>
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
