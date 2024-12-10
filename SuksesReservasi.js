import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SuksesReservasi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Lantai 1 Masjid</Text>
      </View>

      {/* Image Section */}
      <Image
        source={{
          uri: 'https://tse2.mm.bing.net/th?id=OIP.KcwlrshOGXv2XohP1b6NdgHaE8&pid=Api&P=0&h=180',
        }}
        style={styles.image}
      />

      {/* Modal Content */}
      <View style={styles.modal}>
        {/* Check Icon */}
        <View style={styles.checkIconWrapper}>
          <FontAwesome name="check-circle" size={64} color="#34D399" />
        </View>

        {/* Success Text */}
        <Text style={styles.successText}>
          Booked Rooms <Text style={{ color: '#3B82F6' }}>Successfully</Text>
        </Text>

        {/* Reservation Information */}
        <View style={styles.centeredInfo}>
          <View style={styles.infoRow}>
            <FontAwesome name="user" size={20} color="#4B5563" />
            <Text style={styles.infoText}>Yesya Najwa</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="phone" size={20} color="#4B5563" />
            <Text style={styles.infoText}>+62 823 7782 1413</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="calendar" size={20} color="#4B5563" />
            <Text style={styles.infoText}>1 Mei 2024 | 10:30 PM</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="users" size={20} color="#4B5563" />
            <Text style={styles.infoText}>200 Guests</Text>
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.message}>
          Your room is booked! Thank you for making a reservation via our application. See you at the An-Nabawi UNSRI Indralaya.
        </Text>

        {/* Done Button */}
        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginTop: 20,
  },
  backButton: {
    paddingRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    textAlign: 'center',
    flex: 1,
  },
  image: {
    height: 200,
    width: '100%',
  },
  modal: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  checkIconWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  successText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  centeredInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
    textAlign: 'center',
  },
  message: {
    marginTop: 16,
    textAlign: 'center',
    color: '#374151',
  },
  doneButton: {
    backgroundColor: '#3B82F6',
    marginHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SuksesReservasi;
