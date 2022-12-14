import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'


import RoundedButton from '../components/button/RoundedButton'

export default function SplashScreen({navigation}) {

  const [load, setLoad] = useState(false)

    useEffect(()=>{
        setTimeout(
            function() {
            //  setisChecked(id)
            setLoad(true)
            navigation.navigate('home')
            setLoad(true)
            }, 200);
    },[])
  return (
    <View style={tw` h-full`}>
      <Image style={tw`h-24 m-auto`} resizeMode='contain' source={require('../images/Logo/Buk.jpg')}/>  
      {/* <Text>SplashScreen</Text> */}

      { !load  ?
      <View style={tw`mx-auto mb-5`}>
      
        <ActivityIndicator style={tw`absolute bottom-0`} size={30} color='#365C2A' />
        
      </View>
      : 
      <View style={tw`w-7/12 mx-auto mb-5`}>
      <RoundedButton text='Next' pressed={()=>navigation.navigate('home')}/>
      </View>
      }
    </View>
  )
}