import { StyleSheet, View, ViewStyle } from 'react-native'
import {useTheme} from '@/hooks/useTheme';
import React from 'react'

// Define the props types for the HomeHeader component
interface HomeHeaderProps {
    children: React.ReactNode; // Any react node accepted
    style?: ViewStyle;          
}

const HomeHeader = ({ children, style }: HomeHeaderProps) => {
    const colours = useTheme();
    return (
        <View style={[styles.root, { backgroundColor: colours.itemBG }, style]}>
            {children}
        </View>
    );
};

export default HomeHeader

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 133,
        width: 375,
    }
})