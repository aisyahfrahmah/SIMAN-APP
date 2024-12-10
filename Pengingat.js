import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Pengingat = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#3B82F6', '#60A5FA']}
        style={styles.headerContainer}
      >
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Lokasi Anda</Text>
          <Text style={styles.locationValue}>Indralaya</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialIcons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Informasi Cuaca */}
      <View style={styles.weatherInfoContainer}>
        <FontAwesome name="sun-o" size={36} color="#FBBF24" />
        <View style={styles.weatherDetails}>
          <Text style={styles.weatherTemp}>32°C</Text>
          <Text style={styles.weatherLocation}>Cerah, Indralaya</Text>
        </View>
      </View>

      {/* Kalender */}
      <View style={styles.calendarContainer}>
        {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
          <View key={index} style={styles.calendarDay}>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={index === 0 ? styles.selectedDate : styles.dateText}>{28 + index}</Text>
          </View>
        ))}
      </View>

      {/* Pengingat Waktu Shalat Berikutnya */}
      <LinearGradient
        colors={['#3B82F6', '#2563EB']}
        style={styles.nextPrayerContainer}
      >
        <View style={styles.nextPrayerContent}>
          <FontAwesome name="volume-up" size={24} color="white" style={styles.volumeIcon} />
          <Text style={styles.nextPrayerTime}>15:05 WIB</Text>
        </View>
        <View>
          <Text style={styles.statusText}>OFF</Text>
          <Text style={styles.nextPrayerLabel}>Waktu Shalat berikutnya</Text>
        </View>
      </LinearGradient>

      {/* Daftar Waktu Shalat */}
      <View style={styles.prayerTimesContainer}>
        {[
          { name: 'Imsak', time: '04:09', sound: true },
          { name: 'Shubuh', time: '04:09', sound: true },
          { name: 'Dzuhur', time: '12:10', sound: true },
          { name: 'Ashar', time: '15:05', sound: false },
          { name: 'Maghrib', time: '18:01', sound: true },
        ].map((prayer, index) => (
          <View
            key={index}
            style={[
              styles.prayerTimeRow,
              prayer.name === 'Ashar' && styles.highlightedRow,
            ]}
          >
            <Text style={[styles.prayerName, prayer.name === 'Ashar' && styles.highlightedText]}>
              {prayer.name}
            </Text>
            <Text style={[styles.prayerTime, prayer.name === 'Ashar' && styles.highlightedText]}>
              {prayer.time}
            </Text>
            <TouchableOpacity>
              <FontAwesome
                name="volume-up"
                size={24}
                color={prayer.name === 'Ashar' ? '#ffffff' : '#10B981'}
              />
            </TouchableOpacity>
          </View>
        ))}
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
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginTop: 20, // Menurunkan posisi tulisan
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  locationValue: {
    fontSize: 14,
    color: '#E0F2FE',
  },
  settingsButton: {
    padding: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  weatherInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  weatherDetails: {
    marginLeft: 12,
  },
  weatherTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  weatherLocation: {
    fontSize: 14,
    color: '#6B7280',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  calendarDay: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  dateText: {
    fontSize: 16,
    color: '#6B7280',
  },
  selectedDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 4,
    textAlign: 'center',
  },
  nextPrayerContainer: {
    borderRadius: 16,
    margin: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  nextPrayerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  volumeIcon: {
    marginRight: 8,
  },
  nextPrayerTime: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
  },
  nextPrayerLabel: {
    fontSize: 14,
    color: '#DBEAFE',
  },
  prayerTimesContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 16,
    padding: 16,
  },
  prayerTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  highlightedRow: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  },
  prayerName: {
    fontSize: 16,
    color: '#1F2937',
  },
  prayerTime: {
    fontSize: 16,
    color: '#6B7280',
  },
  highlightedText: {
    color: '#ffffff',
  },
});

export default Pengingat;
