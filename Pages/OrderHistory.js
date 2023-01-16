import { Button, Card, Avatar, List } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState,useEffect} from 'react'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OrderHistory() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [order, setOrder] = useState([]);
    const [duplicateorders, setduplicateorders] = useState([]);
    const navigation = useNavigation();
    const RedirectToCart = () => {
        navigation.navigate("Cart");
    };
   
    useEffect(() => {
        async function fetchData() {
          const user = {
            customer_Id: JSON.parse(await AsyncStorage.getItem("currentuser"))[0]
              .customer_Id,
          };
          try {
            const data = await (
              await axios.post(
                "http://localhost:5000/api/admin/getcart",
                user
              )
            ).data;
            setOrder(data.data);
            setduplicateorders(data.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
    const orderdetails = [
        {
            img: "https://cdn-food.tribune.com.pk/gallery/images/Fast%20Food%20Chains/KFC.jpg",
            title: "KFC Fried Chickens",
            price: "1295 Rs",
            dateTime: "06-Sep-2022 1:30 pm"
        },
        {
            img: "https://assets.aboutkidshealth.ca/AKHAssets/fast_food_better_choices.jpg?renditionid=21",
            title: "Paratha Role",
            price: "340 Rs",
            dateTime: "05-Sep-2022 6:30 pm"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQfK7u_Pw4F0Xv7Kf3YGes_KJx_Gi8eUS1w&usqp=CAU",
            title: "Smoked Pizza",
            price: "1399 Rs",
            dateTime: "03-Sep-2022 10:30 pm"
        },
        {
            img: "https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826",
            title: "Supreme Pizza",
            price: "1500 Rs",
            dateTime: "04-Sep-2022 2:30 pm"
        },
        {
            img: "https://thumbs.dreamstime.com/b/fast-food-menu-chicken-nuggets-hamburger-french-fries-33671451.jpg",
            title: "Grill Burger",
            price: "1395 Rs",
            dateTime: "03-Sep-2022 5:30 pm"
        },
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
            <Text style={{ marginTop: 20, marginLeft: 20, marginRight: 20,  fontSize: 20, fontWeight: 'bold', color: 'black' }}>Past Orders</Text>
                <ScrollView>
                    {orderdetails.map((idx, index) => (
                        <Card style={{
                            margin: 20, padding: 10, shadowColor: 'black', borderRadius: 16,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 7,
                        }} key={idx.key}>
                            <List.Item
                                title={<Text style={{ fontSize: 16, fontWeight: 'bold' }}>{idx.title}</Text>}
                                left={props => <Image source={{ uri: idx.img }} {...props} style={{ height: 48, width: 48, borderRadius: 10 }}></Image>}
                                description={props => <Text {...props} style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{idx.price}</Text>}
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{idx.dateTime}</Text>
                                <Button
                                    style={{ backgroundColor: "#f87c28", width: width / 3.5, fontSize: 8 }}
                                    mode="contained"
                                    onPress={() => RedirectToCart()}
                                >
                                    Reorder</Button>
                            </View>
                        </Card>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>

    );
}