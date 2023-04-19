import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSignUp = () => {
    navigation.navigate('SignupScreen');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    // Handle login logic here
  
    // Navigate to home screen if login successful
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
    <Image source={require('../assets/Logo1.jpg')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>เข้าสู่ระบบ</Text>
      <TextInput
        style={styles.input}
        placeholder="อีเมล์"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="รหัสผ่าน"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotButtonText}>ลืมรหัสผาน?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>สมัครสมาชิก</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: -120, // Adjust the margin to push the entire form up
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10, // Adjust the margin to move the button closer
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20, // Adjust the margin to move the logo up
  },
  forgotButton: {
    marginTop: 20,
  },
  forgotButtonText: {
    color: 'darkgray',
    fontSize: 16,
  },
  signUpButton: {
    marginTop: 10,
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;