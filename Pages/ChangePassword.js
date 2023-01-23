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
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ChangePassword() {

    const [email, setemail] = useState("");
    const [id, setid] = useState("");
    const [password, setpassword] = useState("")
    const [new_password, setnew_password] = useState("")
    const [cpassword, setcpassword] = useState("")
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };


    async function register(e) {
        if (new_password === cpassword) {
            const details = {
                customer_Id: id,
                email: email,
                password,
                new_password
            }

            // await axios.post(`https://apinodejs.creativeparkingsolutions.com/api/admin/changepassword`, details)
            //     .then(res => {
            //         console.log(res);
            //         console.log(res.data)
            //     })
            //     .catch(error => console.log(error));

            try {
                const result = await axios.post("https://apinodejs.creativeparkingsolutions.com/api/admin/changepassword", details).data;

                console.log(result)
                // setnew_password('')
                // setpassword('')
                // setcpassword('')

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Password and confirm password is not same")
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const check = await AsyncStorage.getItem("currentuser")
                setemail(JSON.parse(check)[0].email)
                setid(JSON.parse(check)[0].customer_Id)
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
                <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.5 }}>
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
                            Change Password
                        </Text>
                        <Divider style={{ marginBottom: 10 }} />
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Old Password</Text>
                            <TextInput
                                placeholder="Enter Old Password"
                                style={styles.Textfields}
                                value={password}
                                onChangeText={(e) => { setpassword(e) }}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>New Password</Text>
                            <TextInput
                                placeholder="Enter New Password"
                                style={styles.Textfields}
                                value={new_password}
                                onChangeText={(e) => { setnew_password(e) }}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Confirm New Password</Text>

                            <TextInput
                                placeholder="Enter Confirm New Password"
                                style={styles.Textfields}
                                value={cpassword}
                                onChangeText={(e) => { setcpassword(e) }}
                            ></TextInput>


                            <Button
                                style={{ marginBottom: 20, backgroundColor: "#f87c28" }}
                                mode="contained"
                                onPress={() => register()}
                            >
                                Update Password
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