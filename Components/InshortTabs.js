import React, { useContext, useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view';
import { NewsContext } from '../API/Context';
import DiscoverScreen from '../Screen/DiscoverScreen';
import NewsScreen from '../Screen/NewsScreen';
import TopNavigation from './TopNavigation';

export default function InshortTabs() {

    const layout = useWindowDimensions();
    const { index, setIndex } = useContext(NewsContext)

    const [routes] = useState([
        { key: 'first', title: 'Discover' },
        { key: 'second', title: 'News' }
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    })

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation
                index={index}
                setIndex={setIndex}>
            </TopNavigation>}
        />
    );
}
