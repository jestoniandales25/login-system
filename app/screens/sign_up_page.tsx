import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import signupStyles from "../../styles/sign_up_styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';


export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.dispatch(
      StackActions.replace('Log In')
    );
  };
  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    console.log('Signing up with:', { username, email, password }); 
    navigation.dispatch(
      StackActions.replace('Dashboard')
    );
    
};

  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.textHeader}>Sign Up</Text>
      <TextInput
        style={signupStyles.signupInput}
        placeholder='Username'
        onChangeText={setUsername}
      />
      <TextInput
        style={signupStyles.signupInput}
        placeholder='Email'
        onChangeText={setEmail}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={[signupStyles.signupInput]}
          placeholder='Password'
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 30 }}
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ?  'eye-outline' : 'eye-off-outline'}
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={[signupStyles.signupInput]}
          placeholder='Confirm Password'
          secureTextEntry={!showConfirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 30 }}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons
            name={showConfirmPassword ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={signupStyles.button} onPress={handleSignUp}>
        <Text style={signupStyles.text}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={signupStyles.textOut}>Already have an account?
        <TouchableOpacity onPress={handleLogin}>
          <Text style={signupStyles.textCallLogin}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};
