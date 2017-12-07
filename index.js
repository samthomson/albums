// import a library to help craete a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// render the component to the device
AppRegistry.registerComponent('albums', () => App);
