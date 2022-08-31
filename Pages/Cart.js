import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, FlatList, Platform, Image } from 'react-native';
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
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter < 1) {
        decrementCounter = () => setCounter(1);
    }
    const navigation = useNavigation();

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
                                            onPress={incrementCounter}
                                        />
                                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{counter}</Text>
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

                <View style={{ margin: 20 }}>
                    <Card style={{ margin: 20, backgroundColor: '#f8f4fc', padding: 20, borderRadius: 10 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>600</Text>
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