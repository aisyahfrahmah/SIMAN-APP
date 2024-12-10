import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Donasi5() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Success Message */}
      <View style={styles.successMessage}>
        <FontAwesome name="check-circle" size={50} color="#4CAF50" />
        <Text style={styles.successTitle}>Donasi Berhasil</Text>
        <Text style={styles.successDate}>1 Mei 2024 | 10:30 PM</Text>
        <Text style={styles.successDescription}>
          Terima kasih sudah melakukan donasi melalui unsri tech! Have a nice day
        </Text>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Center content vertically
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  successMessage: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 10,
  },
  successDate: {
    fontSize: 16,
    color: '#6B7280',
    marginVertical: 5,
  },
  successDescription: {
    fontSize: 14,
    color: '#4B5563',
    marginVertical: 10,
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
