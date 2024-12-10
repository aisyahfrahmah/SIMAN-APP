import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CalendarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header dengan tombol navigasi back */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kalender</Text>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Judul Bulan dan Tahun */}
      <View style={styles.titleContainer}>
        <Text style={styles.month}>April</Text>
        <Text style={styles.year}>2024</Text>
      </View>

      {/* Nama Hari */}
      <View style={styles.weekdays}>
        {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
          <Text key={index} style={styles.weekday}>{day}</Text>
        ))}
      </View>

      {/* Tanggal */}
      <View style={styles.days}>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day, index) => (
          <View key={index} style={[styles.day, day === 28 ? styles.selectedDay : null]}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Garis Pembatas */}
      <View style={styles.divider} />

      {/* Event List */}
      <View style={styles.events}>
        {[
          { title: 'Tahun Baru Hijriyah', subtitle: 'MUHARRAM 1 • 1445 AH', date: '19 JULI 2023' },
          { title: 'Lailat al Miraj', subtitle: 'RAJAB 27 • 1445 AH', date: '8 FEB 2024' },
          { title: 'Ramadhan', subtitle: 'RAMADHAN 1 • 1445 AH', date: '12 MAR 2024' },
          { title: 'Idul Fitri', subtitle: 'SHAWWAL 1 • 1445 AH', date: '10 APR 2024', dot: true },
          { title: 'Waqf Al Arafa Hajj', subtitle: 'DHULHIJJAH 9 • 1445 AH', date: '16 JUN 2024' },
          { title: 'Idul Adha', subtitle: 'DHUL HIJJAH 10 • 1445 AH', date: '17 JUN 2024', dot: true },
        ].map((event, index) => (
          <View key={index} style={styles.event}>
            <View>
              <Text style={styles.eventTitle}>
                {event.title} {event.dot && <Text style={styles.dot}>•</Text>}
              </Text>
              <Text style={styles.eventSubtitle}>{event.subtitle}</Text>
            </View>
            <Text style={styles.eventDate}>{event.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 24, // Tambahkan padding di atas agar seluruh konten tidak terlalu menempel ke atas
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 10,
    marginTop: 16, // Tambahkan margin top untuk memastikan header tidak terlalu ke atas
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  year: {
    fontSize: 14,
    color: 'gray',
  },
  weekdays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: width * 0.05,
  },
  weekday: {
    color: 'gray',
    textAlign: 'center',
    flex: 1,
    fontSize: 12,
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: width * 0.05,
  },
  day: {
    width: '13%',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedDay: {
    backgroundColor: '#add8e6',
    borderRadius: 50,
  },
  dayText: {
    padding: 8,
    fontSize: 14,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 16,
  },
  events: {
    marginBottom: 16,
  },
  event: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: width * 0.05,
  },
  eventTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  eventSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
  eventDate: {
    color: 'gray',
    fontSize: 12,
  },
  dot: {
    color: 'red',
  },
});

export default CalendarScreen;
