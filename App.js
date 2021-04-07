import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserSignUpLogin from './screens/UserSignupLogin';

export default function App() {
  return (
    <View style={styles.container}>
      <UserSignUpLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
