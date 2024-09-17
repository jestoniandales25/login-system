import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import dashboardStyles from '../../styles/dashboard_styles'; // Importing the styles
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { StackActions } from '@react-navigation/native';


export default function Dashboard() {
    const navigation = useNavigation(); // Initialize navigation

    // Create animated values for opacity and translateY
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0
    const floatAnim = useRef(new Animated.Value(30)).current; // Initial translateY 30

    const fadeAnimButton = useRef(new Animated.Value(0)).current; // Initial opacity 0 for button
    const floatAnimButton = useRef(new Animated.Value(30)).current; // Initial translateY 30 for button

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(floatAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.timing(fadeAnimButton, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(floatAnimButton, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }, [fadeAnim, floatAnim, fadeAnimButton, floatAnimButton]);

    const handleLogout = () => {
        // Navigate back to the Login screen
        navigation.dispatch(
            StackActions.replace('Log In')
        );
    };

    return (
        <View style={dashboardStyles.container}>
            <Animated.View
                style={{
                    opacity: fadeAnim,
                    transform: [{ translateY: floatAnim }],
                }}
            >
                <Text style={dashboardStyles.welcomeText}>Welcome To Our Project!</Text>
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnimButton,
                    transform: [{ translateY: floatAnimButton }],
                }}
            >
                <TouchableOpacity style={dashboardStyles.logoutButton} onPress={handleLogout}>
                    <Text style={dashboardStyles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}
