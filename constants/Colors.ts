/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

// Theme colors mapped from theme.css for React Native
// Supports both light and dark mode

const newTintColorLight = '#ea580c'; // orange-600
const newTintColorDark = '#ea580c';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    icon: '#687076',
    tabIconDefault: '#687076',
    card: '#ffffff',
    cardForeground: '#232323',
    popover: '#ffffff',
    popoverForeground: '#232323',
    primary: '#030213',
    primaryForeground: '#ffffff',
    secondary: '#f2f2fa',
    secondaryForeground: '#030213',
    muted: '#ececf0',
    mutedForeground: '#717182',
    accent: '#e9ebef',
    accentForeground: '#030213',
    destructive: '#d4183d',
    destructiveForeground: '#ffffff',
    border: 'rgba(0,0,0,0.1)',
    input: '#f3f3f5',
    switchBackground: '#cbced4',
    ring: '#b4b4b4',
    tint: newTintColorLight,
    tabIconSelected: newTintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    card: '#232323',
    cardForeground: '#f9fafb',
    popover: '#232323',
    popoverForeground: '#f9fafb',
    primary: '#f9fafb',
    primaryForeground: '#232323',
    secondary: '#444444',
    secondaryForeground: '#f9fafb',
    muted: '#444444',
    mutedForeground: '#b4b4b4',
    accent: '#444444',
    accentForeground: '#f9fafb',
    destructive: '#d4183d',
    destructiveForeground: '#ffffff',
    border: '#444444',
    input: '#444444',
    ring: '#707070',
    tint: newTintColorDark,
    tabIconSelected: newTintColorDark,
  },
};
