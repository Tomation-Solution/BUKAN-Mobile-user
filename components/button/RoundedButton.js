import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const RoundedButton = (props) => {
  return (
    <TouchableOpacity style={[tw` py-2 my-0.5 rounded-full`,{backgroundColor:'#0092ED'}]} onPress={props.pressed}>
      <Text style={tw`text-white text-center`}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton