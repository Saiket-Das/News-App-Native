import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../API/Context'
import { Entypo } from "@expo/vector-icons";
import SingleNews from './SingleNews';



export default function Search() {

    const { news: { articles } } = useContext(NewsContext)

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
                ...styles.searchText, backgroundColor: '#999999', color: 'black'
            }}
                onChangeText={(text) => handleSearch(text)}
                placeholder='Search for news'
                placeholderTextColor={'black'}
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
                                backgroundColor: "black",
                                color: "white",
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
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 8,
        marginBottom: 15
    },
    searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 50,
    },

    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 2,
        shadowColor: "black",
        elevation: 5,
    },

    modal: {
        position: 'absolute',
        zIndex: 1,
        right: 3,
        marginTop: 104,
    },
})