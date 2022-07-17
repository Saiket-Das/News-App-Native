import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Feather, AntDesign } from '@expo/vector-icons';

export default function TopNavigation({ index, setIndex }) {
    return (
        <View style={{ ...styles.container, backgroundColor: '#87ceeb' }}>
            {index === 0 ?
                <TouchableOpacity style={styles.left}>
                    <Text style={{ ...styles.text, color: 'gray' }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color='#007FFF'
                        />
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <AntDesign name='left' size={24} color='#007FFF'></AntDesign>
                    <Text style={{ ...styles.text, color: 'black' }}>Discover</Text>
                </TouchableOpacity >
            }


            <Text style={{ ...styles.center, color: 'black', fontWeight: '600' }}>
                {index ? 'All News' : 'Discover'}
            </Text>


            {index ?
                <TouchableOpacity style={styles.right}>
                    <Text style={styles.text}>
                        <AntDesign name='reload1' size={24} color='#007FFF'></AntDesign>
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Text style={{ ...styles.text, color: 'black' }}>
                        All News
                    </Text>
                    <AntDesign name='right' size={24} color='#007FFF'>
                    </AntDesign>
                </TouchableOpacity>}

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        // borderBottomColor: 'black',
        // borderBottomWidth: 0.5,
    },

    left: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 80,
    },

    center: {
        // paddingBottom: 6,
        borderBottomColor: "white",
        // borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
    },

    right: {
        alignItems: 'flex-end',
        width: 80,
    },

    text: {
        fontSize: 16,
    }

});