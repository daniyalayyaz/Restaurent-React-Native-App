import { Button, Card } from "react-native-paper";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Clientlogin() {
    const navigation = useNavigation();

    //   const moves = () => {
    //     navigation.navigate("Choosesignuptype");
    //   };
    return (
        <ImageBackground
            source={
                "https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            }
            style={{ height: "100%", width: "100%" }}
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
                <Card style={{ padding: "40px", borderRadius: "20px", width: "90%", height: '70%', }}>
                    <Image
                        style={{ height: "35%", width: "100%", marginBottom: '20px' }}
                        source={'https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg'}
                    />
                    <Text
                        style={{
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: "20px",
                            fontSize: "20px",
                        }}
                    >
                        WELCOME BACK
                    </Text>
                    <View>
                        <TextInput
                            placeholder="Email"
                            style={styles.Textfields}
                        ></TextInput>
                        <TextInput
                            placeholder="Password"
                            style={styles.Textfields}
                        ></TextInput>

                        <Button
                            style={{ marginBottom: "20px", backgroundColor: "blue" }}
                            mode="contained"
                        >
                            Login
                        </Button>
                    </View>
                    <Text style={{ textAlign: "center", marginBottom: "10px" }}>
                        Don't have an account?
                    </Text>
                    <Button color="grey" onPress={() => moves()}>
                        Sign Up
                    </Button>
                </Card>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    socialbuttonfb: {
        borderRadius: "20px",
        backgroundColor: "#4267B2",
        marginBottom: "20px",
    },
    socialbuttontw: {
        borderRadius: "20px",
        backgroundColor: "#1DA1F2",
        marginBottom: "20px",
    },
    Textfields: {
        borderRadius: "20px",
        borderColor: "grey",
        padding: "10px",
        marginBottom: "20px",
    },
});