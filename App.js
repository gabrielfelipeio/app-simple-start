import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MyComponent from './MyComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>My App!</Text>

      <ScrollView>
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
        <MyComponent />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  title: {
    color: '#fff',
  },
});
