import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppStyles from "../../styles/log_in_styles";
import Signup from "../screens/sign_up_page";



export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  
  const handleLogin = () => {
    // Handle login logic here, e.g., send username and password to server
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignup = () => {
    setIsSignUpVisible(true); // Show the Signup component
  };
  

  return (
    <View style={AppStyles.container}>

      {isSignUpVisible ? ( // Conditionally render Signup
        <Signup onGoBack={() => setIsSignUpVisible(false)} /> 
      ) : (
        <>
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
            <TouchableOpacity  style={{ position: 'absolute', right: 30 }}
            onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ?  'eye-outline' : 'eye-off-outline'} // Toggle icon
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
          
        </>
      )}
    </View>
  );
  
}

