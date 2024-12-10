import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import diskusi from './diskusi';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <MaterialIcons name="chevron-left" size={24} color="gray" />
        <View style={styles.location}>
          <Text style={styles.locationText}>Lokasi Anda</Text>
          <Text style={styles.locationName}>Indralaya</Text>
        </View>
        <MaterialIcons name="settings" size={24} color="gray" />
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>
              <FontAwesome name="clock-o" size={16} /> Shalat Ashar
            </Text>
            <Text style={styles.cardHeaderText}>
              <FontAwesome name="map-marker" size={16} /> Lokasi Anda
            </Text>
          </View>
          <Text style={styles.timeText}>15:06 WIB</Text>
          <Text style={styles.locationText}>Indralaya</Text>
          <View style={styles.iconGrid}>
            {[
              { name: 'bell', color: '#9b59b6', text: 'Pengingat' },
              { name: 'calendar-check-o', color: '#f1c40f', text: 'Reservasi' },
              { name: 'calendar', color: '#9b59b6', text: 'Agenda' },
              { name: 'comments', color: '#3498db', text: 'Diskusi' },
              { name: 'gift', color: '#e74c3c', text: 'Donasi' },
              { name: 'account-balance-wallet', type: 'MaterialIcons', color: '#2ecc71', text: 'Keuangan' }, // Menggunakan MaterialIcons
            ].map((item, index) => (
              <View key={index} style={styles.iconItem}>
                {item.type === 'MaterialIcons' ? (
                  <MaterialIcons name={item.name} size={24} color={item.color} />
                ) : (
                  <FontAwesome name={item.name} size={24} color={item.color} />
                )}
                <Text style={styles.iconText}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.quranCard}>
          <FontAwesome name="moon-o" size={24} color="white" style={styles.quranIcon} />
          <View>
            <Text style={styles.quranText}>Sudah baca Alqur'an? terakhir dibaca</Text>
            <Text style={styles.quranTitle}>QS. AL-FATIHAH : Ayat 1</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="white" style={styles.quranChevron} />
        </View>
        <View style={styles.liveSection}>
          <Text style={styles.liveTitle}>Kajian LIVE</Text>
          <View style={styles.liveCard}>
            {/* Menggunakan gambar dari URL yang Anda berikan */}
            <Image
              source={{ uri: 'https://sumedang.jabarekspres.com/wp-content/uploads/2024/02/Dark-Motorcycle-Vlog-Youtube-Thumbnail-3.png' }} // Gambar kajian ustad
              style={styles.liveImage}
            />
            <View style={styles.liveBadge}>
              <Text style={styles.liveBadgeText}>LIVE</Text>
            </View>
            <View style={styles.liveViewers}>
              <FontAwesome name="eye" size={16} color="white" />
              <Text style={styles.liveViewersText}>12324 penonton</Text>
            </View>
            <View style={styles.liveDescription}>
              <Text style={styles.liveDescriptionText}>
                [LIVE] Tabligh akbar di provinsi sumsel bersama ustad adi...
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeMasjid" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="diskusi" component={diskusi} options={{ title: 'diskusi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  location: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
  mainCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardHeaderText: {
    color: '#7f8c8d',
  },
  timeText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationText: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 16,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 16,
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
  },
  quranCard: {
    backgroundColor: '#3498db',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quranIcon: {
    marginRight: 16,
  },
  quranText: {
    color: 'white',
    fontSize: 12,
  },
  quranTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quranChevron: {
    marginLeft: 'auto',
  },
  liveSection: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  liveTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  liveCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  liveImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  liveBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  liveBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  liveViewers: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#2c3e50',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  liveViewersText: {
    color: 'white',
    marginLeft: 4,
  },
  liveDescription: {
    padding: 16,
  },
  liveDescriptionText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  backButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
});
export default homeMasjid;