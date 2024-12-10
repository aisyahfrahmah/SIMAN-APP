import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

export default function Keuangan({ navigation }) {
  const data = {
    labels: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    datasets: [
      {
        data: [1000000, 2000000, 1500000, 1200000, 14062004, 1300000, 1000000],
        strokeWidth: 2, // ketebalan garis
        color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, // warna merah
      },
      {
        data: [800000, 1800000, 1600000, 1000000, 1200000, 1400000, 900000],
        strokeWidth: 2, // ketebalan garis
        color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // warna biru
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(34, 139, 230, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#228BE6',
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header dengan tombol back */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Keuangan</Text>
      </View>

      {/* Subheader */}
      <Text style={styles.subheader}>minggu lalu</Text>

      {/* Line Chart */}
      <LineChart
        data={data}
        width={screenWidth - 40} // ukuran chart
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      {/* Ringkasan Total */}
      <View style={styles.summary}>
        <Text style={styles.totalText}>Total: Rp 14.062.004</Text>
      </View>

      {/* Bagian Pengelolaan */}
      <View style={styles.pieContainer}>
        <Text style={styles.pieTitle}>Pengelolaan</Text>
        <Text style={styles.pieDetails}>92% dari target Rp 15.284.787</Text>
        {/* Pie chart bisa ditambahkan di sini jika diperlukan */}
      </View>

      {/* Tombol Donasi */}
      <TouchableOpacity style={styles.donationButton} onPress={() => console.log('Navigasi ke halaman donasi')}>
        <Text style={styles.donationButtonText}>Donasi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40, // Tambahkan padding atas agar tidak terlalu dekat
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  subheader: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summary: {
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  pieContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  pieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  pieDetails: {
    fontSize: 14,
    color: '#888',
  },
  donationButton: {
    backgroundColor: '#228BE6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  donationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
