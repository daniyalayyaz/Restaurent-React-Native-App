import { Button, Card, Divider } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
    Dimensions,
    Platform,
    SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChangePassword() {
    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;
    const navigation = useNavigation();
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0 }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "100%",
                }}
            >
                <Card style={{ padding: 40, borderRadius: 20, width: width / 1.12, height: height / 1.5 }}>
                    <ScrollView>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        </View>
                        <Text
                            style={{
                                fontWeight: "bold",
                                textAlign: 'left',
                                marginBottom: 20,
                                fontSize: 20,
                            }}
                        >
                            Change Password
                        </Text>
                        <Divider style={{ marginBottom: 10 }} />
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Old Password</Text>
                            <TextInput
                                placeholder="Enter Old Password"
                                style={styles.Textfields}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>New Password</Text>
                            <TextInput
                                placeholder="Enter New Password"
                                style={styles.Textfields}
                            ></TextInput>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'grey' }}>Confirm New Password</Text>

                            <TextInput
                                placeholder="Enter Confirm New Password"
                                style={styles.Textfields}
                            ></TextInput>


                            <Button
                                style={{ marginBottom: 20, backgroundColor: "#f87c28" }}
                                mode="contained"
                            >
                                Update Password
                            </Button>

                        </View>
                    </ScrollView>
                </Card>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Textfields: {
        borderRadius: 20,
        borderColor: "grey",
        padding: 10,
        marginBottom: 20,
    },
});