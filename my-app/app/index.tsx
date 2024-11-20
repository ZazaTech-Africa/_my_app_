// import { Text, View } from "react-native";
// import { Link, useRouter } from "expo-router";
// import MyButton from "@/components/MyButton";
// const Index = () => {
//   const router = useRouter();
//   const onContinue = () => {
//     router.navigate("/login")
//   }

//   return (
//     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//       <MyButton title={"Continue"} onPress={onContinue}/>
     
//     </View>
//   )
// }

import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Link, useRouter } from "expo-router";
const Index = () => {
  const swiperRef = useRef(null);
  const router = useRouter();
  // Function to handle "Skip" to next slide
  const handleSkip = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  // Function for "Get Started" to navigate to login
  const handleGetStarted = () => {
    router.navigate("/login")
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      autoplay={true}
      autoplayTimeout={3} // Slide time: 5 seconds
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
    >
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Image source={require('@/assets/images/slide1.png')} style={styles.image} />
        <Text style={styles.title}>Request Dispatch</Text>
        <Text style={styles.description}>The fastest app to book a dispatch rider online near you.</Text>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Image source={require('@/assets/images/slide2.png')} style={styles.image} />
        <Text style={styles.title}>Book Driver</Text>
        <Text style={styles.description}>Request and book a dispatcher to pick your parcel from your desired location.</Text>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 3 */}
      <View style={styles.slide}>
        <Image source={require('@/assets/images/slide3.png')} style={styles.image} />
        <Text style={styles.title}>Track your Driver</Text>
        <Text style={styles.description}>Track your driver from any location with a global mapping system.</Text>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 4 (Last Slide) */}
      <View style={styles.slide}>
        <Image source={require('@/assets/images/slide4.png')} style={styles.image} />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.description}>Some random text about getting started with zaza.</Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    color: '#FF5656',
    fontSize: 16,
  },
  getStartedButton: {
    backgroundColor: '#FF5656',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 18,
  },
  dotStyle: {
    backgroundColor: '#d3d3d3',
  },
  activeDotStyle: {
    backgroundColor: '#FF5656',
  },
});

// export default OnboardingScreen;

export default Index;