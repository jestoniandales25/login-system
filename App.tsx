import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles from './styles/AppStyles';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  
  const handleLogin = () => {
    // Handle login logic here, e.g., send username and password to server
    console.log('Username:', username);
    console.log('Password:', password);
  };
  

  return (
    <View style={AppStyles.container}>
      <Text>Username:</Text>
      <TextInput 
        style={AppStyles.userInput}
        placeholder='Username'
        onChangeText={(val) => setUsername(val)}
      />
      <Text>Password:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
        <TextInput 
          style={[AppStyles.userInput]} // Take up available space
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={!showPassword} // Toggle password visibility
        />
        <TouchableOpacity  style={{ position: 'absolute', right: 30 }}
        onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? 'eye-off-outline' : 'eye-outline'} // Toggle icon
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={AppStyles.button} onPress={handleLogin}>
        <Text style={AppStyles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={AppStyles.button} onPress={() => console.log('Register button pressed')}> 
        <Text style={AppStyles.text}>Register</Text>
      </TouchableOpacity>
      

    </View>
  );
  
}

