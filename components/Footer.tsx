import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type HeaderProps = {
  navigation?: any;
};

const navLinks = [
  { label: 'Home', screen: 'Home' },
  { label: 'Menu', screen: 'Menu' },
  { label: 'Bookings', screen: 'Bookings' },
  { label: 'About', screen: 'About' },
  { label: 'Profile', screen: 'Profile' },
];

export default function Footer({ navigation }: HeaderProps) {
  return (
    <View style={styles.header}>
      {/* Logo + Restaurant Name */}
      <View style={styles.brandContainer}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
        <View>
          <Text style={styles.brandName}>Christoffel</Text>
          <Text style={styles.tagline}>Private Chef • Bespoke Dining</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <View style={{ paddingHorizontal: 8, marginBottom: 8 }}>
        <Text style={{ color: '#fff', fontSize: 13, marginBottom: 4 }}>123 Gourmet Lane, Cape Town</Text>
        <Text style={{ color: '#fff', fontSize: 13, marginBottom: 4 }}>Open: Tue - Sun, 6pm - 11pm</Text>
        <Text style={{ color: '#fff', fontSize: 13 }}>Phone: +27 21 555 0123</Text>
      </View>

      {/* Nav Links */}
      <View style={styles.navLinks}>
        {navLinks.map((link) => (
          <TouchableOpacity
            key={link.label}
            onPress={() => navigation && navigation.navigate(link.screen)}
          >
            <Text style={styles.navText}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        <FontAwesome name="facebook" size={20} color="#fff" style={styles.icon} />
        <FontAwesome name="instagram" size={20} color="#fff" style={styles.icon} />
        <FontAwesome name="twitter" size={20} color="#fff" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000', // black background
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#2c2c2c',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
  },
  brandName: {
    color: '#FFD700',
    fontWeight: '700',
    fontSize: 18,
  },
  tagline: {
    color: '#d1b87a',
    fontSize: 12,
    fontStyle: 'italic',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  navText: {
    color: '#d1b87a',
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  icon: {
    marginHorizontal: 8,
  },
});
