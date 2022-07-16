import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopNavigation({ index, setIndex }) {
    return (
        <View style={{ ...styles.container, backgroundColor: '#6F8FAF' }}>
            {index === 0 ?
                <TouchableOpacity style={styles.left}>
                    <Text style={{ ...styles.text, color: 'gray' }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color='#007FFF' />
                    </Text>
                </TouchableOpacity>
                :
                <></>

            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,

    },

});