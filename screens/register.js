import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
                            placeholder="Name"
                            placeholderTextColor={'black'}
                            style={styles.input}
                        />
                    </View>

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

                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor={'black'}
                            secureTextEntry={!confirmPasswordVisible}
                            style={styles.input}
                        />
                        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                            <Ionicons
                                name={confirmPasswordVisible ? "eye" : "eye-off"}
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.registerButton}>
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loginContainer}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.push('Login')}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'white',
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
        borderWidth: 1,
        borderColor: 'black',
        padding: 20,
        borderRadius: 24,
        width: '100%',
        marginBottom: 20,
        height:  65
    },
    passwordContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 20,
        borderRadius: 24,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
    },
    buttonContainer: {
        width: '100%',
    },
    registerButton: {
        width: '100%',
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 16,
        marginTop: 30,
    },
    registerButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    loginText: {
        color: 'black',
        fontWeight: 'bold',
    },
});

export default Register;
