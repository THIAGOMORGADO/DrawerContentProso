import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/Home';
import products from './pages/Product';
import Cart from './pages/Cart';

const AppDrawer = createDrawerNavigator();
function Routes () {
  return (
    <NavigationContainer>
      <AppDrawer.Navigator 
      initialRouteName="Home"
      headerMode="none"
      drawerStyle={{
        backgroundColor: '#878787',
        width: 200,
        marginTop:90,
        borderTopRightRadius:12,
        borderBottomEndRadius: 12

      }}
      >
        <AppDrawer.Screen  name="Home" component={Home}/>
        <AppDrawer.Screen  name="products" component={products}/>
        <AppDrawer.Screen  name="Cart" component={Cart}/>
      </AppDrawer.Navigator> 
    </NavigationContainer>
  )
}


export default Routes;