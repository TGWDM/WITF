import { StyleSheet, View, ViewStyle, Text } from 'react-native'
import {useTheme} from '@/hooks/useTheme';
import React from 'react'

// Define the props types for the HomeHeader component
interface HomeHeaderProps {
    children?: React.ReactNode; // Any react node accepted
    style?: ViewStyle;          
}

const HomeHeader = ({ children, style }: HomeHeaderProps) => {
    const colours = useTheme();
    return (
        <View style={[styles.root, { backgroundColor: colours.itemBG }, style]}>
        <Text style={[styles.headerText, { color: colours.textColour }]}>
          HomeHeader 
        </Text>
        <View>
            
        </View>
        {children}
        </View>
    );
};

export default HomeHeader

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 133,
        width: 375,
        padding: 52,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    }
})