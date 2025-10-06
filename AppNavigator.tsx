import React from "react";
import { Platform, View, StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import CustomHeader from "@/components/CustomHeader";

// screens
import splash from "@/app/(tabs)/SplashScreen";
import login from "@/app/(tabs)/login";
import signup from "@/app/signup";
import index from "@/app/(tabs)/index";
import about from "@/app/(tabs)/about";
import menu from "@/app/(tabs)/menu";
import bookings from "@/app/(tabs)/bookings";
import profile from "@/app/(tabs)/profile";
import dishdetail from "@/app/DishDetailScreen";

// ---------- STACK TYPES ----------
export type RootStackParamList = {
  splash: undefined;
  login: undefined;
  signup: undefined;
  MainTabs: undefined;
  dishdetail: {
    dish?: {
      name?: string;
      description?: string;
      price?: string;
    };
  };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// ---------- DARK THEME ----------
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#0B1220",
    card: "#0B1220",
    text: "#FFFFFF",
    border: "transparent",
  },
};

// ---------- MAIN TABS ----------
function MainTabs() {
  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
            marginBottom: Platform.OS === "ios" ? 0 : 4,
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#0B1220",
            borderRadius: 30,
            height: Platform.OS === "ios" ? 80 : 70,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
          },
          tabBarActiveTintColor: "#FFD700",
          tabBarInactiveTintColor: "#A1A1A1",
        }}
      >

        <Tab.Screen
          name="login"
          component={login}
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <Feather name="log-in" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="index"
          component={index}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="about"
          component={about}
          options={{
            title: "About",
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="menu"
          component={menu}
          options={{
            title: "Menu",
            tabBarIcon: ({ color }) => (
              <Feather name="menu" size={22} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="bookings"
          component={bookings}
          options={{
            title: "Bookings",
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="calendar-alt" size={20} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="profile"
          component={profile}
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

// ---------- APP NAVIGATOR ----------
export default function AppNavigator() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ header: () => <CustomHeader /> }}
      >
        <Stack.Screen
          name="splash"
          component={splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          component={signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="dishdetail"
          component={dishdetail}
          options={{ headerShown: false, presentation: "card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    backgroundColor: "#0B1220",
  },
});
