// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router'; // Replace with proper routing hook if needed

// // Local images
// import CartIcon from '@/assets/images/profile.png';         // Replace with actual image path
// import NotificationIcon from '@/assets/images/notifications.png'; // Replace with actual image path
// import ArrowIcon from '@/assets/images/arraow1.png'; // Replace with actual image path
// import AmazonLogo from '@/assets/images/amzone.png';   // Replace with actual brand logo
// import LVLogo from '@/assets/images/lv.png';           // Replace with actual brand logo
// import ZaraLogo from '@/assets/images/zara.png';       // Replace with actual brand logo

// const StoreScreen = () => {
//   const router = useRouter();
//   const [notifications, setNotifications] = useState(3); // Example notification count
//   const [cartItems, setCartItems] = useState(5); // Example cart items count
//   const slides = ['Welcome to the good life', 'Send and Share'];

//   const navigateToCart = () => {
//     router.navigate('/cart-summary');
//   };

//   const navigateToAllStores = () => {
//     router.navigate('/all-stores');
//   };

//   const navigateToWebsite = (brandUrl) => {
//     window.open(brandUrl, '_blank');
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => router.back()}>
//             <Image source={ArrowIcon} style={styles.icon} />
//           </TouchableOpacity>
//           <View style={styles.headerRight}>
//             <TouchableOpacity onPress={navigateToCart}>
//               <Image source={CartIcon} style={styles.icon} />
//               {cartItems > 0 && (
//                 <View style={styles.badge}>
//                   <Text style={styles.badgeText}>{cartItems}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image source={NotificationIcon} style={styles.icon} />
//               {notifications > 0 && (
//                 <View style={styles.badge}>
//                   <Text style={styles.badgeText}>{notifications}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Slideshow */}
//         <View style={styles.slideshow}>
//           {slides.map((text, index) => (
//             <Text key={index} style={styles.slideText}>{text}</Text>
//           ))}
//         </View>

//         {/* My Cart */}
//         <View style={styles.myCart}>
//           <Text style={styles.cartText}>My Cart</Text>
//           <Text>{cartItems} items</Text>
//         </View>

//         {/* Store Section */}
//         <View style={styles.storesSection}>
//           <Text style={styles.sectionTitle}>Where would you like to shop from?</Text>
//           <TouchableOpacity onPress={navigateToAllStores}>
//             <Text style={styles.seeAllText}>See all</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Store Items */}
//         <View style={styles.storeList}>
//           <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.amazon.com')}>
//             <Image source={AmazonLogo} style={styles.storeLogo} />
//             <Text style={styles.shopButton}>SHOP</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.louisvuitton.com')}>
//             <Image source={LVLogo} style={styles.storeLogo} />
//             <Text style={styles.shopButton}>SHOP</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.zara.com')}>
//             <Image source={ZaraLogo} style={styles.storeLogo} />
//             <Text style={styles.shopButton}>SHOP</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/homeScreen')}>
//           <Text>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/storeScreen')}>
//           <Text>Stores</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/history')}>
//           <Text>History</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/wallet')}>
//           <Text>Wallet</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => router.navigate('/more')}>
//           <Text>More</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   icon: {
//     width: 30,
//     height: 30,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   badge: {
//     position: 'absolute',
//     right: -5,
//     top: -5,
//     backgroundColor: '#FF3B30',
//     borderRadius: 10,
//     paddingHorizontal: 5,
//   },
//   badgeText: {
//     color: '#FFF',
//     fontSize: 12,
//   },
//   slideshow: {
//     height: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   slideText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   myCart: {
//     padding: 20,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   cartText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   storesSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   seeAllText: {
//     color: '#FF3B30',
//   },
//   storeList: {
//     flexDirection: 'column',
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     paddingVertical: 10,
//   },
//   storeItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEE',
//   },
//   storeLogo: {
//     width: 100,
//     height: 40,
//   },
//   shopButton: {
//     color: '#FF3B30',
//     fontSize: 16,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 15,
//     backgroundColor: '#FFF',
//     borderTopWidth: 1,
//     borderTopColor: '#DDD',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
// });

// export default StoreScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Local assets (Update paths according to your project structure)
import CartIcon from '@/assets/images/profile.png';         // Replace with actual image path
import NotificationIcon from '@/assets/images/notifications.png'; // Replace with actual image path
import ArrowIcon from '@/assets/images/arraow1.png'; // Replace with actual image path
import AmazonLogo from '@/assets/images/amzone.png';   // Replace with actual brand logo
import LVLogo from '@/assets/images/lv.png';           // Replace with actual brand logo
import ZaraLogo from '@/assets/images/zara.png';       // Replace with actual brand logo
import HomeIcon from '@/assets/images/home.png';         // Replace with actual icon path
import StoresIcon from '@/assets/images/store.png';     // Replace with actual icon path
import HistoryIcon from '@/assets/images/history.png';   // Replace with actual icon path
import WalletIcon from '@/assets/images/wallet.png';     // Replace with actual icon path
import MoreIcon from '@/assets/images/more.png';         // Replace with actual icon path

const StoreScreen = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(3); // Example cart count
  const [notifications, setNotifications] = useState(5); // Example notification count

  const navigateToAllStores = () => {
    router.navigate('/allStores'); // Navigate to All Stores screen
  };

  const navigateToWebsite = (brandUrl) => {
    window.open(brandUrl, '_blank');
  };

  const navigateToCart = () => {
    router.navigate('/cart-summary'); // Navigate to cart summary
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={ArrowIcon} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.title}>Shopping</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={navigateToCart}>
              <Image source={CartIcon} style={styles.icon} />
              {cartItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItems}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={NotificationIcon} style={styles.icon} />
              {notifications > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{notifications}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Image 
            source={{ uri: '/path-to-your-banner-image.jpg' }} // Add your promo image path
            style={styles.bannerImage}
          />
          <Text style={styles.promoText}>Welcome to the good life</Text>
        </View>

        {/* Cart Info */}
        <TouchableOpacity style={styles.cartSection} onPress={navigateToCart}>
          <Image source={CartIcon} style={styles.cartIcon} />
          <Text style={styles.cartText}>My Cart</Text>
        </TouchableOpacity>

        {/* Store Section */}
        <View style={styles.storeSection}>
          <Text style={styles.storeTitle}>Where would you like to shop from?</Text>
          <TouchableOpacity onPress={navigateToAllStores}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Store List */}
        <View style={styles.storeList}>
          <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.amazon.com')}>
            <Image source={AmazonLogo} style={styles.storeLogo} />
            <Text style={styles.shopButton}>SHOP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.louisvuitton.com')}>
            <Image source={LVLogo} style={styles.storeLogo} />
            <Text style={styles.shopButton}>SHOP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storeItem} onPress={() => navigateToWebsite('https://www.zara.com')}>
            <Image source={ZaraLogo} style={styles.storeLogo} />
            <Text style={styles.shopButton}>SHOP</Text>
          </TouchableOpacity>
        </View>
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

        <TouchableOpacity onPress={() => router.navigate("/walletPage")}>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  promoBanner: {
    backgroundColor: '#FFF5E1',
    borderRadius: 10,
    marginVertical: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: 120,
  },
  promoText: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  cartText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  storeTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  seeAllText: {
    color: '#FF3B30',
    fontSize: 14,
  },
  storeList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
  },
  storeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  storeLogo: {
    width: 100,
    height: 40,
  },
  shopButton: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
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
  // bottomNav: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   paddingVertical: 15,
  //   backgroundColor: '#FFFFFF',
  //   borderTopWidth: 1,
  //   borderTopColor: '#EFEFEF',
  // },
  // navItem: {
  //   alignItems: 'center',
  // },
  // navIcon: {
  //   width: 24,
  //   height: 24,
  // },
  // navText: {
  //   fontSize: 12,
  //   color: '#333',
  //   marginTop: 5,
  // },
});

export default StoreScreen;
