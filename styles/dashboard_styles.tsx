import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcomeText: {
        fontSize: 24,
        color: '#000000',
    },
    logoutButton: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'black',
        width: 250,
        height: 50,
    },
    logoutButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },
});

export default dashboardStyles;
