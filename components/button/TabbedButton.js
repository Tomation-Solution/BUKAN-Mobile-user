import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const TabbedButton = (props) => {
  return (
    <TouchableOpacity 
        style={props.index==props.selected ? [tw`py-0.5 my-2 px-5 rounded-3xl`,{backgroundColor:'#0092ED'}] : tw` py-2 my-1.5 rounded-3xl`} 
        onPress={props.pressed}
    >
      <Text style={props.index==props.selected ? tw`text-white text-center my-auto` : [tw`font-bold text-center my-auto`,{color:'#0092ED'}]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TabbedButton