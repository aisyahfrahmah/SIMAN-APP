import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Donasi3() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Donasi</Text>
        <FontAwesome name="cog" size={24} color="black" />
      </View>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/banjir-palembang.jpg' }}
        style={styles.image}
      />

      {/* Title Section */}
      <Text style={styles.title}>Bantu Banjir Palembang Kembali Pulih.</Text>

      {/* Donation Input Section */}
      <View style={styles.donationContainer}>
        <Text style={styles.inputLabel}>Fill the nominal</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.currency}>Rp</Text>
          <TextInput
            style={styles.input}
            placeholder="200.000"
            keyboardType="numeric"
            defaultValue="200.000"
          />
        </View>

        {/* Suggested Amount Buttons */}
        <View style={styles.amountButtons}>
          {['10.000', '50.000', '100.000', '150.000', '200.000', '250.000'].map((amount, index) => (
            <TouchableOpacity key={index} style={styles.amountButton}>
              <Text style={styles.amountButtonText}>Rp {amount}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Payment Method Button */}
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Select Payment Methode</Text>
          <FontAwesome name="chevron-right" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  donationContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    color: 'gray',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  currency: {
    fontSize: 16,
    color: 'gray',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  amountButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  amountButton: {
    backgroundColor: '#bfdbfe', // Warna biru muda
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    alignItems: 'center',
    width: '30%',
  },
  amountButtonText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  paymentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2563eb', // Warna biru tua
    padding: 14,
    borderRadius: 8,
  },
  paymentButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
