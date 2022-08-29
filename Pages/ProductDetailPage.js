import { Button, Card, IconButton, Searchbar } from 'react-native-paper';
import { Text, View, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

export default function DetailPage() {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', backgroundColor: 'white', overflow: 'hidden' }}>
                <View>
                    <Image
                        style={{ height: "50vh", width: "100%", marginBottom: '20px' }}
                        source={'https://propakistani.pk/wp-content/uploads/2022/04/front-view-tasty-meat-burger-wit.jpg'}
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                            <Text style={{ fontSize: '24px', fontWeight: 'bold', paddingLeft: '10px' }}>Steak Burger</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                            <Text style={{ fontSize: '20px', fontWeight: 'bold', paddingRight: '10px', color: 'grey' }}>1000 Rs</Text>

                        </View>

                    </View>
                    <Text style={{ fontSize: '16px', fontWeight: 'bold', padding: '20px' }}>Description</Text>
                    <Text style={{ fontSize: '16px', color: 'grey', padding: '20px', textAlign: 'justify' }}>"Juicy, big, loaded with toppings of my choice." "High quality beef medium to well with cheese and bacon on a multigrain bun." "A huge single or triple burger with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!"</Text>
                </View>
                <View style={{ margin: '20px' }}>
                    <Button icon="cart" mode="contained" style={{ backgroundColor: '#f87c28' }} onPress={() => console.log('Pressed')}>
                        Add to cart
                    </Button>
                </View>
            </View>
        </SafeAreaView>

    );
}