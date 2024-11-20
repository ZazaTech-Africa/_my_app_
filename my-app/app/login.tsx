import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Add this for icons

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false); // To show email checkmark
  const [isPasswordValid, setIsPasswordValid] = useState(false); // To show password checkmark
  const router = useRouter();

  const handleSignIn = () => {
    // Simulated backend data
    const backendEmail = "test@example.com";
    const backendPassword = "password123";

    // Simulate backend validation
    if (email === backendEmail && password === backendPassword) {
      console.log("Signed in with", email, password);
      setError('');
      // Redirect to some page, e.g., home page after login success
      router.navigate('/home');
    } else {
      // Show error if credentials don't match
      setError('Email or password is incorrect');
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    const backendEmail = "test@example.com";
    setIsEmailValid(value === backendEmail); // Check if email matches
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    const backendPassword = "password123";
    setIsPasswordValid(value === backendPassword); // Check if password matches
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In");
  };

  const redirectToSignUp = () => {
    router.navigate("/signup");
  };

  const handleForgotPassword = () => {
    router.navigate("/forgotPassword"); // Navigate to the Forgot Password screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello there</Text>
      <Text style={styles.subtitle}>Welcome back, let's have you logged in shall we?</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error ? styles.errorInput : null]}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {isEmailValid && <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {isPasswordValid && <Ionicons name="checkmark-circle" size={24} color="green" style={styles.icon} />}
      </View>
      
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={styles.signUpTextContainer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={redirectToSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  errorInput: {
    borderColor: '#ff3b30', // Red border for error
  },
  errorText: {
    color: '#ff3b30',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#6e6e6e',
    textAlign: 'right',
    marginBottom: 20,
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
  googleButton: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  googleButtonText: {
    color: '#6e6e6e',
    fontWeight: 'bold',
  },
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: '#6e6e6e',
    marginRight: 5,
  },
  signUpText: {
    color: '#ff3b30',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
