//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const Onboarding = (props) => {
    return (
        <View style={tw`h-full`}>
            <View style={tw`bg-red-200 h-1/2`}>
                <Image style={tw`h-full`} source={props.image}/>
            </View>
            {/* <View style={tw`pt-2`}>
                <Image style={tw`mx-auto`} source={require('../../images/onboarding/r8.png')}/>
            </View> */}
            
            <View style={tw`flex mx-auto pb-1 px-7 `}>
                <Text style={[tw`flex mx-auto py-2 text-lg font-bold`,{color:'#0092ED'}]}>{props.title}</Text>
                <Text style={tw`flex mx-auto py-2 text-center text-gray-700`}>{props.body}</Text>
            </View>

            <View style={tw`flex-row mx-auto py-5`}>
                <Pressable onPress={()=>props.navigation('first')} style={[tw`h-2 ${props.next=='second'?'w-5':'w-2'} rounded-full ${props.next =='second'? '':'bg-gray-400'} mx-1`,{backgroundColor:props.next!='second'?'rgba(0,0,0,0.3)':'#0092ED'}]}></Pressable>
                <Pressable style={[tw`h-2 ${props.next=='third'?'w-5':'w-2'} rounded-full ${props.next =='third'? '':'bg-gray-400'} mx-1`,{backgroundColor:props.next!='third'?'rgba(0,0,0,0.3)':'#0092ED'}]}></Pressable>
                <Pressable style={[tw`h-2 ${props.next=='chapters'?'w-5':'w-2'} rounded-full ${props.next =='chapters'? '':'bg-gray-400'} mx-1`,{backgroundColor:props.next!='chapters'?'rgba(0,0,0,0.3)':'#0092ED'}]}></Pressable>
            </View>

            <View style={tw` absolute bottom-0 px-3 w-full`}>
                <View style={tw`flex-row  justify-between py-2`}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('chapters')} style={tw`my-auto`}>
                        <Text>Skip</Text>
                    </TouchableOpacity>
                    <View style={tw`my-auto`}>
                        <Ionicon onPress={()=>props.navigation.navigate(props.next)} name='ios-arrow-forward-circle' size={38} color='#0092DE' />
                    </View>
                </View>
            </View>
        </View>
    );
};

//make this component available to the app
export default Onboarding;
