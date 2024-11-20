// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// import { Link, useRouter } from "expo-router";

// const HomeScreen = () => {
//   // const navigation = useNavigation();
//   const router = useRouter();
//   const slides = [
//     require('@/assets/images/slide1.png'),
//     require('@/assets/images/slide1.png'),
//     require('@/assets/images/slide1.png'),
//     require('@/assets/images/slide1.png'),
//   ];

//   const renderSlide = ({ item }) => {
//     return <Image source={item} style={styles.slideImage} />;
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={slides}
//         horizontal
//         pagingEnabled
//         renderItem={renderSlide}
//         keyExtractor={(item, index) => index.toString()}
//       />
//       <TouchableOpacity style={styles.button} onPress={() => router.navigate("/login")}>
//         <Text style={styles.buttonText}>Stores</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => router.navigate("/login")}>
//         <Text style={styles.buttonText}>Shopping History</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   slideImage: {
//     width: 300,
//     height: 200,
//   },
//   button: {
//     backgroundColor: 'red',
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// };

// export default HomeScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Link, useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

// Import local images for slideshow and icons
import ProfileImage from '@/assets/images/profile.png'; // Replace with actual image path
import SlideImage1 from '@/assets/images/slide11.png';   // Replace with actual image path
import SlideImage2 from '@/assets/images/slide11.png';   // Replace with actual image path
import SlideImage3 from '@/assets/images/slide1.png';   // Replace with actual image path
import SlideImage4 from '@/assets/images/slide1.png';   // Replace with actual image path
import HomeIcon from '@/assets/images/home.png';         // Replace with actual icon path
import StoresIcon from '@/assets/images/store.png';     // Replace with actual icon path
import HistoryIcon from '@/assets/images/history.png';   // Replace with actual icon path
import WalletIcon from '@/assets/images/wallet.png';     // Replace with actual icon path
import MoreIcon from '@/assets/images/more.png';         // Replace with actual icon path
import ArrowIcon from '@/assets/images/arrow.png'; // Replace with actual icon path

const HomeScreen = () => {
  // const navigation = useNavigation();
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, text: 'Welcome to the good life', image: SlideImage1 },
    { id: 2, text: 'Send and Share', image: SlideImage2 },
    { id: 3, text: 'Best shipping experience', image: SlideImage3 },
    { id: 4, text: 'Refer and Earn', image: SlideImage4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSend = () => {
    router.navigate("/sendPage") // Navigate to Send page
  };

  const handleReceive = () => {
    router.navigate("/receivePage") // Navigate to Receive page
  };

  const handleRecentActivity = () => {
    router.navigate("/handleRecent") // Navigate to Recent Activities page
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Eric!</Text>
          <Image source={ProfileImage} style={styles.profileImage} />
        </View>

        {/* Slideshow */}
        <View style={styles.slideshow}>
          <Image source={slides[currentSlide].image} style={styles.slideImage} />
          <Text style={styles.slideText}>{slides[currentSlide].text}</Text>
        </View>

        {/* Send and Receive Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReceive}>
            <Text style={styles.buttonText}>Receive</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activities */}
        <View style={styles.recentActivities}>
          <Text style={styles.sectionTitle}>Recent activities</Text>
          <TouchableOpacity style={styles.recentActivityItem} onPress={handleRecentActivity}>
            <Text style={styles.link}>Best way to ship</Text>
            <Image source={ArrowIcon} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Referral Card */}
        <View style={styles.referralCard}>
          <Text style={styles.referralTitle}>Refer friends and earn</Text>
          <Text style={styles.referralText}>Earn over 20,000 Naira when you refer your friends and loved ones to sign up, and ship an item on Sharply</Text>
          <View style={styles.slideIndicator}>
            <Text>1/4</Text>
          </View>
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
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  slideshow: {
    marginBottom: 20,
  },
  slideImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  slideText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 0.48,
    backgroundColor: '#FF3B30',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recentActivities: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  recentActivityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  link: {
    color: '#FF3B30',
    fontSize: 16,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  referralCard: {
    backgroundColor: '#FFE6E6',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  referralText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  slideIndicator: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: '#FFF',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#DDD',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     width: 24,
//     height: 24,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#333',
//   },
  // });
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


export default HomeScreen;
