import { View, Text ,Button} from 'react-native'
import React from 'react'

export default function child({getname}) {
  return (
    <View>
    
      <Button onPress={()=>getname("Sudhir")} title="Click Me"/>
    </View>
  )
}