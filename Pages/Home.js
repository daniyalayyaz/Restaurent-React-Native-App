import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function Home() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const DATA = [
        {
            icon: 'food',
            title: 'Fast Food',
        },
        {
            icon: 'food-apple',
            title: 'Fruits',
        },
        {
            icon: 'glass-cocktail',
            title: 'Juices',
        },
        {
            icon: 'coffee',
            title: 'Hot Beverages',
        },
        {
            icon: 'hamburger',
            title: 'Burgers',
        },
    ];
    const GridData = [
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

    const navigation = useNavigation();

    const move = () => {
        navigation.navigate('Detail-Page')
    }
    const moves = () => {
        navigation.navigate('QuizCategory')
    }
    const movess = () => {
        navigation.navigate('Your Bookings')
    }
    const mov = () => {
        navigation.navigate('Trending')
    }
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'white', overflow: 'hidden' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '20px' }}>
                    <Image
                        style={{ height: "50px", width: "50px" }}
                        source={'https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg'}
                    />
                    <View style={{ backgroundColor: '#f8f4fc', borderRadius: '10px' }}>
                        <IconButton
                            icon="cart"
                            size={24}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>

                </View>
                <View style={{padding: '20px'}}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: '22px', color: 'black', margin: '20px' }}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        data={DATA}
                        horizontal='true'
                        renderItem={({ item, index }) => (
                            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px', backgroundColor: '#f8f4fc', padding: '20px', borderRadius: '12px' }}>
                                <IconButton
                                    icon={item.icon}
                                    iconColor='orange'
                                    size={20}
                                    onPress={() => console.log('Pressed')}
                                />
                                <Text>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>
                <View>
                    <FlatList
                        data={GridData}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets={true}
                        removeClippedSubviews={true}
                        enableEmptySections={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={move}>
                                <Card>
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px', backgroundColor: '#f8f4fc', padding: '20px', borderRadius: '12px' }}>
                                        <Image source={item.img} style={{ height: '20vh', width: '35vw', borderRadius: '10px' }} />
                                        <Text style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>{item.title}</Text>
                                        <Text>{item.price}</Text>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
}