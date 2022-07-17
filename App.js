import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context from './API/Context';
import InshortTabs from './Components/InshortTabs';




function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: '#282C35' }}>
      <InshortTabs style={styles.tabview}></InshortTabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:,
    marginTop: StatusBar.currentHeight,
  },

  // tabview: {
  //   flex: 1,
  //   padding: 30,
  // }
});



export default () => {
  return <Context>
    <App></App>
  </Context>
}
