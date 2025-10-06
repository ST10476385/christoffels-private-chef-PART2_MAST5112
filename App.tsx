import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import CustomSplash from "@/app/(tabs)/SplashScreen";
import AppNavigator from "./AppNavigator";

// ...existing code...
export default function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    let mounted = true;

    const prepare = async () => {
      try {
        // Prevent the native splash from auto-hiding
        await SplashScreen.preventAutoHideAsync();

        // Render the React splash first so the user never sees a white native flash
        if (mounted) setShowSplash(true);

        // Give React a tick so CustomSplash mounts
        await new Promise((r) => setTimeout(r, 50));

        // Hide the native splash to reveal the React splash
        await SplashScreen.hideAsync();

        // Keep the React splash visible for 5 seconds
        await new Promise((r) => setTimeout(r, 5000));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("Splash error:", e);
      } finally {
        if (mounted) setShowSplash(false);
      }
    };

    prepare();

    return () => {
      mounted = false;
    };
  }, []);

  if (showSplash) {
    return <CustomSplash />;
  }

  return <AppNavigator />;
}
