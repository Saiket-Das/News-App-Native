import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { NewsContext } from '../API/Context';
import { categories, sources } from '../API/Api'
import Carousel from 'react-native-snap-carousel';



export default function DiscoverScreen() {
    const { setCategory } = useContext(NewsContext);

    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

    return (
        <View style={styles.discover}>

            {/* ------ Search ------ */}


            {/* ------ Cetagories ------ */}
            <Text style={{ ...styles.subtitle, color: 'white' }}>Cetagoreis</Text>

            <Carousel
                layout={'default'}
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.category}>
                        <Image source={{ uri: item.pic }}
                            style={styles.categoryImage}>
                        </Image>
                        <Text style={{ ...styles.name, color: 'white' }}>{item.name}</Text>
                    </TouchableOpacity>
                )
                }
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
            />
        </View >
    )
}


const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center'
    },

    subtitle: {
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
    }
})