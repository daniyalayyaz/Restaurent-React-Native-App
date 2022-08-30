import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react'

export default function Cart() {
    const DATA = [
        {
            img: 'https://propakistani.pk/wp-content/uploads/2022/04/front-view-tasty-meat-burger-wit.jpg',
            title: 'Steak Burger',
            price: '100 Rs'
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
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter < 1) {
        decrementCounter = () => setCounter(1);
    }
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <View style={{padding: '20px'}}>
                    <Text style={{ fontSize: '24px', fontWeight: 'bold'}}>Your Cart</Text>
                    <Text style={{ fontSize: '18px', fontWeight: 'bold', color: 'grey'}}>Items</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <View>

                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                                    <Image
                                        style={{ height: "48px", width: "48px", borderRadius: '10px' }}
                                        source={item.img}
                                    />
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>

                                        <Text style={{ fontSize: '16px', fontWeight: 'bold', paddingLeft: '10px' }}>{item.title}</Text>
                                        <Text style={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '10px', color: 'grey' }}>{item.price}</Text>

                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'right' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <IconButton
                                            icon="plus-circle"
                                            size={24}
                                            onPress={incrementCounter}
                                        />
                                        <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>{counter}</Text>
                                        <IconButton
                                            icon="minus-circle"
                                            size={24}
                                            onPress={decrementCounter}
                                        />
                                        <View>
                                            <IconButton
                                                icon="delete"
                                                size={24}
                                            />
                                        </View>
                                    </View>

                                </View>

                            </View>
                        </View>
                    )}
                />

                <View style={{ margin: '20px' }}>
                    <Card style={{margin: '20px', backgroundColor: '#f8f4fc', padding: '20px', borderRadius: '10px'}}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontSize: '16px', fontWeight: 'bold'}}>Total</Text>
                            <Text style={{ fontSize: '16px', fontWeight: 'bold'}}>600</Text>
                        </View>
                    </Card>
                    <Button icon="cart-check" mode="contained" style={{ backgroundColor: '#f87c28' }} onPress={() => console.log('Pressed')}>
                        Checkout
                    </Button>
                </View>
            </View>
        </SafeAreaView>

    );
}