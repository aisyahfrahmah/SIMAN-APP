import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Donasi4() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="white" />
        <Text style={styles.headerTitle}>Metode Pembayaran</Text>
      </View>

      {/* Payment Methods Section */}
      <View style={styles.paymentContainer}>
        <Text style={styles.sectionTitle}>Digital payment method(s)</Text>
        <Text style={styles.sectionSubtitle}>
          Swipe left to set your default method
        </Text>

        {/* Transfer Bank Option */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <FontAwesome name="bank" size={20} color="#2563eb" />
            <Text style={styles.optionText}>Transfer Bank</Text>
          </View>
          <FontAwesome name="circle-o" size={20} color="#9CA3AF" />
        </TouchableOpacity>

        {/* Dana Option */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Image
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.Y2eGZX_Cnk8yQoNs-a7hYQHaE8&pid=Api&P=0&h=180',
              }}
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Dana</Text>
          </View>
          <FontAwesome name="dot-circle-o" size={20} color="#2563eb" />
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Add Methods Section */}
        <Text style={styles.sectionTitle}>Add methods</Text>

        {/* Credit/Debit Card Option */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <FontAwesome name="credit-card" size={20} color="#2563eb" />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>Credit or debit card</Text>
              <Text style={styles.optionSubtitle}>
                Visa, Mastercard, AMEX and JCB
              </Text>
            </View>
          </View>
          <FontAwesome name="plus-circle" size={20} color="#2563eb" />
        </TouchableOpacity>

        {/* Master Card Option */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <FontAwesome name="cc-mastercard" size={20} color="#2563eb" />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>Master Card</Text>
              <Text style={styles.optionSubtitle}>
                Transferring via ATM, Internet Banking & Mobile Banking
              </Text>
            </View>
          </View>
          <FontAwesome name="plus-circle" size={20} color="#2563eb" />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Lanjut</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  paymentContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 16,
    color: '#1F2937',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  continueButton: {
    backgroundColor: '#2563eb',
    margin: 20,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
