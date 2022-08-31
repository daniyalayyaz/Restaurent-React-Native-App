import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, ScrollView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react'

export default function DetailPage() {
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
                                onPress={incrementCounter}
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{counter}</Text>
                            <IconButton
                                icon="minus-circle"
                                size={24}
                                onPress={decrementCounter}
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