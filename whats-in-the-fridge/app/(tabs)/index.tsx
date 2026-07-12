import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '@/hooks/useTheme';
import HomeHeader from '@/components/HomeHeader';

export default function TabOneScreen() {
  const colours = useTheme();
  return (
    <View style={[styles.root, { backgroundColor: colours.mainBG }]}>
      <HomeHeader>
        <Text style={[styles.headerText, { color: colours.textColour }]}>
          HomeHeader
        </Text>
      </HomeHeader>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex:1
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
