import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Import the router for navigation

const ForgotPasswordScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']); // OTP array for each digit
  const [error, setError] = useState(''); // Error message state
  const otpRefs = useRef([]); // To hold references to all the OTP inputs
  const router = useRouter(); // Initialize the router

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-move to the next input field if the input is filled
    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1].focus();
    }

    // Clear error if user starts typing again
    setError('');
  };

  const resendCode = () => {
    console.log("Resend Code");
    // Logic to resend OTP to the email
  };

  const handleSignIn = () => {
    // Logic to verify OTP
    const enteredOtp = otp.join('');  // Combine OTP array into a string
    const correctOtp = "1234"; // Simulate a correct OTP for verification

    if (enteredOtp === correctOtp) {
      console.log("OTP Verified");
      // After successful verification, navigate to the sign-in page
      router.navigate("/homeScreen");  // Redirect to the sign-in page
    } else {
      setError('OTP is Incorrect'); // Show error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>We sent a four digit OTP to your email address</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={[styles.otpInput, otp[index] ? styles.filledOtpInput : null]}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(el) => otpRefs.current[index] = el} // Store input refs
          />
        ))}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.resendContainer}>
        <Text style={styles.didntGetCode}>Didn't get code?</Text>
        <TouchableOpacity onPress={resendCode}>
          <Text style={styles.resendCode}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6e6e6e',
    textAlign: 'center',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#f2f2f2',
  },
  filledOtpInput: {
    borderColor: 'green', // Highlight green when the OTP digit is entered
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  didntGetCode: {
    color: '#6e6e6e',
  },
  resendCode: {
    color: '#ff3b30',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signInButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
