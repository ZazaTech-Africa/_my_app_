import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // If using Expo, otherwise import from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router';

const History = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('ShoppingHistory');
  const router = useRouter();
  const historyData = [
    { name: 'Shoe', date: 'March 15, 2023' },
    { name: 'Bag', date: 'March 15, 2023' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.navigate("/homeScreen")} />
        <Text style={styles.headerText}>Shopping history</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'DeliveryHistory' && styles.activeTab]}
          onPress={() => setActiveTab('DeliveryHistory')}
        >
          <Text style={[styles.tabText, activeTab === 'DeliveryHistory' && styles.activeTabText]}>
            Delivery History
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'ShoppingHistory' && styles.activeTab]}
          onPress={() => setActiveTab('ShoppingHistory')}
        >
          <Text style={[styles.tabText, activeTab === 'ShoppingHistory' && styles.activeTabText]}>
            Shopping History
          </Text>
        </TouchableOpacity>
      </View>

      {/* History List */}
      <ScrollView contentContainerStyle={styles.historyList}>
        {historyData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.historyItem} onPress={() => { /* Navigate to item details */ }}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDate}>{item.date}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.navigate("/homeScreen")}>
          <Ionicons name="grid-outline" size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/storeScreen")}>
          <Ionicons name="storefront-outline" size={24} color="#000" />
          <Text style={styles.navText}>Stores</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/history")}>
          <Ionicons name="time-outline" size={24} color="#ff3b30" />
          <Text style={[styles.navText, { color: '#ff3b30' }]}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/deliveryForm")}>
          <Ionicons name="wallet-outline" size={24} color="#000" />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/more")}>
          <Ionicons name="ellipsis-horizontal-outline" size={24} color="#000" />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: '#ff3b30',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#fff',
  },
  historyList: {
    paddingHorizontal: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffeef0',
    borderRadius: 10,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDate: {
    fontSize: 14,
    color: '#999',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default History;
