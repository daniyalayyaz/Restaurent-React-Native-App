import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect} from 'react'
export default function DetailPage() {
    const getstatus =AsyncStorage.getItem("status");
    const [items, setItems] = useState([]);
    const [charges, setcharges] = useState("")
    const [address, setAddress] = useState([]);
    const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1)
 
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [counter, setCounter] = React.useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter < 1) {
        decrementCounter = () => setCounter(1);
    }
    const navigation = useNavigation();
    const RedirectToCart = () => {
        navigation.navigate("Cart");
    };
    async function AddtoCart() {
        const cartDetail = {
          price: items.Price,
          ProductID: items.ID,
          quantity: quantity,
          userID: JSON.parse(await AsyncStorage.getItem("currentuser"))[0].customer_Id,
          order_id: items.ID
        }
    
        console.log(cartDetail)
        try {
          // http://localhost:5000
          const result = await axios.post('http://localhost:5000/api/admin/cart', cartDetail)
          console.log(result)
          alert("Item has been added to cart")
          setQuantity('')
        } catch (error) {
          console.log(error);
          alert("Failed! Try again later")
        }
    
        setShow(false);
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
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <ScrollView>

                    <View>
                        <Image
                            style={{ height: height / 2, width: width, marginBottom: 20 }}
                            source={{ uri: 'https://propakistani.pk/wp-content/uploads/2022/04/front-view-tasty-meat-burger-wit.jpg' }}
                        />
                        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 10 }}>Steak Burger</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10, color: 'grey' }}>1000 Rs</Text>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <IconButton
                                icon="plus-circle"
                                size={24}
                                // onPress={incrementCounter}
                                onPress={() => {
                                    add(
                                        items.orderitemid,
                                        items.Quantity + 1,
                                        items.price
                                      );
                                  }} 
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{counter}</Text>
                            <IconButton
                                icon="minus-circle"
                                size={24}
                                // onPress={decrementCounter}
                                onPress={() => {
                                    remove(
                                      items.orderitemid,
                                      items.Quantity - 1,
                                      items.price
                                    );
                                  }} 
                            />
                        </View>

                        <Text style={{ fontSize: 16, fontWeight: 'bold', padding: 20 }}>Description</Text>
                        <Text style={{ fontSize: 16, color: 'grey', padding: 20, textAlign: 'justify' }}>"Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"</Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button icon="cart" mode="contained" style={{ backgroundColor: '#f87c28' }} onPress={RedirectToCart}>
                            Add to cart
                        </Button>
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>

    );
}