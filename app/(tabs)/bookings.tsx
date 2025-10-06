import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";

export default function BookingScreen() {
  const navigation = useNavigation<any>();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [menu, setMenu] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  // For date and time pickers
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

  const handleConfirmDate = (selectedDate: Date) => {
    const formattedDate = selectedDate.toISOString().split("T")[0]; // yyyy-mm-dd
    setDate(formattedDate);
    hideDatePicker();
  };

  const handleConfirmTime = (selectedTime: Date) => {
    const formattedTime = selectedTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(formattedTime);
    hideTimePicker();
  };

  const handleBooking = () => {
    if (!name || !date || !time || !location || !menu) {
      alert("Please fill in all required fields.");
      return;
    }
    alert("✅ Booking confirmed! A confirmation email will be sent.");
    navigation.navigate("home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Book Your Experience</Text>
        </View>

        {/* Full Name */}
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor="#a68b2c"
          value={name}
          onChangeText={setName}
        />

        {/* Preferred Date */}
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text style={{ color: date ? "#333" : "#a68b2c" }}>
            {date || "Select Date"}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />

        {/* Preferred Time */}
        <TouchableOpacity style={styles.input} onPress={showTimePicker}>
          <Text style={{ color: time ? "#333" : "#a68b2c" }}>
            {time || "Select Time"}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          is24Hour={false}
        />

        {/* Location */}
        <TextInput
          style={styles.input}
          placeholder="Enter your address or preferred dining location"
          placeholderTextColor="#a68b2c"
          value={location}
          onChangeText={setLocation}
        />

        {/* Menu Experience */}
        <View style={styles.dropdown}>
          <Picker
            selectedValue={menu}
            onValueChange={(val) => setMenu(val)}
            dropdownIconColor="#a68b2c"
          >
            <Picker.Item label="Select Menu Experience" value="" />
            <Picker.Item label="Gourmet Tasting" value="gourmet" />
            <Picker.Item label="Wine Pairing Dinner" value="wine" />
            <Picker.Item label="Vegan Experience" value="vegan" />
            <Picker.Item label="Seafood Special" value="seafood" />
          </Picker>
        </View>

        {/* Special Requests */}
        <TextInput
          style={[styles.input, { height: 100, textAlignVertical: "top" }]}
          placeholder="Dietary restrictions, allergies, or special occasions..."
          placeholderTextColor="#a68b2c"
          value={specialRequests}
          onChangeText={setSpecialRequests}
          multiline
        />

        {/* Booking Details */}
        <View style={styles.detailsBox}>
          <Text style={styles.detailsText}>R350 per person</Text>
          <Text style={styles.detailsText}>Service duration: 3–4 hours</Text>
          <Text style={styles.detailsText}>Minimum guests: 2</Text>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmBtn} onPress={handleBooking}>
          <Text style={styles.confirmText}>Confirm Booking</Text>
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          Chef Christoffel will contact you within 24 hours to confirm details.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // white background under the notch
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F9F6EF",
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#C19A3F",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6D8A8",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E6D8A8",
    borderRadius: 10,
    marginBottom: 16,
  },
  detailsBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EEE4C9",
  },
  detailsText: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  confirmBtn: {
    backgroundColor: "#C19A3F",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  footerNote: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
  },
});
