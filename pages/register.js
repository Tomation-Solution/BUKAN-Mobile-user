import { View, Text, Image, TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'

const Register = ({navigation}) => {
  return (
    <View>
      <Image style={tw`mx-auto my-8 h-14 w-14`} resizeMode='contain' source={require('../images/Logo/Buk.jpg')}/>
      <View style={tw`mx-10`}>
         <Text style={tw`text-base font-bold`}>Register</Text>
          <Text>Input details to register</Text>
      </View>
       
        <ScrollView style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
          
          <View style={tw`my-0.5`}>
            <View style={tw`flex-row justify-between`}>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>First Name</Text>
                <TextInput
                placeholder='First Name'
                />
              </View>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Last Name</Text>
                <TextInput
                placeholder='Last Name'
                />
              </View>
            </View>
            
              <View style={tw`my-1 border-b`}>
                <Text>Email Address</Text>
                <TextInput
                placeholder='email Address'
                />
              </View>
              <View style={tw`my-1 border-b`}>
                <Text>Password</Text>
                <TextInput
                placeholder='Pasword'
                secureTextEntry={true}
                />
              </View>
          </View>

          <View style={tw`flex-row justify-between my-0.5`}>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Phone Number</Text>
                <TextInput
                placeholder='Phone Number'
              
                />
              </View>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Graduation Year</Text>
                <TextInput
                placeholder='graduation Year'
                />
              </View>
            </View>

            <View style={tw`flex-row my-0.5 justify-between`}>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Department</Text>
                <TextInput
                placeholder='Department'
                />
              </View>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Chapter</Text>
                <TextInput
                placeholder='Chapter'
                />
              </View>
            </View>
          <View style={tw`w-10/12 mx-auto mt-3`}>
            <RoundedButton 
              text='Register'
              pressed={()=>navigation.navigate('accountCreated')}/>
          </View>
          {/* <Text>Forgot Password?</Text> */}
          <View style={tw`flex-row mx-auto py-2`}>
              <Text>Already have an Account?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={[tw`font-bold`,{color:'#0092ED'}]}> Login</Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  )
}

export default Register