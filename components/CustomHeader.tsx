import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const navLinks = [
  { name: 'Home', route: 'index' },
  { name: 'About Us', route: 'about' },
  { name: 'Courses', route: 'courses' },
  { name: 'Events', route: 'events' },
  { name: 'Testimonials', route: 'testimonials' },
  { name: 'Contact', route: 'contact' },
  { name: 'Fee Calculator', route: 'calculator' },
];

export default function CustomHeader() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  // Helper to check if a link is active
  const isActive = (linkRoute: string) => {
    // For the home page, route.name might be 'index' or 'Home'
    if (linkRoute === 'index' && (route.name === 'index' || route.name === 'Home')) return true;
    return route.name === linkRoute;
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate('index')}>
  <Image source={require('@/assets/images/logo.jpg')} style={styles.logo} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.brandOrange}>Empowering</Text>
          <Text style={styles.brandGreen}>Nation</Text>
        </View>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.linksContainer}>
        {navLinks.map((link) => (
          <TouchableOpacity
            key={link.route}
            style={[styles.linkButton, isActive(link.route) && (link.route === 'courses' ? styles.activeCourses : styles.activeLinkButton)]}
            onPress={() => navigation.navigate(link.route)}
          >
            <Text style={[styles.linkText, isActive(link.route) && (link.route === 'courses' ? styles.activeCoursesText : styles.activeLinkText)]}>
              {link.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.donateButton} onPress={() => navigation.navigate('donate')}>
        <Text style={styles.donateButtonText}>Donate Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fdba74',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'space-between',
    elevation: 2,
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginRight: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0fdf4',
    borderWidth: 2,
    borderColor: '#bbf7d0',
  },
  brandOrange: {
    fontSize: 18,
    color: '#ea580c',
    fontWeight: '700',
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  brandGreen: {
    fontSize: 14,
    color: '#15803d',
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 8,
  },
  linkButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: 'transparent',
    marginHorizontal: 2,
  },
  activeLinkButton: {
    backgroundColor: '#ffedd5',
  },
  activeCourses: {
    backgroundColor: '#bbf7d0',
  },
  linkText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 15,
  },
  activeLinkText: {
    color: '#c2410c',
    fontWeight: '700',
  },
  activeCoursesText: {
    color: '#15803d',
    fontWeight: '700',
  },
  donateButton: {
    backgroundColor: '#ea580c',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 8,
    elevation: 2,
  },
  donateButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});
