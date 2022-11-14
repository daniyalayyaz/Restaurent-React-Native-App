import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import axios from "axios";

export default function Home() {
    const [category, setcategory] = React.useState([]);
    const [item, setItem] = React.useState([]);
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const DATA = [
        {
            icon: 'food',
            title: 'Fast Food',
            tab: [
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
            ]
        },
        {
            icon: 'food-apple',
            title: 'Fruits',
            tab: []
        },
        {
            icon: 'glass-cocktail',
            title: 'Juices',
            tab: [
                {
                    img: 'https://img.freepik.com/free-photo/fresh-orange-juice_144627-18386.jpg?w=2000',
                    title: 'Orange Juice',
                    price: '100 Rs'
                },
                {
                    img: 'https://static.toiimg.com/photo/75679650.cms',
                    title: 'Cocktail',
                    price: '100 Rs'

                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI51zKzj99XWVd5PLptQjXrU_pcysHuV4Ng&usqp=CAU',
                    title: 'Smoothies',
                    price: '100 Rs'

                },
            ]
        },
        {
            icon: 'coffee',
            title: 'Hot Beverages',
            tab: []
        },
        {
            icon: 'hamburger',
            title: 'Burgers',
            tab: []
        },
    ];
    const [currenttab, setCurrenttab] = React.useState(DATA[0].tab);
    const setcategoryId = (ID) => {
        for (var i = 0; i < item.length; i++) {
            if (item[i].category_id === ID) {
                setItem(item[i])
                console.log(item[i])
            }
        }
    }

    const navigation = useNavigation();

    const RedirectToDetailPage = () => {
        navigation.navigate('Detail-Page')
    }
    const RedirectToCart = () => {
        navigation.navigate('Cart')
    }
    const RedirectToProfile = () => {
        navigation.navigate('Profile')
    }

    React.useEffect(() => {
        async function fetchData() {
            try {
                const data = await (
                    await axios.get(
                        "https://apinodejs.creativeparkingsolutions.com/api/admin/getallmenu"
                    )
                ).data;
                setcategory(data.data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const data = await (
                    await axios.get(
                        "https://apinodejs.creativeparkingsolutions.com/api/admin/getallitems"
                    )
                ).data;
                // console.log(data.data)
                setItem(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View style={{ display: 'flex', flexDirection: 'column', height: height, backgroundColor: 'white', overflow: 'hidden' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={{ uri: 'https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg' }}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#f8f4fc', borderRadius: 10, marginRight: 10 }}>
                            <IconButton
                                icon="cog"
                                size={24}
                                onPress={RedirectToProfile}
                            />
                        </View>
                        <View style={{ backgroundColor: '#f8f4fc', borderRadius: 10 }}>
                            <IconButton
                                icon="cart"
                                size={24}
                                onPress={RedirectToCart}
                            />
                        </View>
                    </View>

                </View>
                <View style={{ padding: 20 }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black', margin: 20 }}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        data={category}
                        horizontal
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={item.key} onPress={() => setcategoryId(item.ID)}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: '#f8f4fc', padding: 20, borderRadius: 12 }}>
                                    {/* <IconButton
                                        icon={item.icon}
                                        iconColor='orange'
                                        size={20}
                                    /> */}
                                    <Text>{item.Name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        // data={currenttab}
                        data={item}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={RedirectToDetailPage}>
                                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 10, backgroundColor: '#f8f4fc', padding: 20, borderRadius: 12 }}>
                                    <Image source={{ uri: item.Image }} style={{ height: height / 5, width: width / 3, borderRadius: 10 }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{item.Title}</Text>
                                    <Text>{item.Price}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>

    );
}