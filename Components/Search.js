import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from "@expo/vector-icons";
import SingleNews from './SingleNews';



export default function Search() {

    const { news: { articles }, darkMode } = useContext(NewsContext)

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();


    const handleSearch = (text) => {
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(articles.filter((query) => query.title.includes(text)));
    }

    const handleModal = (singleSearchResult) => {
        setModalVisible(true);
        setCurrentNews(singleSearchResult);
    }



    return (
        <View style={{ width: '100%', position: 'relative' }}>

            <TextInput style={{
                ...styles.searchText, backgroundColor: '#e4e4e4', color: 'black'
            }}
                onChangeText={(text) => handleSearch(text)}
                placeholder='Search for news'
                placeholderTextColor='black'
            />


            <View style={styles.searchResults}>
                {searchResults.slice(0, 10).map((result) => (
                    <TouchableOpacity
                        key={result.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(result)}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                backgroundColor: darkMode ? "black" : '#D3D3D3',
                                color: darkMode ? "white" : 'black',
                            }}
                        >
                            {result.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.modal}
                >
                    <Entypo name="circle-with-cross" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ height: "100%", marginTop: 100 }}>
                    <SingleNews item={currentNews} />
                </View>
            </Modal >
        </View >
    )
}





const styles = StyleSheet.create({
    searchText: {
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 8,
        marginHorizontal: 5,
        marginBottom: 15
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 60,
    },

    singleResult: {
        padding: 10,
        margin: 2,
        shadowColor: "black",
        elevation: 5,
        borderRadius: 10
    },

    modal: {
        position: 'absolute',
        zIndex: 1,
        right: 10,
        marginTop: 110,
    },
})