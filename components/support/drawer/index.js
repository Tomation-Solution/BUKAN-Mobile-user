import React, {useState} from 'react';
import { View, Image,SafeAreaView, ScrollView,Text, Switch, Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';
import Loading from '../../Modal/Loading'


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
    const [showComiittee, setShowCommittee] = useState(false)
    const [directory, setDirectory] =useState({member:true, exco:false,comm:false})
    const [loadVisible, setLoadVisible] = useState(false)
    const [loadMessage, setLoadMessage] = useState('')

    const handlePlatform =(platform)=>{
        setCurrentPlatform(platform)
        setshowPlaform(false)
    }
    const drawerData=[
        // {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
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
     {id:7, label:'About', to:'about', icon:<MaterialIcon name="info" size={22} color={'grey'}
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

    const committeeList =[
        {id:9, label:'Welfare Committee', to:'exco'},
        {id:10, label:'Planning Committee', to:'publication'},
    ]


    const handleSwitch=(val)=>{
        if(val==1){
            setDirectory({member:true, exco:false, comm:false})
            navigation.navigate('Home',{type:'member'})
            // navigation.toggleDrawer()\
            setSelected(0)

        }else if(val==2){
            setDirectory({member:false, exco:true, comm:false})
            navigation.navigate('Home',{type:'exco'})
            // navigation.toggleDrawer()
            setSelected(0)



        }else{
            setDirectory({member:false, exco:false, comm:true})
            setShowCommittee(!showComiittee)
            setSelected(0)

        }
    }

    const handleCommitteeSub =(message)=>{
        setLoadMessage(message)
        setShowCommittee(false)
        navigation.toggleDrawer();
        setLoadVisible(true)
    }




  return (
        <SafeAreaView style={{flex:1}}>
            
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />
                <ModalTemplate 
                visible={loadVisible}
                body={<Loading 
                    setLoadVisible={setLoadVisible} 
                    name={loadMessage}
                    to={()=>navigation.navigate('Home',{type:'committee'})}
                />}
            /> 
            <View style={tw`border-b  flex-row justify-around border-gray-400 mx-4 py-4 mb-6 w-10/12`}>
                  
                  <Image style={tw`h-20 w-20`} resizeMode='contain' source={require('../../../images/Logo/Buk.jpg')}/>
                
                 
            </View>
            <ScrollView>

            <Pressable onPress={()=>handleSwitch(1)} style={tw` flex-row mx-5`}>
                <MaterialIcon name='groups' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={tw`my-auto`}>Members Environment</Text>
                <Switch value={directory.member} style={tw`my-auto`} />
            </Pressable>
            
            <Pressable onPress={()=>handleSwitch(2)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='person' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Excos Directory</Text>
                </View>
                <Switch value={directory.exco} style={tw`my-auto`} />
            </Pressable>

            <Pressable onPress={()=>handleSwitch(3)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='people' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Committee Directory</Text>
                </View>
                <Switch value={directory.comm} style={tw`my-auto`} />
               
            </Pressable>
             { showComiittee ? committeeList.map(e=>
            <Pressable key={e.id} onPress={()=>handleCommitteeSub(e.label)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600 ml-7`}>{e.label}</Text>
            </Pressable>):<></>}

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
                <Ionicon name={showDropdown?'md-caret-up-outline':'md-caret-down-outline'} style={tw` my-auto px-2 text-gray-400`}/>
                
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
