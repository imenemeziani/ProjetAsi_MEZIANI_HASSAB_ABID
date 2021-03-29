/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import {Route, Switch, NativeRouter} from 'react-router-native';
 import listProduit from './components/ListProduit';
 import ProduitQuantité from './components/ProduitQuantité';
 import listprod2 from './components/listprod2';
 import valider from './components/valider';
 export default class App extends Component {
   render() {
     return (
       <NativeRouter>
         <Switch>
           <Route exact path="/" component={listProduit} />
           <Route exact path="/produit" component={ProduitQuantité} />
           <Route exact path="/produit2" component={listprod2} />
           <Route exact path="/valider" component={valider} />
         </Switch>
       </NativeRouter>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 60,
   },
 });
 