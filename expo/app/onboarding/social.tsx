import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function SocialScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [source, setSource] = useState<string | null>(null);
  
  const handleSelect = (selectedSource: string) => {
    setSource(selectedSource);
  };
  
  const handleNext = () => {
    if (source) {
      updateProfile({
        referralSource: source,
      });
    }
    router.push("./complete");
  };
  
  const sources = [
    "App Store",
    "Social media (Facebook, Instagram, TikTok)",
    "Online ads",
    "News, articles or blog",
    "Friends or family",
    "Influencer recommendation",
    "Other"
  ];
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Social</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.question}>
          How did you hear about Pure Psychic?
        </Text>
        
        <View style={styles.optionsContainer}>
          {sources.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                source === item && styles.selectedOption,
              ]}
              onPress={() => handleSelect(item)}
              testID={`source-${item.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Text style={styles.optionText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="SKIP" 
          onPress={handleNext} 
          variant="text"
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
    paddingTop: 20,
  },
  question: {
    color: Colors.primary.text,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 24,
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: `${Colors.primary.accent}30`,
    borderColor: Colors.primary.accent,
    borderWidth: 1,
  },
  optionText: {
    color: Colors.primary.text,
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
});