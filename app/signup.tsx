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

type RootStackParamList = {
  login: undefined;
  signup: undefined;
  index: undefined;
};

type SignupScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signup"
>;

export default function SignupScreen() {
  const navigation = useNavigation<SignupScreenNavigationProp>();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Show success alert
    Alert.alert("Success", "Account created successfully!");

    // After 5 seconds, navigate to login
    setTimeout(() => {
      navigation.replace("login"); // lowercase to match AppNavigator
    }, 5000);
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
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.caption}>Begin your luxury dining journey.</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#d1b87a"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#d1b87a"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#d1b87a"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#d1b87a"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginRedirect}
          onPress={() => navigation.replace("login")} // lowercase
        >
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginHighlight}>Sign In</Text>
          </Text>
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
  title: { fontSize: 22, fontWeight: "600", color: "#d4af37", textAlign: "center", marginBottom: 8 },
  caption: { fontSize: 14, color: "#eee", textAlign: "center", marginBottom: 24 },
  input: { borderWidth: 1, borderColor: "#d4af37", borderRadius: 8, paddingVertical: 12, paddingHorizontal: 16, color: "#fff", marginBottom: 16, fontSize: 16 },
  signUpBtn: { backgroundColor: "#d4af37", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  signUpText: { fontSize: 16, fontWeight: "700", color: "#000" },
  loginRedirect: { alignItems: "center" },
  loginText: { fontSize: 14, color: "#fff" },
  loginHighlight: { color: "#d4af37", fontWeight: "700" },
});
