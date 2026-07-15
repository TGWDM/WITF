import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '@/hooks/useTheme';
import HomeHeader from '@/components/home_screen/HomeHeader';
import HomeWeekView from '@/components/home_screen/homeWeekView';



export default function TabOneScreen() {
  const colours = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: colours.mainBG }]}>
      <HomeHeader>
      </HomeHeader>
      <HomeWeekView>
      </HomeWeekView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex:0,
    paddingTop: 180,
    gap: 250
  }
});
