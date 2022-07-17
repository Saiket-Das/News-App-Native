import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

export default function SingleNews({ item, index }) {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;


    return (
        <View style={styles.bottom}>
            <Text style={styles.newsTitle}>{item.title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    bottom: {
        // height: windowHeight,
        // width: windowWidth,
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        // padding: 20,
        // margin: 10,
    },
    newsTitle: {
        fontSize: 20,
    },
})