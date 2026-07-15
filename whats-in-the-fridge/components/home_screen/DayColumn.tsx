import { StyleSheet, Text, View } from 'react-native'
import {Iconify}  from 'react-native-iconify'

const DayColumns = () => {
  return (
    <View style={[styles.root]}>
      <Text>M</Text>  
      <Iconify icon="bi:2-circle" size={24} color="#000" />
    </View>
  )
}

export default DayColumns

const styles = StyleSheet.create({
  root:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  }
})