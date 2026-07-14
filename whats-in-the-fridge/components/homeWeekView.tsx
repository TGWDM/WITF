import { StyleSheet, View, ViewStyle } from 'react-native'
import {useTheme} from '@/hooks/useTheme';
import React from 'react'

const colours = useTheme();

// Define the props types for the HomeHeader component
interface HomeWeekViewProps {
    style?: ViewStyle;          
}

const HomeWeekView = (style : HomeWeekViewProps) => {
  return (
    <View style={[styles.root]}>
    </View>
  )
}

export default HomeWeekView;

const styles = StyleSheet.create({
    root: {
        backgroundColor: colours.itemBG,
        width: 371,
        height: 371,
    }
})