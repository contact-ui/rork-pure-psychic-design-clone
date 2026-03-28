import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function WelcomeScreen() {
  const router = useRouter();
  const { profile, loading } = useUserProfile();

  useEffect(() => {
    // If user has already completed onboarding, redirect to main app
    if (!loading && profile.name) {
      router.replace("/(tabs)");
    }
  }, [loading, profile, router]);

  const handleStart = () => {
    router.push("./onboarding/birth-date");
  };

  const handleLogin = () => {
    router.push("./login");
  };

  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>PURE PSYCHIC</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: "https://images.unsplash.com/photo-1532968885671-19be8d9d4284?q=80&w=1000" }}
          style={styles.backgroundImage}
        />
        <LinearGradient
          colors={["transparent", "#0A0A2A"]}
          style={styles.gradient}
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Discover your cosmic path and improve your relationships with astrology
        </Text>
        
        <View style={styles.starsContainer}>
          <Text style={styles.starIcon}>✦</Text>
          <Text style={styles.starIcon}>☾</Text>
          <Text style={styles.starIcon}>✧</Text>
          <Text style={styles.starIcon}>☾</Text>
          <Text style={styles.starIcon}>✦</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="GET STARTED" 
            onPress={handleStart} 
            style={styles.startButton}
          />
          
          <Button 
            title="ALREADY A USER?" 
            onPress={handleLogin} 
            variant="text"
            style={styles.loginButton}
          />
        </View>
        
        <Text style={styles.disclaimer}>
          By tapping &quot;Get Started&quot;, you accept our Terms of Use and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.background,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    width: "100%",
    alignItems: "center",
    zIndex: 10,
  },
  logoText: {
    color: Colors.primary.text,
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    position: "absolute",
    top: 0,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  starIcon: {
    color: Colors.primary.text,
    fontSize: 24,
    marginHorizontal: 12,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 24,
  },
  startButton: {
    marginBottom: 16,
  },
  loginButton: {
    marginBottom: 16,
  },
  disclaimer: {
    color: "#6E6E9B",
    fontSize: 12,
    textAlign: "center",
  },
});