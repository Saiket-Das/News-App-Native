import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native'


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SingleNews({ item, index }) {


    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
                // transform: [{ scaleY: -1 }],
            }}>
            <Image
                source={{ url: item.urlToImage }}
                style={{ height: '40%', resizeMode: 'cover', width: windowHeight }} />



            {/* NEWS DESCRIPTION  */}
            <View style={{
                ...styles.description,
                backgroundColor: '#282C35'
            }}>
                {/* ------ News Title ------ */}
                <Text style={{ ...styles.newsTitle, color: 'white' }}>
                    {item.title}
                </Text>

                {/* ------ News Content ------ */}
                <Text style={{ ...styles.content, color: 'white' }}>
                    {item.description}
                </Text>

                {/* ------ Author ------ */}
                <Text style={{ ...styles.author, color: 'white' }}>
                    Short by:
                    <Text> {item.author ? item.author : 'Unknown'}</Text>
                </Text>

                {/* ------ Author ------ */}
                <ImageBackground
                    blurRadius={30}
                    style={styles.footer}
                    source={{ uri: item.urlToImage }}>

                    <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                        <Text style={{ fontSize: 15, color: "white" }}>
                            '{item?.content?.slice(0, 45)}...'
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
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
    content: { fontSize: 18, paddingBottom: 10 },
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