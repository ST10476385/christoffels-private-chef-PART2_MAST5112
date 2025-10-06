import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Navigation types (match your AppNavigator)
type RootStackParamList = {
  login: undefined;
  index: undefined;
  signup: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (email.trim() && password.trim()) {
      navigation.navigate("index"); // goes to home via MainTabs
    } else {
      Alert.alert("Login Failed", "Please enter valid credentials.");
    }
  };

  const handleContinueAsGuest = () => {
    navigation.navigate("index"); // go to home without login
  };

  const handleCreateAccount = () => {
    navigation.navigate("signup"); // go to signup page
  };

  return (
    <ImageBackground
      source={require("@/assets/images/watermark.jpg")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={8}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.brand}>Christoffel</Text>
        <Text style={styles.subtitle}>PRIVATE CHEF</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.caption}>Your luxury dining experience awaits.</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#d1b87a"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#d1b87a"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountBtn}
          onPress={handleCreateAccount}
        >
          <Text style={styles.createAccountText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestBtn} onPress={handleContinueAsGuest}>
          <Text style={styles.guestText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.4)" },
  container: { paddingHorizontal: 24, paddingVertical: 40, justifyContent: "center" },
  brand: { fontSize: 28, fontWeight: "700", color: "#d4af37", textAlign: "center" },
  subtitle: { fontSize: 12, color: "#fff", textAlign: "center", letterSpacing: 2, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: "600", color: "#d4af37", textAlign: "center", marginBottom: 8 },
  caption: { fontSize: 14, color: "#eee", textAlign: "center", marginBottom: 32 },
  input: { borderWidth: 1, borderColor: "#d4af37", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 16, color: "#fff", marginBottom: 16, fontSize: 16 },
  signInBtn: { backgroundColor: "#d4af37", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 16 },
  signInText: { fontSize: 16, fontWeight: "700", color: "#000" },
  createAccountBtn: { marginBottom: 12, alignItems: "center" },
  createAccountText: { fontSize: 16, color: "#fff", fontWeight: "600" },
  guestBtn: { alignItems: "center", paddingVertical: 10 },
  guestText: { fontSize: 14, color: "#d4af37" },
});
