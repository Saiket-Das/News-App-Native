import React, { useContext } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'
import { NewsContext } from '../API/Context';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;



export default function SingleNews({ item, index }) {
    const { darkMode } = useContext(NewsContext);

    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
            }}>
            <Image
                source={{ uri: item.urlToImage }}
                style={{ height: '35%', resizeMode: 'cover', width: windowHeight }} />



            {/* NEWS DESCRIPTION  */}
            <View style={{
                ...styles.description,
                backgroundColor: darkMode ? '#282C35' : 'white'
            }}>
                {/* ------ News Title ------ */}
                <Text style={{ ...styles.newsTitle, color: darkMode ? 'white' : 'black' }}>
                    {item.title}
                </Text>

                {/* ------ News Content ------ */}
                <Text style={{ ...styles.content, color: darkMode ? 'white' : 'black' }}>
                    {item.description}
                </Text>

                {/* ------ Author ------ */}
                <Text style={{ ...styles.author, color: darkMode ? 'white' : 'black' }}>
                    Short by:
                    <Text> {item.author ? item.author : 'Unknown'}</Text>
                </Text>

                {/* ------ Read More URL ------ */}
                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}>

                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: darkMode ? 'white' : 'black' }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: darkMode ? 'white' : 'black' }}>
                            Read More
                        </Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    description: {
        padding: 15,
        flex: 1,
    },

    newsTitle: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    author: {
        fontWeight: '600',
    },

    content: {
        fontSize: 18,
        paddingBottom: 10
    },

    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        bottom: 100,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
})