import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppStyles from "../../styles/log_in_styles";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigation = useNavigation();

  const handleLogin = () => {
    // Dummy login auth. If login is successful:
    if (username === "admin" && password === "password") { // Example validation
      navigation.dispatch(
        StackActions.replace('Dashboard')
      );
      setUsername(''); // Clear username input
      setPassword(''); // Clear password input
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleSignup = () => {
    // Navigate to the Sign Up screen
    navigation.dispatch(
      StackActions.replace('Sign Up')
    );
  };

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.userInput}
        placeholder='Username'
        onChangeText={(val) => setUsername(val)}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={[AppStyles.userInput]} // Take up available space
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={!showPassword} // Toggle password visibility
        />
        <TouchableOpacity style={{ position: 'absolute', right: 30 }}
          onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-outline' : 'eye-off-outline'} // Toggle icon
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={AppStyles.button} onPress={handleLogin}>
        <Text style={AppStyles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={AppStyles.textOut}>Don't have an account?
        <TouchableOpacity onPress={handleSignup}>
          <Text style={AppStyles.textCallSignUp}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );

}

