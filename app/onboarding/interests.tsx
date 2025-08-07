import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { DollarSign, Briefcase, Users, Heart, File, User } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import SelectionCard from "@/components/SelectionCard";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Interest } from "@/types/user";

export default function InterestsScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);
  
  const handleToggleInterest = (interest: Interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  
  const handleNext = () => {
    if (selectedInterests.length > 0) {
      updateProfile({
        interests: selectedInterests,
      });
      router.push("./reminders");
    }
  };
  
  const interestOptions = [
    { id: "money", title: "Money", icon: <DollarSign color={Colors.primary.accent} size={32} /> },
    { id: "work", title: "Work", icon: <Briefcase color={Colors.primary.accent} size={32} /> },
    { id: "friends", title: "Friends", icon: <Users color={Colors.primary.accent} size={32} /> },
    { id: "love", title: "Love", icon: <Heart color={Colors.primary.accent} size={32} /> },
    { id: "family", title: "Family", icon: <File color={Colors.primary.accent} size={32} /> },
    { id: "career", title: "Career", icon: <User color={Colors.primary.accent} size={32} /> },
  ];
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Interests</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.98} 
        totalSteps={7} 
        currentStep={6} 
      />
      
      <View style={styles.content}>
        <Text style={styles.question}>
          What interests you most in life?
        </Text>
        
        <ScrollView 
          style={styles.optionsContainer}
          contentContainerStyle={styles.optionsContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.optionsGrid}>
            {interestOptions.map((option) => (
              <SelectionCard
                key={option.id}
                title={option.title}
                icon={option.icon}
                selected={selectedInterests.includes(option.id as Interest)}
                onPress={() => handleToggleInterest(option.id as Interest)}
                style={styles.card}
                testID={`interest-${option.id}`}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={selectedInterests.length === 0}
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
    flex: 1,
  },
  optionsContent: {
    paddingBottom: 20,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    height: 100,
    marginBottom: 16,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});