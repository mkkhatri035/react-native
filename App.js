import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>    
      <Text>Hello world!</Text>      
    </SafeAreaView>
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
