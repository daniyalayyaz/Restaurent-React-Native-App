import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, FlatList, Platform, Image ,ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState,useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
export default function Cart() {
    const getstatus =AsyncStorage.getItem("status");
    const [items, setItems] = useState([]);
    const [charges, setcharges] = useState("")
    const [address, setAddress] = useState([]);
    async function remove(orderID, quantitys, price) {
        const info = {
          orderID,
          quantitys,
          price,
          customer_Id: JSON.parse(await AsyncStorage.getItem("currentuser"))[0]
            .customer_Id,
        };
    
        try {
          const data = (
            await axios.post(
              "http://localhost:5000/api/admin/updatecart",
              info
            )
          ).data;
          console.log(data.data);
          update();
          ToastAndroid.show("Quantity decrease");
        } catch (error) {
          console.log(error);
          ToastAndroid.show("Failed! Try again later");
        }
      }
      async function update() {
        if (getstatus === "true") {
          const user =  JSON.parse(await AsyncStorage.getItem("currentuser"))
            .customer_Id;
    
          const temp = {
            customer_Id: user,
          };
          try {
            const data = (
              await axios.post(
                "http://localhost:5000/api/admin/getcartitems",
                temp
              )
            ).data;
            console.log(data.data);
            setItems(data.data);
          } catch (error) {
            console.log(error);
          }
        }
      }
      async function del(orderID) {
        const info = {
          orderID,
        };
    
        try {
          const data = (
            await axios.post(
              "http://localhost:5000/api/admin/updatecart",
              info
            )
          ).data;
          console.log(data.data);
          update();
          ToastAndroid.show("Item has been deleted");
        } catch (error) {
          console.log(error);
          ToastAndroid.show("Failed! Try again later");
        }
      }
      async function add(orderID, quantitys, price) {
        const info = {
          orderID,
          quantitys,
          price,
          customer_Id:  JSON.parse(await AsyncStorage.getItem("currentuser"))
            .customer_Id,
        };
    
        try {
          const data = (
            await axios.post(
              "http://localhost:5000/api/admin/updatecart",
              info
            )
          ).data;
          console.log(data.data);
          update();
          ToastAndroid.show("Quantity increase");
        } catch (error) {
          console.log(error);
          ToastAndroid.show("Failed! Try again later");
        }
      }
      useEffect(() => {
        async function fetchData() {
          const user = {
            customer_Id: JSON.parse(await AsyncStorage.getItem("currentuser"))
              .customer_Id,
          };
          const info = {
            ID: JSON.parse(await AsyncStorage.getItem("currentuser"))[0].resturant_ID
          }
          try {
            const data = await (
              await axios.post(
                "http://localhost:5000/api/user/getaddress",
                user
              )
            ).data;
    
            const result = (await axios.post("http://localhost:5000/api/admin/phoneandaddress", info)).data;
            setcharges(result.data[0]["charges"])
            setAddress(data.data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
    
      useEffect(() => {
        if (getstatus === "true") {
          const user =   AsyncStorage.getItem("currentuser")[0]
            .customer_Id;
          async function fetchData() {
            const temp = {
              customer_Id: user,
            };
            try {
              const data = (
                await axios.post(
                  "http://localhost:5000/api/admin/getcartitems",
                  temp
                )
              ).data;
              console.log(data.data);
              setItems(data.data);
            } catch (error) {
              console.log(error);
            }
          }
          fetchData();
        }
      }, []);
    const DATA = [
        {
            img: 'https://propakistani.pk/wp-content/uploads/2022/04/front-view-tasty-meat-burger-wit.jpg',
            title: 'Steak Burger',
            price: '100 Rs',
            quantitys:"7"
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxhqD_7ZHYjpxEzwYLu7srgRx4wr86s6kVQ&usqp=CAU',
            title: 'Chicken Burger',
            price: '100 Rs'

        },
        {
            img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541460839.jpeg',
            title: 'Beef Burger',
            price: '100 Rs'

        },
        {
            img: 'https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg',
            title: 'Wehshi Burger',
            price: '100 Rs'

        },
        {
            img: 'https://www.unileverfoodsolutions.com.au/dam/global-ufs/mcos/anz/calcmenu/recipe/killer-recipes-update/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing_main-header.jpg',
            title: 'Zinger Burger',
            price: '100 Rs'

        },
        {
            img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-8.jpg',
            title: 'Patty Burger',
            price: '100 Rs'

        },
    ];
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter < 1) {
        decrementCounter = () => setCounter(1);
    }
    const navigation = useNavigation();
    const RedirectToCheckout = () => {
        navigation.navigate('Checkout')
    }

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Your Cart</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>Items</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <View>

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Image
                                        style={{ height: 48, width: 48, borderRadius: 10 }}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

                                        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft: 10, color: 'grey' }}>{item.price}</Text>

                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <IconButton
                                            icon="plus-circle"
                                            size={24}
                                            // onPress={incrementCounter}
                                            onPress={() => {
                                                add(
                                                    item.orderitemid,
                                                    item.Quantity + 1,
                                                    item.price
                                                  );
                                              }} 
                                        />
                                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{counter}</Text>
                                        <IconButton
                                            icon="minus-circle"
                                            size={24}
                
                                             onPressIn={() => {
                                                remove(
                                                  item.orderitemid,
                                                  item.Quantity - 1,
                                                  item.price
                                                );
                                              }} 
                                            // onPress={decrementCounter} 
                                        />
                                        <View>
                                            <IconButton
                                                icon="delete"
                                                size={24}
                                                onPress={() => {
                                                    del(item.orderitemid);
                                                  }} 
                                            />
                                        </View>
                                    </View>

                                </View>

                            </View>
                        </View>
                    )}
                />

                <View style={{ margin: 20 }}>
                    <Card style={{ margin: 20, backgroundColor: '#f8f4fc', padding: 20, borderRadius: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>600</Text>
                        </View>
                    </Card>
                    <Button icon="cart-check" mode="contained" style={{ backgroundColor: '#f87c28' }} onPress={RedirectToCheckout}>
                        Checkout
                    </Button>
                </View>
            </View>
        </SafeAreaView>

    );
}