import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AboutChefScreen() {
  const navigation = useNavigation() as any;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Custom white header bar for better visibility */}
      <View style={styles.topHeader}></View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Meet Chef Christoffel</Text>
          <Text style={styles.heroSubtitle}>MASTER CULINARY ARTIST</Text>
          <Image 
            source={require('@/assets/images/chef.jpg')} 
            style={styles.heroImage} 
            resizeMode="contain"
          />
        </View>

        {/* Bio Section */}
        <View style={styles.bioSection}>
          <Text style={styles.bioText}>
            With over three decades of culinary excellence, Chef Christoffel has earned his name among the world’s most innovative and revered culinary artists.
            His extraordinary journey began in the prestigious kitchens of Amsterdam, where he trained under legendary Michelin-starred mentors.
          </Text>

          <Text style={styles.bioText}>
            Born into a family of artisan bakers in the Netherlands, Christoffel’s passion for culinary arts was evident from childhood. His grandmother’s traditional
            recipes became the foundation upon which he built his revolutionary approach to modern gastronomy, blending heritage with innovation.
          </Text>

          <Text style={styles.bioText}>
            His flagship restaurant, “Lumière Dorée,” has earned multiple Michelin stars and is ranked among the world’s top dining destinations.
            His pioneering farm-to-table philosophy has redefined luxury dining, setting new standards for sustainability in haute cuisine.
          </Text>

          <Text style={styles.bioText}>
            Beyond the kitchen, Chef Christoffel is a mentor, educator, and philanthropist. His “Nourish Tomorrow” foundation provides culinary education
            to underserved communities and promotes sustainable farming practices globally.
          </Text>
        </View>

        {/* Distinguished Honors */}
        <View style={styles.honorsSection}>
          <Text style={styles.honorsTitle}>Distinguished Honors</Text>
          <View style={styles.honorItem}>
            <Text style={styles.honorYear}>2024</Text>
            <Text style={styles.honorText}>James Beard Outstanding Chef</Text>
          </View>
          <View style={styles.honorItem}>
            <Text style={styles.honorYear}>2024</Text>
            <Text style={styles.honorText}>#2 World’s 50 Best Restaurants</Text>
          </View>
          <View style={styles.honorItem}>
            <Text style={styles.honorYear}>⭐⭐⭐</Text>
            <Text style={styles.honorText}>Michelin Stars</Text>
          </View>
          <View style={styles.honorItem}>
            <Text style={styles.honorYear}>2023</Text>
            <Text style={styles.honorText}>UNESCO Culinary Ambassador</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.contactButton} onPress={() => alert('Contact Chef')}>
            <Text style={styles.buttonText}>Contact Chef</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.communityButton}
            onPress={() => navigation.navigate('CommunityImpact')}
          >
            <Text style={styles.buttonText}>Community Impact</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Padding */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d0d0d', // background for safe area
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topHeader: {
    height: 20, // mimics a white space like iPhone bezel
    backgroundColor: '#d4af37',
  },
  container: {
    backgroundColor: '#0d0d0d',
    flex: 1,
    paddingHorizontal: 20,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  heroSubtitle: {
    color: '#d4af37',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#000',
  },
  bioSection: {
    marginBottom: 24,
  },
  bioText: {
    color: '#e5e5e5',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  honorsSection: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  honorsTitle: {
    color: '#d4af37',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  honorItem: {
    marginBottom: 10,
  },
  honorYear: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  honorText: {
    color: '#ccc',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  communityButton: {
    flex: 1,
    backgroundColor: '#d97706',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
