

import Footer from '@/components/Footer';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation() as any;
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Today's Signature Dish:</Text>
        <Text style={styles.heroHighlight}>Truffle Risotto</Text>
        <Text style={styles.heroSubtitle}>
          A private dining experience curated by Chef Christoffel — where elegance meets flavor.
        </Text>

        <View style={styles.heroButtons}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.primaryButtonText}>View Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('About')}>
            <Text style={styles.secondaryButtonText}>About the Chef</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Discover Feature Card */}
      <View style={styles.featureCard}>
        <Image source={require('@/assets/images/burrata-heirloom.jpg')} style={styles.featureImage} />
        <View style={styles.featureContent}>
          <Text style={styles.featureTitle}>Discover Christoffel’s Signature Flavors</Text>
          <TouchableOpacity style={styles.learnMoreBtn} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Explore Menu */}
      <Text style={styles.sectionTitle}>Explore Menu</Text>
      <View style={styles.gridRow}>
        <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Menu', { category: 'STARTERS' })}>
          <Image source={require('@/assets/images/starters.jpg')} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Appetizers & Soups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Menu', { category: 'MAINS' })}>
          <Image source={require('@/assets/images/mains.jpg')} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Main Courses</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridRow}>
        <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Menu', { category: 'DESSERTS' })}>
          <Image source={require('@/assets/images/desserts.jpg')} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Desserts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridCard} onPress={() => navigation.navigate('Menu', { category: 'WINES' })}>
          <Image source={require('@/assets/images/drinks.jpg')} style={styles.gridImage} />
          <Text style={styles.gridLabel}>Wine & Drinks</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom CTA */}
      <View style={styles.bottomCta}>
        <Text style={styles.bottomCtaText}>
          “Relax and indulge in a bespoke dining journey — crafted exclusively for your palate.”
        </Text>
        <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Bookings')}>
          <Text style={styles.bookButtonText}>Book a Private Dining Experience</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // HERO SECTION
  heroSection: {
    padding: 24,
    backgroundColor: '#111827',
  },
  heroTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 4,
  },
  heroHighlight: {
    color: '#fbbf24',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#d1d5db',
    fontSize: 14,
    marginBottom: 14,
  },
  heroButtons: {
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#f97316',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
    marginRight: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: '700',
  },

  // FEATURE CARD
  featureCard: {
    flexDirection: 'row',
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  featureImage: {
    width: 100,
    height: 100,
  },
  featureContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
  },
  learnMoreBtn: {
    backgroundColor: '#fbbf24',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },

  // GRID
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
    color: '#111827',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 14,
  },
  gridCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  gridImage: {
    width: '100%',
    height: 120,
  },
  gridLabel: {
    padding: 8,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },

  // BOTTOM CTA
  bottomCta: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#111827',
    marginTop: 20,
  },
  bottomCtaText: {
    color: '#9ca3af',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bookButton: {
    backgroundColor: '#f97316',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});
