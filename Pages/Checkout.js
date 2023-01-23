import { RadioButton, Button, Divider, Card, Dialog, Provider, Portal } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, Image, Platform, TextInput, ScrollView,ToastAndroid,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { useState ,useEffect} from 'react'
import axios from "axios";
export default function Checkout() {
    const [value, setValue] = useState('delivery');
    const [comment, setcomment] = useState();
    const [cashondelivery, setcashondelivery] = useState(false)
  const [paywithcard, setpaywithcard] = useState(false)
    const [val, setVal] = useState('COD');
    const [visible, setVisible] = useState(false);
    const [house, sethouse] = useState("");
    const [postcode, setpostcode] = useState("");
    const [flat, setflat] = useState("");
    const [street, setstreet] = useState("");
    const [town, settown] = useState("");
    const showModal = () => setVisible(true);
    const [address, setAddress] = useState([]);
    const hideDialog = () => setVisible(false);
    const [show, setShow] = useState(false);
    const visibleModal = () => setShow(true);
    const unvisibleDialog = () => setShow(false);
    const [confirmation, setConfirmation] = useState(false);
    const visibleconfirmation = () => setConfirmation(true);
    const unvisibleconfirmation = () => setConfirmation(false);
    const [delivery_time, setdelivery_time] = useState("N/A")

    const [termcondition, settermcondition] = useState(false)
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    async function addAddress() {
        const info = {
          house,
          postcode,
          flat,
          street,
          town,
          customer_Id:await AsyncStorage.getItem("currentuser")[0]
            .customer_Id,
        };
        try {
          const data = (
            await axios.post(
              "https://apinodejs.creativeparkingsolutions.com/api/user/addaddress",
              info
            )
          ).data;
          console.log(data.data);
          refClose.current.click();
          updateAddress();
          ToastAndroid.show("New address added");
    
          sethouse("");
          setpostcode("");
          setflat("");
          setstreet("");
          settown("");
        } catch (error) {
          console.log(error);
          ToastAndroid.show("Failed! Try again later");
        }
      }
      async function updateAddress() {
        const user = {
          customer_Id: await AsyncStorage.getItem("currentuser")[0]
            .customer_Id,
        };
        try {
          const data = await (
            await axios.post(
              "https://apinodejs.creativeparkingsolutions.com/api/user/getaddress",
              user
            )
          ).data;
          setAddress(data.data);
        } catch (error) {
          console.log(error);
        }
      }
      async function checkout() {
        const user = {
          comment,
          customer_Id: await AsyncStorage.getItem("currentuser")[0]
            .customer_Id,
          total: visible === true ? checkoutTotal : total,
          cashondelivery,
          paywithcard,
          delivery_time
        };
    
        if (termcondition === true && visible === true) {
          try {
            // setloading(true)
            const result = await axios.post(
              "https://apinodejs.creativeparkingsolutions.com/api/admin/cartcheckout",
              user
            ).data;
            console.log(result);
           ToastAndroid.show("Checkout Successfull");
            // setloading(true)
            setInterval(() => {
              window.location.href = "/";
            }, 2000);
    
            setcomment("");
          } catch (error) {
            console.log(error);
           ToastAndroid.show("Something went wrong!");
            // setloading(true)
          }
        }
        else if (termcondition === true && visible === false) {
          try {
            // setloading(true)
            const result = await axios.post(
              "https://apinodejs.creativeparkingsolutions.com/api/admin/cartcheckoutcollection",
              user
            ).data;
            console.log(result);
            ToastAndroid.show("Checkout Successfull");
            // setloading(true)
            setInterval(() => {
              window.location.href = "/";
            }, 2000);
    
            setcomment("");
          } catch (error) {
            console.log(error);
            ToastAndroid.show("Something went wrong!");
            // setloading(true)
          }
        }
        else {
          ToastAndroid.show("Please Read out our term and conditions and mark agree");
        }
    
      }
    return (
        <Provider>
            <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
                <View style={{ display: 'flex', flexDirection: 'column', height: height, backgroundColor: 'white', overflow: 'hidden' }}>
                    <ScrollView>
                        <View style={{ padding: 20 }}>
                            <Card style={{
                                padding: 20, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 6,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Delivery/Collection</Text>
                                <Divider />
                                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                                        <RadioButton value="delivery" color='#f87c28' />
                                        <Text>Delivery</Text>

                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                                        <RadioButton value="collection" color='#f87c28' />
                                        <Text>Collection</Text>

                                    </View>
                                </RadioButton.Group>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Delivery Address</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey', marginTop: 10 }}>House # 30, B Block, Johar town LHR.</Text>


                                <Button
                                    style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 10 }}
                                    mode="contained" onPress={showModal}                               >
                                    Add New Address
                                </Button>
                            </Card>
                        </View>
                        <Portal>
                            <Dialog visible={visible} onDismiss={hideDialog}>
                                <Dialog.Content>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>New Address</Text>
                                    <TextInput
                                        placeholder="Enter New Address"
                                        multiline={true}
                                        numberOfLines={5}
                                        style={{
                                            borderRadius: 20,
                                            borderColor: "grey",
                                            padding: 10,
                                            marginBottom: 20,
                                        }}
                                    ></TextInput>
                                          <TouchableOpacity >
        
     

                                    <Button
                                        style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 10 }}
                                        mode="contained"      onPress={addAddress}                          >
                                        Save Changes
                                    </Button>
                                    </TouchableOpacity>
                                </Dialog.Content>
                            </Dialog>
                        </Portal>
                        <View style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
                            <Card style={{
                                padding: 20, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 6,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Payment Method</Text>
                                <Divider />
                                <RadioButton.Group onValueChange={newValue => setVal(newValue)} value={val}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                                        <RadioButton value="COD" color='#f87c28' />
                                        <Text>Cash on delivery</Text>

                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 10 }}>
                                        <RadioButton value="PWD" color='#f87c28' />
                                        <Text>Pay with card</Text>
                                    </View>
                                </RadioButton.Group>
                                <Button
                                    style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 10 }}
                                    mode="contained" onPress={visibleModal}                           >
                                    Add New Card
                                </Button>
                            </Card>
                        </View>
                        <Portal>
                            <Dialog visible={show} onDismiss={unvisibleDialog}>
                                <Dialog.Content>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add Card Details</Text>
                                    <Divider />
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>Name on card</Text>
                                    <TextInput
                                        placeholder="Luke Skywalker"

                                        style={{
                                            borderRadius: 20,
                                            borderColor: "grey",
                                            padding: 10,
                                            marginBottom: 10,
                                        }}
                                    ></TextInput>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Card Number</Text>

                                    <TextInput
                                        placeholder="**** **** **** ****"

                                        style={{
                                            borderRadius: 20,
                                            borderColor: "grey",
                                            padding: 10,
                                            marginBottom: 10,
                                        }}
                                    ></TextInput>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Expiry date</Text>

                                    <TextInput
                                        placeholder="MM/YY"

                                        style={{
                                            borderRadius: 20,
                                            borderColor: "grey",
                                            padding: 10,
                                            marginBottom: 10,
                                        }}
                                    ></TextInput>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Security Code</Text>

                                    <TextInput
                                        placeholder="CVC"

                                        style={{
                                            borderRadius: 20,
                                            borderColor: "grey",
                                            padding: 10,
                                            marginBottom: 10,
                                        }}
                                    ></TextInput>
                                    <Button
                                        style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 10 }}
                                        mode="contained"                                >
                                        Add Card
                                    </Button>
                                </Dialog.Content>
                            </Dialog>
                        </Portal>
                        {/* <View style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
                        <Card style={{
                            padding: 20, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                            shadowRadius: 2,
                            elevation: 6,
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Have a promo code?</Text>
                            <Divider />
                            <TextInput
                                placeholder="Enter your promo code here"
                                style={{
                                    borderRadius: 20,
                                    borderColor: "grey",
                                    padding: 10,
                                    marginBottom: 20,
                                }}
                            ></TextInput>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 10 }}>Only one promo code must be used per order</Text>

                            <Button
                                style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 10 }}
                                mode="contained"                                >
                                Apply
                            </Button>
                        </Card>
                    </View> */}
                        <View style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
                            <Card style={{
                                padding: 20, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 2,
                                elevation: 6,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Checkout</Text>
                                <Divider />
                                <TextInput
                                    placeholder="Instructions"
                                    multiline={true}
                                    numberOfLines={5}
                                    style={{
                                        borderRadius: 20,
                                        borderColor: "grey",
                                        padding: 10,
                                        marginBottom: 20,
                                    }}
                                ></TextInput>
                                <Divider />
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#f87c28' }}>SUBTOTAL</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>$40</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#f87c28' }}>DISCOUNT</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>$0</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#f87c28' }}>TOTAL</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>$40</Text>
                                </View>


                            </Card>
                        </View>
                    </ScrollView>
                    <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <Button
                            style={{ marginBottom: 20, backgroundColor: "#f87c28", marginTop: 20 }}
                            mode="contained"
                            // onPress={visibleconfirmation}
                             onPress={() => {
                                visibleconfirmation
                                checkout
                               }}>
                            Place Order
                        </Button>
                    </View>
                    <Portal>
                            <Dialog visible={confirmation} onDismiss={unvisibleconfirmation}>
                                <Dialog.Content>
                                    <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Image
                                    style={{ height: 100, width: 100, marginBottom: 20 }}
                                    source={require("../assets/success.gif")}
                                />
                                <Text style={{fontWeight: 'bold'}}>Your Order has been taken</Text>
                                </View>
                                </Dialog.Content>
                            </Dialog>
                        </Portal>
                </View>
            </SafeAreaView>
        </Provider>

    );
}