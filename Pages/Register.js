import { Button, Card } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ClientSignup() {
    const navigation = useNavigation();
    const RedirectToLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <ImageBackground
            source={
                "https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            }
            style={{ height: "100vh", width: "100%" }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Card style={{ padding: "40px", borderRadius: "20px", width: "90%", height: "90vh" }}>
                    <ScrollView>
                    <Image
                        style={{ height: "35%", width: "100%", marginBottom: '20px' }}
                        source={'https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg'}
                    />
                    <Text
                        style={{
                            fontWeight: "bold",
                            textAlign: "start",
                            marginBottom: "20px",
                            fontSize: "20px",
                        }}
                    >
                        Create an Account
                    </Text>
                    <View>
                        <TextInput
                            placeholder="Name"
                            style={styles.Textfields}
                        ></TextInput>
                        <TextInput
                            placeholder="Email"
                            style={styles.Textfields}
                        ></TextInput>
                        <TextInput
                            placeholder="Phone"
                            style={styles.Textfields}
                        ></TextInput>
                        <TextInput
                            placeholder="Password"
                            style={styles.Textfields}
                        ></TextInput>
                        <TextInput
                            placeholder="Confirm Password"
                            style={styles.Textfields}
                        ></TextInput>
                        <Button
                            style={{ marginBottom: "20px", backgroundColor: "#f87c28" }}
                            mode="contained"
                        >
                            Signup
                        </Button>
                        <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                        Already have an account?
                    </Text>
                    <Button color="grey" onPress={() => RedirectToLogin()}>
                        Login
                    </Button>
                    </View>
                    </ScrollView>
                </Card>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Textfields: {
        borderRadius: "20px",
        borderColor: "grey",
        padding: "10px",
        marginBottom: "20px",
    },
});