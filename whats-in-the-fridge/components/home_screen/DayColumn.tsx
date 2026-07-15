import { StyleSheet, Text, View } from 'react-native'
import { NumberCircle128Regular } from '@fluentui/react-native-icons'


const DayColumn = () => {
  return (
    <View style={[styles.root]}>
      <Text>M</Text>  
      <NumberCircle128Regular width={20} height={20} color={'#000000'} />
    </View>
  )
}

export default DayColumn

const styles = StyleSheet.create({
  root:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  }
})