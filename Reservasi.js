import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Reservasi = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Icon Back */}
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
            <FontAwesome name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
          <View>
            <Text style={styles.greeting}>Assalamualaikum</Text>
            <Text style={styles.title}>Musdalifa</Text>
          </View>
          <View style={styles.headerIcons}>
            <FontAwesome name="bell" size={24} color="white" />
            <Image
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.8iJXCSPuDtP2ahTywCdOwwHaIO&pid=Api&P=0&h=180',
              }}
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Apa yang kamu cari hari ini"
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Our <Text style={styles.highlight}>Mosque</Text> Rooms
        </Text>
        <View style={styles.roomsContainer}>
          {roomData.map((room, index) => (
            <RoomCard
              key={index}
              imageUri={room.imageUri}
              title={room.title}
              description={room.description}
              capacity={room.capacity}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const RoomCard = ({ imageUri, title, description, capacity }) => {
  return (
    <View style={styles.roomCard}>
      <Image source={{ uri: imageUri }} style={styles.roomImage} />
      <View style={styles.roomContent}>
        <Text style={styles.roomTitle}>{title}</Text>
        <Text style={styles.roomDescription}>{description}</Text>
        <Text style={styles.roomCapacity}>{capacity}</Text>
        <View style={styles.roomFooter}>
          <TouchableOpacity style={styles.detailButton}>
            <Text style={styles.detailButtonText}>Detail</Text>
          </TouchableOpacity>
          <Text style={styles.availableText}>Tersedia</Text>
        </View>
      </View>
    </View>
  );
};

const roomData = [
  {
    imageUri: 'https://storage.googleapis.com/a1aa/image/hhHGZBwfXYRiAqMC22NX9F3v9lbfCAfK5mJfyKK2KkFwEGTOB.jpg',
    title: 'Halaman Luar Masjid',
    description: 'Masjid An-Nabawi Indonesia',
    capacity: 'Kapasitas: 500 Orang',
  },
  {
    imageUri: 'https://storage.googleapis.com/a1aa/image/4eqqnAYuPfhZ40DuiQBr7JWuiHVKPAEEnhdEnqC0WWgPhxkTA.jpg',
    title: 'Lantai 3 Masjid',
    description: 'Masjid An-Nabawi Indonesia',
    capacity: 'Kapasitas: 150 Orang',
  },
  {
    imageUri: 'https://storage.googleapis.com/a1aa/image/AhvwHjoySRbmGtMq3Br8sL8fFhLJVMlU9h428FU3By0lwYyJA.jpg',
    title: 'Lantai 2 Masjid',
    description: 'Masjid An-Nabawi Indonesia',
    capacity: 'Kapasitas: 200 Orang',
  },
  {
    imageUri: 'https://storage.googleapis.com/a1aa/image/BAt07ptIfJUJZiHoK6KSWGrBMCYmOcBloOaWnPwpoHfQhxkTA.jpg',
    title: 'Lantai 1 Masjid',
    description: 'Masjid An-Nabawi Indonesia',
    capacity: 'Kapasitas: 1000 Orang',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  greeting: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 16,
  },
  searchContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#3b82f6',
  },
  roomsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  roomCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    width: '48%',
  },
  roomImage: {
    width: '100%',
    height: 100,
  },
  roomContent: {
    padding: 8,
  },
  roomTitle: {
    fontWeight: 'bold',
  },
  roomDescription: {
    fontSize: 12,
    color: '#6b7280',
  },
  roomCapacity: {
    fontSize: 12,
    color: '#6b7280',
  },
  roomFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  detailButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  detailButtonText: {
    color: 'white',
    fontSize: 14,
  },
  availableText: {
    color: '#3b82f6',
    fontSize: 12,
  },
});

export default Reservasi;
