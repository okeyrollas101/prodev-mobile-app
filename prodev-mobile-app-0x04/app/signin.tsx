import { styles } from "@/styles/_join";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { FACEBOOKLOGO, GOOGLELOGO, HEROLOGOGREEN } from "@/constants";


export default function SignIN() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.iconsection}>
                        <Ionicons name="arrow-back" size={25} onPress={() => router.back()} />
                        <Image source={HEROLOGOGREEN} />
                    </View>
                    <View style={styles.titleTextGroup}>
                        <Text style={styles.titleText}>Sign in to your</Text>
                        <Text style={styles.titleText}>Account</Text>
                        <Text style={styles.subText}>
                            Enter your email and password to sign in.
                        </Text>
                    </View>

                    <View style={styles.formGroup}>
                        <View>
                            <Text style={styles.formLabel}>Email</Text>
                            <TextInput keyboardType="email-address" style={styles.formControl} />
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.formLabel}>Password</Text>
                            <View style={styles.passwordControl}>
                                <TextInput style={styles.formControl} secureTextEntry/>
                                <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                            </View>
                        </View>
                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                    </View>

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>

                    <View style={styles.dividerGroup}>
                        <View
                            style={styles.divider}
                        ></View>
                        <Text
                            style={styles.dividerText}
                        >
                            OR
                        </Text>
                        <View
                            style={styles.divider}
                        ></View>
                    </View>

                    <View style={styles.secondaryButtonGroup}>
                        <TouchableOpacity style={styles.secondaryButton}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 5,
                                }}
                            >
                                <Image source={GOOGLELOGO} />
                                <Text style={styles.secondaryButtonText}>
                                    Continue with Google
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 5,
                                }}
                            >
                                <Image source={FACEBOOKLOGO} />
                                <Text style={styles.secondaryButtonText}>
                                    Continue with Facebook
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.signupgroup}>
                        <Text style={styles.signupTitleText}>Don't have an account?</Text>
                        <Text style={styles.signupSubTitleText} onPress={() => router.push("/join")}>Join now</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider >
    );
}
