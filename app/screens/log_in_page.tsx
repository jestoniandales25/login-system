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
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    let isValid = true;

    setUsernameError('');
    setPasswordError('');

    if (username === '') {
      setUsernameError('Please Enter a Username');
      isValid = false;
    } else if (username !== "admin") {
      setUsernameError('Invalid Username');
      isValid = false;
    }

    if (password === '') {
      setPasswordError('Please Enter a Password');
      isValid = false;
    } else if (password !== "password") {
      setPasswordError('Invalid Password');
      isValid = false;
    }

    if (isValid) {
      navigation.dispatch(
        StackActions.replace('Dashboard'));
      setUsername('');
      setPassword('');
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

      {usernameError ? <Text style={AppStyles.uerrorText}>{usernameError}</Text> : null}

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

      {passwordError ? <Text style={AppStyles.perrorText}>{passwordError}</Text> : null}

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

