import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/Api'
import Carousel from 'react-native-snap-carousel';
import Search from '../Components/Search';



export default function DiscoverScreen() {
    const { setCategory, setSources } = useContext(NewsContext);

    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

    return (
        <View style={styles.discover}>

            {/* ------ Search ------ */}
            <Search></Search>


            {/* ------ Cetagories ------ */}
            <Text style={{ ...styles.subTitle, color: 'white' }}>Categories</Text>

            <Carousel
                layout={'default'}
                data={categories}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                renderItem={({ item, index }) => (

                    <TouchableOpacity style={styles.category}
                        onPress={() => setCategory(item.name)}>

                        <Image source={{ uri: item.pic }}
                            style={styles.categoryImage}>
                        </Image>
                        <Text style={{ ...styles.name, color: 'white' }}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />


            {/* ------ Source of News------ */}
            <Text style={{ ...styles.subTitle, color: 'white', paddingTop: 10 }}>Sources</Text>

            <View style={styles.sources}>
                {
                    sources.map((source) => (
                        <TouchableOpacity
                            onPress={() => setSources(source.id)}
                            key={source.id}
                            style={styles.sourceContainer}>

                            <Image source={{ uri: source.pic }}
                                style={styles.sourceImage}
                            />

                        </TouchableOpacity>
                    ))
                }
            </View>

        </View >
    )
}


const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center'
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        borderRadius: 10
    },

    categoryImage: {
        height: '40%',
        width: '100%',
        resizeMode: 'contain'
    },

    name: {
        fontSize: 14,
        textTransform: 'capitalize'
    },

    category: {
        height: 100,
        margin: -5,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        // paddingVertical: ,
    },

    sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 10,
        backgroundColor: "#cc313d",
    },

    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    },
})