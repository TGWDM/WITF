import { StyleSheet, View, ViewStyle } from 'react-native'
import {useTheme} from '@/hooks/useTheme';
import DayColumns from './DayColumn'

// Define the props types for the HomeHeader component
interface HomeWeekViewProps {
    style?: ViewStyle;          
}

const HomeWeekView = (style : HomeWeekViewProps) => {
  const colours = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: colours.itemBG}]}>
        <View style={styles.weekView}>
            <DayColumns />
        </View>
    </View>
  )
}

export default HomeWeekView;

const styles = StyleSheet.create({
    root: {
        borderRadius: 5,
        width: 371,
        height: 371
    },
    weekView: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row-reverse',
      columnGap: 23
    }
})