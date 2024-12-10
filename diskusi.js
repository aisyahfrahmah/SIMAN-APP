import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const diskusi = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        {/* Header Content */}
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Assalamualaikum</Text>
        </View>
        <View style={styles.headerRight}>
          <FontAwesome name="bell" size={24} color="white" />
          <Image
            source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.8iJXCSPuDtP2ahTywCdOwwHaIO&pid=Api&P=0&h=180' }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari permasalahan yang serupa"
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('Regis')} style={styles.askButton}>
            <Text style={styles.askButtonText}>Mulai Bertanya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={20} color="#737373" />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.filterLabel}>
          Filter berdasarkan: <Text style={styles.filterActive}>Semua diskusi</Text>
        </Text>

        {/* Discussion Cards */}
        <View style={styles.discussions}>
          {discussionData.map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image source={{ uri: item.avatar }} style={styles.cardAvatar} />
                <View>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardTime}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardContent}>{item.text}</Text>
              <View style={styles.cardFooter}>
                <FontAwesome name="comments" size={16} color="#737373" />
                <Text style={styles.cardComments}>{item.comments}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Pagination */}
        <View style={styles.pagination}>
          {[1, 2, 3, 4, 5, 6].map((page, index) => (
            <TouchableOpacity
              key={index}
              style={page === 1 ? styles.pageActive : styles.page}
            >
              <Text style={page === 1 ? styles.pageTextActive : styles.pageText}>
                {page}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

// Dummy Data
const discussionData = [
  {
    avatar: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg',
    name: 'Ervalsa Dwi Nanda',
    time: '2 hari yang lalu',
    title: 'Bagaimana cara kalian meningkatkan kesadaran diri untuk solat lima waktu?',
    text: 'Halo teman-teman semuanya. Saya punya pertanyaan. Jadi, saya selama kuliah merantau sendirian. Saya merasakan semenjak...',
    comments: 46,
  },
  {
    avatar: 'https://storage.googleapis.com/a1aa/image/ylC50oIEWXpefUGstzORhjYJifdhvvmqlX13coXTV0QlCiJnA.jpg',
    name: 'Ervalsa Dwi Nanda',
    time: '2 hari yang lalu',
    title: 'Mendirikan shalat tahajud tapi belum tidur, sahkah?',
    text: 'Assalamualaikum, izin bertanya. saya sering begadang sampai subuh. Terkadang saya terpikir untuk shalat tahajud. Apakah sah melaksanakan shalat...',
    comments: 1,
  },
];

const styles = StyleSheet.create({
  container: { backgroundColor: '#F9F9F9' },
  header: {
    backgroundColor: '#77A6F7',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 16 },
  headerContent: { flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 8 }, // Added marginTop to move down
  logo: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  headerTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  headerRight: { flexDirection: 'row', alignItems: 'center', marginTop: 8 }, // Added marginTop to move down icons
  avatar: { width: 40, height: 40, borderRadius: 20, marginLeft: 16 },
  searchSection: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  mainContent: { paddingHorizontal: 16 },
  actionButtons: { flexDirection: 'row', marginVertical: 16 },
  askButton: {
    flex: 1,
    backgroundColor: '#FDCB58',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  askButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginLeft: 8,
  },
  filterText: { marginLeft: 8, color: '#737373', fontSize: 16 },
  filterLabel: { fontSize: 16, marginBottom: 16 },
  filterActive: { fontWeight: '700' },
  discussions: { marginBottom: 16 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: { flexDirection: 'row', marginBottom: 8 },
  cardAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  cardName: { fontWeight: '700', fontSize: 14 },
  cardTime: { color: '#737373', fontSize: 12 },
  cardTitle: { fontWeight: '700', fontSize: 16, marginVertical: 8 },
  cardContent: { color: '#737373', fontSize: 14, marginBottom: 8 },
  cardFooter: { flexDirection: 'row', alignItems: 'center' },
  cardComments: { marginLeft: 4, color: '#737373', fontSize: 14 },
  pagination: { flexDirection: 'row', justifyContent: 'center', marginBottom: 16 },
  page: { padding: 8, margin: 4, borderRadius: 4, backgroundColor: '#E0E0E0' },
  pageText: { fontSize: 14, color: '#737373' },
  pageActive: { backgroundColor: '#77A6F7' },
  pageTextActive: { fontSize: 14, color: '#FFFFFF' },
});
export default diskusi;