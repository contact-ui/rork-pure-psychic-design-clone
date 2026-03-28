import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Globe } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function BirthPlaceScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [birthPlace, setBirthPlace] = useState("");
  
  const handleNext = () => {
    if (birthPlace.trim()) {
      updateProfile({
        birthPlace: birthPlace.trim(),
      });
      router.push("./gender");
    }
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Birth Place</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.42} 
        totalSteps={7} 
        currentStep={2} 
      />
      
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your birth place"
            value={birthPlace}
            onChangeText={setBirthPlace}
            autoCapitalize="words"
            style={styles.input}
          />
          <Globe 
            color={Colors.primary.text} 
            size={24} 
            style={styles.globeIcon}
          />
        </View>
        
        <Text style={styles.description}>
          We will analyze the position of stars and planets in your birth place at the time of your birth.
        </Text>
        
        <View style={styles.starsContainer}>
          <View style={[styles.star, styles.smallStar, { left: "10%", top: "20%" }]} />
          <View style={[styles.star, styles.mediumStar, { left: "80%", top: "40%" }]} />
          <View style={[styles.star, styles.smallStar, { left: "30%", top: "60%" }]} />
          <View style={[styles.star, styles.largeStar, { left: "70%", top: "70%" }]} />
          <View style={[styles.star, styles.mediumStar, { left: "20%", top: "80%" }]} />
          <View style={[styles.shootingStar, { left: "60%", top: "30%" }]} />
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={!birthPlace.trim()}
        />
      </View>
    </KeyboardAvoidingView>
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
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    marginTop: 40,
  },
  input: {
    backgroundColor: Colors.primary.card,
    borderRadius: 100,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 48,
    color: Colors.primary.text,
    fontSize: 16,
  },
  globeIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  description: {
    color: Colors.primary.text,
    fontSize: 16,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  starsContainer: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  star: {
    position: "absolute",
    backgroundColor: Colors.primary.text,
    borderRadius: 10,
  },
  smallStar: {
    width: 2,
    height: 2,
  },
  mediumStar: {
    width: 3,
    height: 3,
  },
  largeStar: {
    width: 4,
    height: 4,
  },
  shootingStar: {
    position: "absolute",
    width: 40,
    height: 1,
    backgroundColor: Colors.primary.text,
    transform: [{ rotate: "45deg" }],
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});