import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import SelectionCard from "@/components/SelectionCard";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Gender } from "@/types/user";
import Svg, { Circle, Path } from "react-native-svg";

export default function GenderScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [gender, setGender] = useState<Gender | null>(null);
  
  const handleNext = () => {
    if (gender) {
      updateProfile({
        gender,
      });
      router.push("./name");
    }
  };
  
  const MaleIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx={20} cy={20} r={15} fill="transparent" stroke={Colors.primary.accent} strokeWidth={2} />
      <Path
        d="M20 12 L20 28 M14 18 L26 18"
        stroke={Colors.primary.accent}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M30 10 L30 2 M30 2 L22 2 M30 2 L24 8"
        stroke={Colors.primary.accent}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
  
  const FemaleIcon = () => (
    <Svg width={40} height={40} viewBox="0 0 40 40">
      <Circle cx={20} cy={15} r={13} fill="transparent" stroke={Colors.primary.accent} strokeWidth={2} />
      <Path
        d="M20 28 L20 38 M14 33 L26 33"
        stroke={Colors.primary.accent}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Your Gender</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.56} 
        totalSteps={7} 
        currentStep={3} 
      />
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Your gender is important to personalize your relationship guide and wellness readings.
        </Text>
        
        <View style={styles.cardsContainer}>
          <SelectionCard
            title="Male"
            icon={<MaleIcon />}
            selected={gender === "male"}
            onPress={() => setGender("male")}
            style={styles.card}
            testID="male-option"
          />
          
          <SelectionCard
            title="Female"
            icon={<FemaleIcon />}
            selected={gender === "female"}
            onPress={() => setGender("female")}
            style={styles.card}
            testID="female-option"
          />
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={!gender}
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
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  description: {
    color: Colors.primary.text,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 40,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 40,
  },
  card: {
    width: 140,
    height: 140,
    margin: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
});