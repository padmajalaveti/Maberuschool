
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, Dimensions,ImageBackground } from 'react-native'
import { TextInput, useTheme, Button ,Card} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'react-native-image-picker';


export default function Eventadd({navigation}) {
  
    const home=()=>{
        navigation.navigate("Event")
    }
    const { colors } = useTheme();

    const [eventdate, seteventdate] = useState(new Date())
    const [openn, setOpenn] = useState(false)
    const [eventdata, seteventdata] = useState("")

    const [eventtime, seteventtime] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [timedata, settimedata] = useState("")

    const [eventclose, seteventclose] = useState(new Date())
    const [close, setclose] = useState(false)
    const [times, settimes] = useState("")

    const [role, setrole] = useState("")
    const [accessToken, setaccessToken] = useState("")
    const [refreshtoken, setrefreshToken] = useState("")


    const [title, settitle] = useState("")
    const titledetails = (name) => {
        settitle(name)
        console.log(name);

    }

    const [branch, setbranch] = useState("")
        const branchdetails = (name) => {
            setbranch(name)
            console.log(name);

        }

         const [eventid, setid] = useState("")
                const eventiddetails = (name) => {
                    setid(name)
                    console.log(name);

                }

    const [fileUris, setfileUris] = useState("");
    const [filename, setfilename] = useState("");
    const [filetype, setfiletype] = useState("");
    
    const [fileUriss, setfileUriss] = useState("");
    const [filenames, setfilenames] = useState("");
    const [filetypes, setfiletypes] = useState("");

    const [fileUrisss, setfileUrisss] = useState("");
    const [filenamess, setfilenamess] = useState("");
    const [filetypess, setfiletypess] = useState("");


    let option1 = {
        title: 'select image',
        mediaType: 'mixed'
    };
   
    const AddPick = () => {
        ImagePicker.launchImageLibrary(option1, (res) => {
            if (res.didCancel) {
                Alert.alert('User cancelled image picker');
            } else if (res.error) {
                Alert.alert('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                Alert.alert('User tapped custom button: ', res.customButton);
                Alert.alert(res.customButton);
            } else {
                // Use res.uri directly as the source for FastImage
                setfileUris(res.assets[0]["uri"]);
                setfilename(res.assets[0]["fileName"]);
                setfiletype(res.assets[0]["type"]);
                // uploadimage(res.assets[0]["uri"], res.assets[0]["fileName"], res.assets[0]["type"])
            }
        });
    }
    const AddPickers = () => {
        ImagePicker.launchImageLibrary(option1, (res) => {
            if (res.didCancel) {
                Alert.alert('User cancelled image picker');
            } else if (res.error) {
                Alert.alert('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                Alert.alert('User tapped custom button: ', res.customButton);
                Alert.alert(res.customButton);
            } else {
                // Use res.uri directly as the source for FastImage
                setfileUris(res.assets[0]["uri"]);
                setfilename(res.assets[0]["fileName"]);
                setfiletype(res.assets[0]["type"]);
                // uploadimage(res.assets[0]["uri"], res.assets[0]["fileName"], res.assets[0]["type"])
            }
        });
    }
    const AddPicker = () => {
        ImagePicker.launchImageLibrary(option1, (res) => {
            if (res.didCancel) {
                Alert.alert('User cancelled image picker');
            } else if (res.error) {
                Alert.alert('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                Alert.alert('User tapped custom button: ', res.customButton);
                Alert.alert(res.customButton);
            } else {
                // Use res.uri directly as the source for FastImage
                setfileUriss(res.assets[0]["uri"]);
                setfilenames(res.assets[0]["fileName"]);
                setfiletypes(res.assets[0]["type"]);
                // uploadimage(res.assets[0]["uri"], res.assets[0]["fileName"], res.assets[0]["type"])
            }
        });
    }
 
    

    const getuserdata = async () => {
        const role = await AsyncStorage.getItem("role");
        const accessToken = await AsyncStorage.getItem("accessToken");
        const refreshtoken = await AsyncStorage.getItem("refreshtoken");
        setrole(role);
        setaccessToken(accessToken);
        setrefreshToken(refreshtoken);

    }



    // const uploadimage = (uris, names, types) => {
    //     let deleteDP="";
    //     const imageupload = new FormData();
    //     imageupload.append('UserDP', )

    //     fetch('https://rammisfreshchicken.com/api/userLogin/userdp/' + userID, {
    //       method: 'PATCH',
    //       body: imageupload,
    //       headers: { 'Content-Type': 'multipart/form-data' }
    //     }).then((res) => { return res.json() }).then((data) => {
    //       console.log(data)
    //       if (data.success == 1) {
    //         setreloadprofile(!reloadprofile)
    //         Alert.alert("successfully")
    //       } else {
    //         console.log(data.success)
    //       }
    //     }).catch((err) => { console.log(err) })
    //   }
      
   const handleGetStarted2 = async () => {
                  try {
                      const response = await fetch('http://10.0.2.2:3000/events/create-event', {
                          method: 'POST',
                          body: JSON.stringify({
                             event_name: title,
                             event_date:eventdate,
                             from:eventtime,
                             to:eventclose,
                             id:eventid
                          }),
                          headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                          },
                      });

                      console.log("done2", response)
                      if (!response.ok) {
                          throw new Error('Failed to details. Status: ' + response.status);
                      }
                      const data = await response.json();
                      console.log("Event details created ===> ", data)
                      if (data.success) {
                          // Show alert box
                          Alert.alert("Event Details Created Successfully");
                          // Navigate to Sectiondetails screen
                          navigation.navigate('Event');
                      } else {
                          Alert.alert("Error in creating the student details");
                      }
                  } catch (error) {
                      console.error('Error fetching data:', error);
                  }
              };

    return (

        <SafeAreaView>
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: colors.primary,  }}>

                    {/* <View style={{ width: '100%', height: 77, backgroundColor: colors.background, flexDirection: 'row', columnGap: 14 }}>
                        <Icon name='arrow-left' color={colors.primary} size={24} style={{ marginTop: 20 }}></Icon>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.primary, marginTop: 23 }}>Event Add</Text>
                    </View> */}

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Event Number' onChangeText={eventiddetails} value={eventid} style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20 }} ></TextInput>


                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Title Name' onChangeText={titledetails} value={title} style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20 }} ></TextInput>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpenn(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event date' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{eventdata ? eventdate.toLocaleDateString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={openn}
                            mode='date'
                            date={eventdate}
                            onConfirm={(date) => {
                                setOpenn(false)
                                seteventdate(date)
                                seteventdata(date)
                                console.log("==========>" + date)
                            }}
                            onCancel={() => {
                                setOpenn(false)
                            }}>
                        </DatePicker>

                    </View>

                    <TextInput textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeOutlineColor={colors.text} outlineColor={colors.text} mode='outlined' placeholder='Branch Name' onChangeText={branchdetails} value={branch} style={{ fontSize: 18, width: '87%', backgroundColor: 'transparent', alignSelf: 'center', marginTop: 20 }} ></TextInput>


                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setOpen(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event start time' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', alignSelf: 'center', }}>{timedata ? eventtime.toLocaleTimeString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={open}
                            mode='time'
                            date={eventtime}
                            onConfirm={(time) => {
                                setOpen(false)
                                seteventtime(time)
                                settimedata(time)
                                console.log("==========>" + time)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}>
                        </DatePicker>

                    </View>

                    <View style={{ justifyContent: 'center', alignSelf: 'center', width: '87%', flexDirection: 'row', borderColor: colors.text, borderWidth: 1, marginTop: 20 }}>
                        <Icon name='calendar-month-outline' color={colors.text} size={25} style={{ borderRadius: 18, alignSelf: 'center' }} onPress={() => { setclose(true) }} />
                        <TextInput disabled textColor={colors.text} placeholderTextColor={colors.text} textContentType='name' activeUnderlineColor={'transparent'} underlineColor={'transparent'} placeholder='Event end time' style={{ fontSize: 18, width: '80%', backgroundColor: 'transparent', borderRadius: 5, alignSelf: 'center', }}>{times ? eventclose.toLocaleTimeString() : ""}</TextInput>

                        <DatePicker
                            modal
                            open={close}
                            mode='time'
                            date={eventclose}
                            onConfirm={(time) => {
                                setclose(false)
                                seteventclose(time)
                                settimes(time)
                                console.log("==========>" + time)
                            }}
                            onCancel={() => {
                                setclose(false)
                            }}>
                        </DatePicker>

                    </View>
 
                    <ImageBackground resizeMode='stretch' source={{ uri: fileUris ? (fileUris): ('https://www.thestatesman.com/wp-content/uploads/2019/10/mahesh-babu.jpg')}} style={{ width: '100%', height: 100,marginTop: 22, alignSelf: 'center', justifyContent: 'center'}}>
                        <Icon name='plus' color={colors.text} size={44} style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={AddPick} />
                        <Text style={{ fontSize: 20, color: colors.primary, justifyContent: 'center', alignSelf: 'center' }}>Add Photos </Text>
                    </ImageBackground>

                    <ImageBackground resizeMode='stretch' source={{ uri: fileUriss ? (fileUriss): ('https://www.thestatesman.com/wp-content/uploads/2019/10/mahesh-babu.jpg')}} style={{ width: '100%', height: 100,marginTop: 22, alignSelf: 'center', justifyContent: 'center'}}>
                    <Icon name='plus' color={colors.text} size={44} style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={AddPicker} />
                        <Text style={{ fontSize: 20, color: colors.primary, justifyContent: 'center', alignSelf: 'center' }}>Add Photos </Text>
                    </ImageBackground>
                  
                    <ImageBackground resizeMode='stretch' source={{ uri: fileUrisss ? (fileUrisss): ('https://www.thestatesman.com/wp-content/uploads/2019/10/mahesh-babu.jpg')}} style={{ width: '100%', height: 100,marginTop: 22, alignSelf: 'center', justifyContent: 'center'}}>
                    <Icon name='plus' color={colors.text} size={44} style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={AddPickers} />
                        <Text style={{ fontSize: 20, color: colors.primary, justifyContent: 'center', alignSelf: 'center' }}>Add Photos </Text>
                    </ImageBackground>
                    <Button textColor={colors.text} buttonColor={colors.bg} labelStyle={{ fontSize: 19, color: colors.text, fontWeight: 'bold' }} style={{ width: '52%', height: 55, borderColor: colors.primary, justifyContent: "center", alignSelf: 'center', borderRadius: 10, margin:9}} onPress={handleGetStarted2}>
                        ADD 
                    </Button >
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}




