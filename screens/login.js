import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.backgroundImage} />

            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder="Email" 
                            placeholderTextColor={'black'} 
                            style={styles.input} 
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'black'}
                            secureTextEntry={!passwordVisible}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                            <Ionicons
                                name={passwordVisible ? "eye" : "eye-off"}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.registerContainer}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('Register')}>
                            <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    content: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    logoContainer: {
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        height: 170,
        width: 150,
        marginBottom: 30,
    },
    formContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        height: 65
    },
    passwordContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: 65
    },
    input: {
        flex: 1,
    },
    buttonContainer: {
        width: '100%',
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 16,
        marginTop: 30,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    registerText: {
        color: 'black',
        fontWeight: 'bold'
    },
});

export default Login;
