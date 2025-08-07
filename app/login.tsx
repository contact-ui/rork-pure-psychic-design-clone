import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Cookie } from "lucide-react-native";

import BackButton from "@/components/BackButton";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";

export default function LoginScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);



  const handleGoogleLogin = () => {
    setLoading(true);
    // Simulate Google login
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };

  const handleEmailLogin = () => {
    setLoading(true);
    // Simulate email login
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Login</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1596638787647-904d822d751e?q=80&w=200" }}
            style={styles.logo}
          />
        </View>
        
        <Text style={styles.subtitle}>
          Sign in to save your progress and access your personalized readings
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.googleButton}
            onPress={handleGoogleLogin}
            disabled={loading}
          >
            <Cookie color={Colors.primary.text} size={24} />
            <Text style={styles.googleButtonText}>CONTINUE WITH GOOGLE</Text>
          </TouchableOpacity>
          
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>
          
          <TouchableOpacity 
            style={styles.emailButton}
            onPress={handleEmailLogin}
            disabled={loading}
          >
            <Text style={styles.emailButtonText}>CONTINUE WITH EMAIL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: "center",
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.primary.card,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    overflow: "hidden",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  subtitle: {
    color: Colors.primary.text,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 48,
  },
  buttonContainer: {
    width: "100%",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingVertical: 16,
    marginBottom: 16,
  },
  googleButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.primary.border,
  },
  dividerText: {
    color: Colors.primary.text,
    marginHorizontal: 16,
  },
  emailButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary.card,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.primary.border,
    paddingVertical: 16,
  },
  emailButtonText: {
    color: Colors.primary.text,
    fontSize: 16,
    fontWeight: "600",
  },
});