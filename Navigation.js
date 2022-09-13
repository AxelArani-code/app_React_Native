import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//Screens 
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import StakScreen from "./screens/StakScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigatior = createNativeStackNavigator();

function MyStack() {
    return(
        <HomeStackNavigatior.Navigator
        initialRouteName="HomeScreen"
        >
            <HomeStackNavigatior.Screen 
            name="HomeScreen" component={HomeScreen}/>
            <HomeStackNavigatior.Screen 
            name="Stack" component={StakScreen}/>
        </HomeStackNavigatior.Navigator>
    );
}
const Tap = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tap.Navigator
        initialRouteName="Home"
       screenOptions={{
        tabBarActiveTintColor: "red"
       }}
        >
            <Tap.Screen 
             name="Home" 
             component={HomeScreen}
             options ={{
                tabBarLabel: "Feed",
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
             }}
             />
            <Tap.Screen 
            name="Setting" 
            component={SettingScreen}
            options ={{
                tabBarLabel: "Feed",
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name="settings" size={size} color={color} />
                ),
             }}
            />
        </Tap.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}