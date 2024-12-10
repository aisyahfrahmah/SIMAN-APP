import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pastikan sudah menginstal library ini dengan `expo install @expo/vector-icons`

export default function DonasiPage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Assalamualaikum, Musdalifa</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Anda mau berdonasi apa hari ini?"
          />
        </View>

        {/* Categories */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Kategori</Text>
          <View style={styles.categoryTabs}>
            <Text style={styles.categoryTab}>All</Text>
            <Text style={styles.categoryTab}>Kategori 1</Text>
            <Text style={styles.categoryTab}>Kategori 2</Text>
            <Text style={styles.categoryTab}>Kategori 3</Text>
          </View>
        </View>

        {/* Donation Items */}
        <View style={styles.donationItems}>
          {/* Donasi 1 */}
          <View style={styles.donationCard}>
            <Image
              source={{
                uri: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/banjir-palembang.jpg',
              }}
              style={styles.donationImage}
            />
            <View style={styles.donationInfo}>
              <Text style={styles.donationTitle}>Bantu Banjir Palembang Kembali Pulih</Text>
              <Text style={styles.donationCategory}>Kategori 1</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '50%' }]} />
              </View>
              <Button title="Donasi Sekarang" onPress={() => alert('Donasi')} />
            </View>
          </View>

          {/* Donasi 2 */}
          <View style={styles.donationCard}>
            <Image
              source={{
                uri: 'https://tse1.mm.bing.net/th?id=OIP.49cABkWkkdCUiWKRFunfWwHaFj&pid=Api&P=0&h=180',
              }}
              style={styles.donationImage}
            />
            <View style={styles.donationInfo}>
              <Text style={styles.donationTitle}>Perbaiki Sekolah Rusak di Pelosok</Text>
              <Text style={styles.donationCategory}>Kategori 1</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '30%' }]} />
              </View>
              <Button title="Donasi Sekarang" onPress={() => alert('Donasi')} />
            </View>
          </View>

          {/* Donasi 3 */}
          <View style={styles.donationCard}>
            <Image
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIF.0S8vjnVPGyiygSpiEI%2bTAg&pid=Api&P=0&h=180',
              }}
              style={styles.donationImage}
            />
            <View style={styles.donationInfo}>
              <Text style={styles.donationTitle}>Bantu Korban Erupsi Gunung Lewotobi</Text>
              <Text style={styles.donationCategory}>Kategori 1</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '70%' }]} />
              </View>
              <Button title="Donasi Sekarang" onPress={() => alert('Donasi')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    padding: 16,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchInput: {
    marginTop: 12,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryTabs: {
    flexDirection: 'row',
    marginTop: 8,
  },
  categoryTab: {
    marginRight: 20,
    color: '#3498db',
    fontSize: 14,
  },
  donationItems: {
    marginBottom: 40,
  },
  donationCard: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  donationImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  donationInfo: {
    flex: 1,
    padding: 12,
  },
  donationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  donationCategory: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  progressBar: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    height: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: '#3498db',
    height: '100%',
  },
});
