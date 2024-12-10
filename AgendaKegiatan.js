import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AgendaKegiatan() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agenda Kegiatan</Text>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      {/* Calendar */}
      <View style={styles.calendar}>
        <View style={styles.weekDays}>
          {['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'].map((day, index) => (
            <Text key={index} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        <View style={styles.dates}>
          {['28', '29', '30', '1', '2', '3', '4'].map((date, index) => (
            <Text key={index} style={[styles.date, date === '28' && styles.selectedDate]}>{date}</Text>
          ))}
        </View>
      </View>
      
      {/* Agenda Section */}
      <View style={styles.agendaContainer}>
        <View style={styles.agendaHeader}>
          <Text style={styles.agendaTitle}>Informasi Agenda</Text>
          <TouchableOpacity style={styles.agendaFilter}>
            <Text style={styles.agendaFilterText}>Semua (8)</Text>
            <MaterialIcons name="expand-more" size={24} color="green" />
          </TouchableOpacity>
        </View>

        {[ 
          { title: 'Kajian Ust Abdul Somad', date: 'Senin, 6 Mei 2024', completed: false },
          { title: 'Buka Bersama Remaja Masjid', date: 'Senin, 29 April 2024', completed: true },
          { title: 'Berbagi Takjil', date: 'Jum’at, 26 April 2024', completed: true },
          { title: 'Buka Bersama Pengurus Masjid', date: 'Jum’at, 26 April 2024', completed: true },
          { title: 'Pesantren Kilat', date: 'Kamis, 25 April 2024', completed: false },
          { title: 'Kajian Ust Hanan Attaki', date: 'Rabu, 24 April 2024', completed: true },
        ].map((item, index) => (
          <View key={index} style={styles.agendaItem}>
            <View>
              <Text style={styles.agendaItemTitle}>{item.title}</Text>
              <View style={styles.agendaItemDate}>
                <FontAwesome name="clock-o" size={14} color="gray" />
                <Text style={styles.agendaItemDateText}>{item.date}</Text>
              </View>
            </View>
            <FontAwesome name="check-circle" size={24} color={item.completed ? 'green' : 'gray'} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  calendar: {
    marginBottom: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedDate: {
    color: 'green',
  },
  agendaContainer: {
    marginTop: 16,
  },
  agendaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  agendaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  agendaFilter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agendaFilterText: {
    color: 'green',
    marginRight: 4,
  },
  agendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  agendaItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  agendaItemDate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  agendaItemDateText: {
    marginLeft: 6,
    fontSize: 12,
    color: 'gray',
  },
});

