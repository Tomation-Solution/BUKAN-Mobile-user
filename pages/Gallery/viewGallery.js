import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'
import Ionicon from 'react-native-vector-icons/Ionicons'

const ViewGallery = ({navigation, route}) => {
  return (
    <View style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <View style={tw-10}/>
          </View>
        }
    />
        <View style={tw`h-1/2 p-3`}>
          { route.params.data?
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={(route.params.data.image)}/>
            :<></>
            }
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={[tw`text-base font-bold py-1`,{color:'#0092ED'}]}>Monthly Exco Meeting</Text>
            <Text style={tw`text-justify text-gray-600 py-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et l</Text>
        </View>  
      
    </View>
  )
}

export default ViewGallery