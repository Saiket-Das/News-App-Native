import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';



export default function TopNavigation({ index, setIndex }) {

    const { fetchNews, darkMode, setDarkMode } = useContext(NewsContext);

    return (
        <View style={{ ...styles.container, backgroundColor: '#dd0000' }}>


            {/* --------- <DISCOVER and DARKMODE Condtion  */}
            {index === 0 ?
                <TouchableOpacity style={styles.left}
                    onPress={() => setDarkMode(!darkMode)}>
                    <Text style={{ ...styles.text, color: 'gray' }}>
                        <MaterialCommunityIcons
                            name='theme-light-dark'
                            size={24}
                            color='white'
                        />
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <AntDesign name='left' size={24} color='white'></AntDesign>
                    <Text style={{ ...styles.text, color: 'white' }}>Discover</Text>
                </TouchableOpacity >
            }


            {/* --------- HEADER TITLE (ALL NEWS and DISCOVER) Condition  */}
            <Text style={{ ...styles.center, color: 'white', fontWeight: '600' }}>
                {index ? 'All News' : 'Discover'}
            </Text>



            {/* --------- RELOAD and ALL NEWS> Condtion  */}
            {index ?
                <TouchableOpacity style={styles.right}
                    onPress={() => fetchNews('general')}>
                    <Text style={styles.text}>
                        <AntDesign name='reload1' size={24} color='white'>
                        </AntDesign>
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.left}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Text style={{ ...styles.text, color: 'white' }}>
                        All News
                    </Text>
                    <AntDesign name='right' size={24} color='white'>
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

    },

    left: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 80,
    },

    center: {
        borderBottomColor: "white",
        borderRadius: 10,
        fontSize: 20,
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