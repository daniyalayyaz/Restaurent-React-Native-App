import { Button, Card, Divider } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView,
   
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function EditProfile() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [id, setid] = useState("");
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };

    async function updatecustomer() {
        const details = {
            customer_Id: id,
            name,
            email,
            number
        }

        try {
            const result = await axios.post("https://apinodejs.creativeparkingsolutions.com/api/admin/myprofile", details).data;
            console.log(result)
            update();
            // navigation.navigate("Login")

        } catch (error) {
            alert(error);
        }
    }

    async function update() {
        try {
            const check = await AsyncStorage.getItem("currentuser")
            setname(JSON.parse(check)[0].name)
            setemail(JSON.parse(check)[0].email)
            setemail(JSON.parse(check)[0].email)
            setnumber(JSON.parse(check)[0].number)
            setid(JSON.parse(check)[0].customer_Id,)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const check = await AsyncStorage.getItem("currentuser")
                setname(JSON.parse(check)[0].name)
                setemail(JSON.parse(check)[0].email)
                setemail(JSON.parse(check)[0].email)
                setnumber(JSON.parse(check)[0].number)
                setid(JSON.parse(check)[0].customer_Id,)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                }}
            >
                <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.3 }}>
                    <ScrollView>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        </View>
                        <Text
                            style={{
                                fontWeight: "bold",
                                textAlign: 'left',
                                marginBottom: 20,
                                fontSize: 20,
                            }}
                        >
                            Edit Profile
                        </Text>
                        <Divider style={{ marginBottom: 10 }} />
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}> Name</Text>
                            <TextInput
                                placeholder="John Smith"
                                style={styles.Textfields}
                                value={name}
                                onChangeText={(e) => { setname(e) }}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Email</Text>

                            <TextInput
                                placeholder="john@gmail.com"
                                style={styles.Textfields}
                                value={email}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Phone</Text>

                            <TextInput
                                placeholder="+55 67272 2672"
                                style={styles.Textfields}
                                value={number}
                                onChangeText={(e) => { setnumber(e) }}
                            ></TextInput>

                            <Button
                                style={{ marginBottom: 20, backgroundColor: "#f87c28" }}
                                mode="contained"
                                onPress={updatecustomer}
                            >
                                Save Changes
                            </Button>

                        </View>
                    </ScrollView>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Textfields: {
        borderRadius: 20,
        borderColor: "grey",
        padding: 10,
        marginBottom: 20,
    },
});