import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Heart, Home, Link, Users, Puzzle, HeartCrack, HeartOff, HelpCircle } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import SelectionCard from "@/components/SelectionCard";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";
import { RelationshipStatus } from "@/types/user";

export default function RelationshipScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [status, setStatus] = useState<RelationshipStatus | null>(null);
  
  const handleNext = () => {
    if (status) {
      updateProfile({
        relationshipStatus: status,
      });
      router.push("./interests");
    }
  };
  
  const relationshipOptions = [
    { id: "single", title: "Single", icon: <Heart color={Colors.primary.accent} size={32} /> },
    { id: "in_relationship", title: "In a relationship", icon: <Heart color={Colors.primary.accent} size={32} /> },
    { id: "cohabiting", title: "Cohabiting", icon: <Home color={Colors.primary.accent} size={32} /> },
    { id: "engaged", title: "Engaged", icon: <Link color={Colors.primary.accent} size={32} /> },
    { id: "married", title: "Married", icon: <Users color={Colors.primary.accent} size={32} /> },
    { id: "separated", title: "Separated", icon: <Puzzle color={Colors.primary.accent} size={32} /> },
    { id: "divorced", title: "Divorced", icon: <HeartCrack color={Colors.primary.accent} size={32} /> },
    { id: "widowed", title: "Widowed", icon: <HeartOff color={Colors.primary.accent} size={32} /> },
    { id: "complicated", title: "It's complicated", icon: <HelpCircle color={Colors.primary.accent} size={32} /> },
  ];
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Relationship Status</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.84} 
        totalSteps={7} 
        currentStep={5} 
      />
      
      <View style={styles.content}>
        <Text style={styles.question}>
          Which word best describes your relationship status?
        </Text>
        
        <ScrollView 
          style={styles.optionsContainer}
          contentContainerStyle={styles.optionsContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.optionsGrid}>
            {relationshipOptions.map((option) => (
              <SelectionCard
                key={option.id}
                title={option.title}
                icon={option.icon}
                selected={status === option.id as RelationshipStatus}
                onPress={() => setStatus(option.id as RelationshipStatus)}
                style={styles.card}
                testID={`relationship-${option.id}`}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={!status}
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