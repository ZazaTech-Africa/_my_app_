import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // for the warning icon
import NetInfo from '@react-native-community/netinfo'; // for network checking

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(true); // to track network status
  const [passwordError, setPasswordError] = useState(''); // for password match error
  const router = useRouter();

  // Check network status on component mount
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNetworkAvailable(state.isConnected && state.isInternetReachable);
    });

    // Clean up the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match'); // Show error if passwords don't match
      return;
    }

    // Clear the error if passwords match
    setPasswordError('');

    // Proceed with the sign-up logic
    console.log("Signed up with", name, email, password);

    // Redirect to SignIn screen after successful sign-up
    router.navigate("/login");
  };

  const handleGoogleSignUp = () => {
    // Handle Google Sign-Up logic here
    console.log("Google Sign-Up");
  };

  const redirectToSignIn = () => {
    router.navigate("/login"); // Navigate to SignIn screen
  };

  return (
    <View style={styles.container}>
      {/* Show network alert if the network is not available */}
      {!isNetworkAvailable && (
        <View style={styles.networkAlert}>
          <MaterialIcons name="error-outline" size={18} color="#ff3b30" />
          <Text style={styles.networkAlertText}>There is poor network connection</Text>
        </View>
      )}

      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Hello there, do have a great day!</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Show password error message if passwords do not match */}
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
        <Text style={styles.googleButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <View style={styles.signInTextContainer}>
        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <TouchableOpacity onPress={redirectToSignIn}>
          <Text style={styles.signInText}>Sign in</Text>
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
  networkAlert: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffe6e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  networkAlertText: {
    color: '#ff3b30',
    marginLeft: 5,
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
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#ff3b30',
    marginBottom: 10,
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpButtonText: {
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
  signInTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  haveAccountText: {
    color: '#6e6e6e',
    marginRight: 5,
  },
  signInText: {
    color: '#ff3b30',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
