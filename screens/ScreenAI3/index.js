import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    entities: Logins
  } = useSelector(state => state.Logins);
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>MyKomatsu</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#999" />
        <TextInput style={[styles.input, styles.poXQjliz]} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
        <TouchableOpacity style={[styles.loginButton, styles.JhvGdGcI]} data={Logins} onPress={() => {
        navigation.navigate("welcome");
      }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    marginBottom: 50
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#007AFF"
  },
  formContainer: {
    width: "80%"
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16
  },
  loginButton: {
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  poXQjliz: {
    paddingTop: 5
  },
  JhvGdGcI: {
    marginTop: 10
  }
});
export default LoginScreen;