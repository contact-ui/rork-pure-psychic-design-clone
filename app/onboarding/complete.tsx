import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Cookie } from "lucide-react-native";
import Button from "@/components/Button";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";


export default function CompleteScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  
  const handleGoogleSignup = () => {
    setLoading(true);
    // Simulate signup
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };
  
  const handleEmailSignup = () => {
    setLoading(true);
    // Simulate signup
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1500);
  };
  
  const handleSkip = () => {
    router.replace("/(tabs)");
  };
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <Text style={styles.title}>Stay tuned!</Text>
      </View>
      
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.message}>
          Create an account to save your progress
        </Text>
        
        <View style={styles.spacer} />
        
        <Button 
          title="CONTINUE WITH GOOGLE"
          onPress={handleGoogleSignup}
          style={styles.googleButton}
          textStyle={styles.googleButtonText}
          loading={loading}
          icon={<Cookie color="#000000" size={24} />}
        />
        
        <Button 
          title="CONTINUE WITH EMAIL"
          onPress={handleEmailSignup}
          style={styles.emailButton}
          variant="outline"
          loading={loading}
        />
        
        <Button 
          title="SKIP"
          onPress={handleSkip}
          variant="text"
          style={styles.skipButton}
          disabled={loading}
        />
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
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.primary.border,
    width: "100%",
  },
  progress: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.primary.accent,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: "center",
  },
  message: {
    color: Colors.primary.text,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 24,
  },
  spacer: {
    flex: 1,
  },
  googleButton: {
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    color: "#000000",
  },

  emailButton: {
    marginBottom: 16,
    width: "100%",
  },
  skipButton: {
    marginBottom: 40,
  },
});