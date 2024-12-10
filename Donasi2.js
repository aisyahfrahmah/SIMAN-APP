import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Donasi2() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Donasi</Text>
        <FontAwesome name="cog" size={24} color="black" />
      </View>
      <Image
        source={{ uri: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/banjir-palembang.jpg' }}
        style={styles.image}
      />
      <Text style={styles.title}>Bantu Banjir Palembang Kembali Pulih.</Text>
      <View style={styles.coinsContainer}>
        <FontAwesome name="money" size={16} color="gray" />
        <Text style={styles.coinsText}>10.000</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressText}>Terkumpul</Text>
          <Text style={styles.progressText}>ditutup 20 hari lagi</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.collectedAmount}>Rp 24.000.000</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/nLijfOGhN02WQiQftKeGRj0ofjA942I9xR67Mkck8baHHpTOB.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Unsri Peduli</Text>
          <Text style={styles.profileStatus}>Akun Terverifikasi</Text>
        </View>
        <FontAwesome name="check-circle" size={24} color="blue" />
      </View>
      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>Donasi Sekarang</Text>
      </TouchableOpacity>
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
    marginTop: 20, // Tambahkan margin atas untuk menurunkan posisi
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  coinsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  coinsText: {
    marginLeft: 8,
    color: 'gray',
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    color: 'gray',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e5e7eb',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#3b82f6',
  },
  collectedAmount: {
    color: '#f59e0b',
    fontWeight: 'bold',
    marginTop: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontWeight: 'bold',
  },
  profileStatus: {
    color: 'gray',
  },
  donateButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  donateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
