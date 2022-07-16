import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import InshortTabs from './Components/InshortTabs';




export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: 'lightgray' }}>
      <InshortTabs style={styles.tabview}></InshortTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    marginTop: StatusBar.currentHeight,
  },

  // tabview: {
  //   flex: 1,
  //   padding: 30,
  // }
});
