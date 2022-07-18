import React, { useContext } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Context, { NewsContext } from './API/Context';
import InshortTabs from './Components/InshortTabs';


function App() {
  const { darkMode } = useContext(NewsContext);

  return (
    <View style={{ ...styles.container, backgroundColor: darkMode ? '#282C35' : 'white' }}>
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
