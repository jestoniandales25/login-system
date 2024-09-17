import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import signupStyles from "../../styles/sign_up_styles";


const signup = ({ onGoBack }) => { 
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
      <TextInput 
        style={signupStyles.signupInput}
        placeholder='Password'
      />
      <TextInput 
        style={signupStyles.signupInput}
        placeholder='Corfirm Password'
      />
      <TouchableOpacity style={signupStyles.button} onPress={onGoBack}>
        <Text style={signupStyles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={signupStyles.textOut}>Already have an account?</Text>
    </View>
  );
};

export default signup
