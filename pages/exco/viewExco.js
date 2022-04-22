import { View, SafeAreaView,Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'
import TobBar from '../../components/topBar'


const ViewExco = ({navigation}) => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
            <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
            <Text style={tw`my-auto font-bold text-base`}>Exco Information</Text>
            <Ionicon name='md-notifications' onPress={()=>navigation.navigate('notifications')} color='#0092ED' size={30}/>
          </View>
        }
        />
    <ScrollView style={tw`mb-5`} >
                <View >
                    <Image  style={tw`h-28 w-28 rounded-full mx-auto`} resizeMode='cover' source={require('../../images/onboarding/phone.png')}/>
                </View> 
                <View style={tw` pt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Name:</Text>
                    <Text>Bolaji Johnson</Text>
                </View>
                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Email Address:</Text>
                    <Text>BolajiJohnson@gmail.com </Text>
                </View>

                <View style={tw` mt-3 border-b border-gray-500 py-1 mx-5`}>
                    <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Address:</Text>
                    <Text>No 20, Kings Avenue, Ikoyi, Lagos.</Text>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Department:</Text>
                        <Text>Accounting</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Year:</Text>
                        <Text>2019</Text>
                    </View>
                </View>

                <View style={tw`flex-row w-full`}>
                    <View style={tw` mt-3 w-5/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Occupation:</Text>
                        <Text>Accountant</Text>
                    </View>
                    <View style={tw` mt-3 w-4/12 border-b border-gray-500 py-1 mx-5`}>
                        <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Phone Number:</Text>
                        <Text>08023793847</Text>
                    </View>
                </View>

                <View style={tw`w-11/12 mx-5 my-3`}>
                    <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Bio:</Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad 
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    Lorem ipsum dolor sit amet, consectetur adipiscin. ad
                    </Text>
                </View>
                <View style={tw`w-full mx-5 pb-1 mt-3`}>
                    <Text style={[tw`pb-1 font-bold`,{color:'#0092ED'}]}>Pictures</Text>
                </View>
                <View style={tw`flex-row mx-5 justify-between`}>
                    
                    <Image  style={tw`h-20 w-20 rounded-lg mx-1`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                    <Image  style={tw`h-20 w-20 rounded-lg mx-auto`}  source={require('../../images/onboarding/phone.png')}/>
                
                </View>
                {/* <View style={tw`mt-7 mx-8`}>
                    <RoundedButton text='Chat'/>
                </View> */}
            </ScrollView>
    </SafeAreaView>
  )
}

export default ViewExco