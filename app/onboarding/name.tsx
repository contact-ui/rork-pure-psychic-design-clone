import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, Image } from "react-native";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function NameScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [name, setName] = useState("");
  
  const handleNext = () => {
    if (name.trim()) {
      updateProfile({
        name: name.trim(),
      });
      router.push("./relationship");
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
        <Text style={styles.title}>Your Name</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.70} 
        totalSteps={7} 
        currentStep={4} 
      />
      
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1620428268482-cf1851a383b0?q=80&w=200" }}
            style={styles.avatar}
          />
        </View>
        
        <Text style={styles.label}>Enter your name*</Text>
        
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder=""
          autoCapitalize="words"
          style={styles.input}
        />
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={!name.trim()}
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
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.primary.card,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    overflow: "hidden",
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  label: {
    color: "#6E6E9B",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    backgroundColor: Colors.primary.card,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 24,
    color: Colors.primary.text,
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});