import React, { useEffect, useRef } from "react";
import { 
  SafeAreaView, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Animated 
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type locally instead of importing
type RootStackParamList = {
  splash: undefined;
  login: undefined;
  signup: undefined;
  index: undefined;
  dishdetail: {
    dish?: {
      name?: string;
      description?: string;
      price?: string;
      image?: any;
    };
  };
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'splash'>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start fade animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Navigate to login after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        accessibilityLabel="splash-background"
        source={require("@/assets/images/splash.jpg")}
        style={styles.background}
        blurRadius={3}
        resizeMode="cover"
      >
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Christoffel</Text>
          <Text style={styles.subtitle}>PRIVATE CHEF</Text>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#FFD700",
    fontFamily: "serif",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    letterSpacing: 2,
    marginTop: 5,
  },
});