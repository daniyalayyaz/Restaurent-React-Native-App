import { Button, Card, Avatar, List } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Profile() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToPastOrders = () => {
        navigation.navigate("Order-History");
    };
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };
    const RedirectToEditProfile = () => {
        navigation.navigate("Edit-Profile");
    };
    const RedirectToChangePassword = () => {
        navigation.navigate("Change-Password");
    };
    const RedirectToMyAddresses = () => {
        navigation.navigate("My-Addresses");
    };
    const settingmenu = [
        {
            icon: "account-edit",
            title: "My Profile",
            path: RedirectToEditProfile
        },
        {
            icon: "history",
            title: "My Orders",
            path: RedirectToPastOrders
        },
        {
            icon: "home",
            title: "My Addresses",
            path: RedirectToMyAddresses
        },
        {
            icon: "lock",
            title: "Change Password",
            path: RedirectToChangePassword
        },
        {
            icon: "logout",
            title: "Logout",
            path: RedirectToLogin
        }
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <Card style={{
                    margin: 10, padding: 10, shadowColor: 'black', borderRadius: 16,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 20,
                }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, height: height / 3 }}>
                        <Image source={require('../assets/Settings.gif')} style={{ height: height / 4, width: width / 2 }}></Image>
                        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Settings</Text>
                    </View>

                </Card>
                {settingmenu.map((idx, index) => (
                    <TouchableOpacity onPress={idx.path
                }>
                <List.Item
                    key={index}
                    title={idx.title}
                    left={props => <List.Icon {...props} icon={idx.icon} color='black' />}
                />
            </TouchableOpacity>
                ))}
        </View>
        </SafeAreaView >

    );
}