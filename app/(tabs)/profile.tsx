import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation<any>();

  // ✅ Navigate to Bookings (Book tab)
  const handleReservation = () => {
    navigation.navigate('bookings');
  };

  // ✅ Reset navigation to Login screen
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder}>
            <Feather name="user" size={40} color="#fff" />
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.vip}>VIP Member</Text>
        </View>

        {/* Sections */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionButton}>
            <Feather name="bookmark" size={20} color="#fcd34d" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.sectionTitle}>Saved Bookings</Text>
              <Text style={styles.sectionSubtitle}>3 upcoming reservations</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionButton}>
            <Feather name="heart" size={20} color="#fcd34d" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.sectionTitle}>Favorite Dishes</Text>
              <Text style={styles.sectionSubtitle}>8 saved favorites</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionButton}>
            <Feather name="settings" size={20} color="#fcd34d" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.sectionTitle}>Account Settings</Text>
              <Text style={styles.sectionSubtitle}>Profile & preferences</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#fff" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>

        {/* Make Reservation Button */}
        <TouchableOpacity style={styles.reserveButton} onPress={handleReservation}>
          <Text style={styles.reserveText}>Make Reservation</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111827' },
  profileHeader: { alignItems: 'center', marginBottom: 24 },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fcd34d',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#fff' },
  vip: { fontSize: 14, color: '#fcd34d', marginBottom: 24 },
  section: { marginBottom: 24 },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  sectionTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  sectionSubtitle: { color: '#d1d5db', fontSize: 12 },
  reserveButton: {
    backgroundColor: '#fcd34d',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  reserveText: { color: '#111827', fontWeight: 'bold', fontSize: 16 },
  logoutButton: { alignItems: 'center', padding: 12 },
  logoutText: { color: '#9ca3af', fontWeight: 'bold' },
});
