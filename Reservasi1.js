import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Reservasi1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>1 Mei 2024 | 10:30 PM</Text>
        <Text style={styles.subHeaderText}>200 Guests | Indoor</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
        />
        
        <Text style={styles.label}>Phone</Text>
        <View style={styles.phoneInputContainer}>
          <TextInput
            style={styles.phoneInput}
            placeholder="Your Phone Number"
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>Email Address (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reserved Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerContainer: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20, // Menambahkan margin untuk menurunkan bagian header sedikit
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: 'white',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: -16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    color: '#6B7280',
    fontSize: 16,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginTop: 8,
    padding: 12,
    alignItems: 'center',
  },
  phoneInput: {
    flex: 1,
    color: '#6B7280',
    fontSize: 16,
  },
  reserveButton: {
    marginTop: 24,
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Reservasi1;
