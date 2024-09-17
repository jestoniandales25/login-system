import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import signupStyles from "../../styles/sign_up_styles";
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons


const signup = ({ onGoBack }) => { 

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.textHeader}>Sign Up</Text>
      <TextInput 
        style={signupStyles.signupInput}
        placeholder='Username'
      />
      <TextInput 
        style={signupStyles.signupInput}
        placeholder='Email'
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
        <TextInput 
          style={[signupStyles.signupInput]} 
          placeholder='Password'
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
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}> 
        <TextInput 
          style={[signupStyles.signupInput]} 
          placeholder='Confirm Password'
          secureTextEntry={!showConfirmPassword} // Toggle password visibility
        />
        <TouchableOpacity  style={{ position: 'absolute', right: 30 }}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons 
            name={showConfirmPassword ?  'eye-outline' : 'eye-off-outline'} // Toggle icon
            size={24} 
            color="black" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={signupStyles.button}>
        <Text style={signupStyles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={signupStyles.textOut}>Already have an account?
        <TouchableOpacity onPress={onGoBack}>
          <Text style={signupStyles.textCallLogin}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default signup
