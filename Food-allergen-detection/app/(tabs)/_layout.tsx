import React from 'react';
import { Tabs } from 'expo-router';
import { MyTabBar } from "@/components/TabBar";

const TabLayout = () => {
    return (
        <Tabs tabBar={props => <MyTabBar {...props} />}>
            <Tabs.Screen name='index' options={{ title: "HOME" }} />
            <Tabs.Screen name='explore' options={{ title: "CAMERA" }} />
            <Tabs.Screen name='profile' options={{ title: "PROFILE" }} />
        </Tabs>
    )
}

export default TabLayout;