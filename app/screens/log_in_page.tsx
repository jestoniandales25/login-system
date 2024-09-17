import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppStyles from "../../styles/log_in_styles";

export default function log_in_page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={AppStyles.container}>
      <TextInput
        style={AppStyles.userInput}
        placeholder="Username"
        onChangeText={(val) => setUsername(val)}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={[AppStyles.userInput]}
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={{ position: "absolute", right: 30 }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={AppStyles.button} onPress={handleLogin}>
        <Text style={AppStyles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={() => console.log("Register button pressed")}
      >
        <Text style={AppStyles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
