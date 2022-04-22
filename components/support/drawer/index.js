import React, {useState} from 'react';
import { View, Image,SafeAreaView, ScrollView,Text, Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='#0092ED'
            key={props.id}
            style={tw`${props.bg}`}
                label={props.label}
                labelStyle={{color:props.id==props.selected ? '#0092ED':'rgba(0,0,0,0.4)'}}
                onPress={() => handlePress(props)}
                icon={({ focused, color, size }) => (props.icon) }
            />
    )
}
export default function CustomDrawerList({navigation}) {
    // const navigation = useNavigation();
    const [selected, setSelected] = useState(1)
    const [visible, setVisible] = useState(false)
    const [showDropdown, setshowDropdown] = useState(false)
    const [showPlatforms, setshowPlaform] = useState(false)
    const [currentPlatform, setCurrentPlatform] =useState('Member')

    const handlePlatform =(platform)=>{
        setCurrentPlatform(platform)
        setshowPlaform(false)
    }
    const drawerData=[
        {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={'grey'} size={22}/>)},
        {id:3, label:'News', to:'news', icon:<MaterialCom name="message-alert" size={22} color={'grey'}
        />}
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        {id:5, label:'Gallery', to:'gallery', icon:<FontAwesome name="photo" size={22} color={'grey'}
        /> },
        // {id:6, label:'Election', to:'election', icon:<MaterialIcon name="how-to-vote" size={22} color={'grey'}
        // />},
        // {id:7, label:'Subscribe', to:'subscribe', icon:<MaterialIcon name="subscriptions" size={22} color={'grey'}
        // />},
        {id:8, label:'Support', to:'support', icon:<MaterialIcon name="headset-mic" size={22} color={'grey'}
     /> },
    ]

    const options =[
        {id:9, label:'Exco', to:'exco'},
        {id:10, label:'Publications', to:'publication'},
        {id:11, label:'Minutes', to:'minutes'},
       
    ]

    const handleSub=(to)=>{
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }

    const handleDropdown=(id)=>{
        
        setSelected(id)
        setshowDropdown(!showDropdown)
    }


  return (
        <SafeAreaView style={{flex:1}}>
            
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />
            <View style={tw`border-b  flex-row justify-around border-gray-400 mx-4 py-4 mb-6 w-10/12`}>
                  
                  <Image style={tw`h-20 w-20 rounded-full `} source={require('../../../images/onboarding/phone.png')}/>
                
                 <View style={tw`my-auto`}>
                    <Pressable>
                      <Text style={tw`py-1 text-base font-bold`}>Rasheed Johnson</Text>
                      <Text style={tw`py-0.5`}> {currentPlatform} Platform</Text>
                    </Pressable>
                    <Pressable  onPress={()=>setshowPlaform(!showPlatforms)} style={[tw`px-2 flex-row rounded-full mt-1 py-1`,{backgroundColor:'#0092ED'}]}>
                        <MaterialCom color='white' style={tw`my-auto pr-2`} size={17} name='account-switch-outline'/>
                        <Text style={tw`text-center text-white text-xs`}>Switch Platform</Text>
                    </Pressable>
                     { showPlatforms ?
                    <View>
                        <Pressable onPress={()=>handlePlatform('Exco')} style={tw`px-2 flex-row rounded-full mt-0.5 py-1`}>    
                            <Text style={tw`text-center text-black`}>Exco Platform</Text>
                        </Pressable>
                        <Pressable onPress={()=>handlePlatform('Committee')}style={tw`px-2 flex-row rounded-full mt-0.5 py-1`}>    
                            <Text style={tw`text-center text-black`}>Committee Platform</Text>
                        </Pressable>                    
                    </View> :<></>}       
                  </View>
            </View>
            <ScrollView>
            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    // selected={selected}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-blue-200':''}
                    icon={e.icon}
                    key={e.id}
                />)}
            
            
            <Pressable onPress={()=>handleDropdown(20)} style={tw`my-4 flex-row mx-5 ${selected==20 ? 'bg-blue-200 pl-4 rounded-lg py-2' :''}`}>
                <Ionicon name='ios-file-tray-full' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={{color:20==selected  ? '#0092ED' : 'rgba(0,0,0,0.4)' }}>Resources</Text>
            </Pressable>
            { showDropdown ? options.map(e=>
            <Pressable key={e.id} onPress={()=>handleSub(e.to)} style={tw`w-full ml-12 pl-5 my-1`}>
                <Text style={tw`text-gray-500`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                key={e.id}
                label={e.label}
                navigation={navigation}
                id={e.id}s
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-green-200':''}
                icon={e.icon}
            />)}
            
            <Pressable onPress={()=>setVisible(true)} style={tw`my-4 flex-row mx-5`}>
                <MaterialIcon name='logout' style={tw`mr-8 my-auto text-gray-400`} size={22} />
                <Text style={tw`text-gray-400`}>Logout</Text>
            </Pressable>
            </ScrollView>
        </SafeAreaView>
  );
}
