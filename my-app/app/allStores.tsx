import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // If using Expo, otherwise import from 'react-native-vector-icons/Ionicons'
import { useRouter } from 'expo-router';

const stores = [
  { name: 'Amazon', logo: require('@/assets/images/amzone.png') }, // Place the image in your assets folder
  { name: 'Louis Vuitton', logo: require('@/assets/images/lv.png') },
  { name: 'Zara', logo: require('@/assets/images/zara.png') },
  { name: 'H&M', logo: require('@/assets/images/hm.png') },
  { name: 'Shoprite', logo: require('@/assets/images/shoperite.png') },
];

const AllStores = ({ navigation }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.navigate('/storeScreen')} />
        <Text style={styles.headerText}>All stores</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="black" />
          <Ionicons name="cart-outline" size={24} color="black" style={styles.cartIcon} />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Cloths & Accessories</Text>
        <Text style={styles.category}>Groceries</Text>
        <Text style={styles.category}>Restaurant</Text>
        <Text style={styles.category}>Pharmacy</Text>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.storesList}>
        {stores.map((store, index) => (
          <View key={index} style={styles.storeCard}>
            <Image source={store.logo} style={styles.storeImage} />
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    marginLeft: 16,
  },
  categoryScroll: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  category: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  storesList: {
    padding: 16,
  },
  storeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 10,
    elevation: 2,
  },
  storeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  shopButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AllStores;
