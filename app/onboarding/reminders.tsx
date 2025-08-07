import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Bell } from "lucide-react-native";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function RemindersScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [hour, setHour] = useState<number | null>(9);
  const [minute, setMinute] = useState<number | null>(0);
  
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  
  const handleNext = () => {
    if (hour !== null && minute !== null) {
      updateProfile({
        horoscopeReminder: {
          enabled: true,
          time: {
            hour,
            minute,
          },
        },
      });
      router.push("./social");
    }
  };
  
  const handleSkip = () => {
    updateProfile({
      horoscopeReminder: {
        enabled: false,
      },
    });
    router.push("./social");
  };
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Horoscope Reminders</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={1} 
        totalSteps={7} 
        currentStep={7} 
      />
      
      <View style={styles.content}>
        <View style={styles.bellContainer}>
          <Bell color={Colors.primary.accent} size={48} />
        </View>
        
        <Text style={styles.description}>
          Don&apos;t miss anything.
          Get your daily horoscope on
        </Text>
        
        <View style={styles.pickerContainer}>
          <ScrollView 
            style={styles.pickerColumn}
            showsVerticalScrollIndicator={false}
          >
            {hours.map((h) => (
              <Text
                key={`hour-${h}`}
                style={[
                  styles.pickerItem,
                  hour === h && styles.selectedPickerItem,
                ]}
                onPress={() => setHour(h)}
              >
                {h < 10 ? `0${h}` : h}
              </Text>
            ))}
          </ScrollView>
          
          <ScrollView 
            style={styles.pickerColumn}
            showsVerticalScrollIndicator={false}
          >
            {minutes.map((m) => (
              <Text
                key={`minute-${m}`}
                style={[
                  styles.pickerItem,
                  minute === m && styles.selectedPickerItem,
                ]}
                onPress={() => setMinute(m)}
              >
                {m < 10 ? `0${m}` : m}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={hour === null || minute === null}
        />
        <Button 
          title="SKIP" 
          onPress={handleSkip} 
          variant="text"
          style={styles.skipButton}
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
  bellContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary.card,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  description: {
    color: Colors.primary.text,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    height: 200,
  },
  pickerColumn: {
    flex: 1,
    marginHorizontal: 4,
  },
  pickerItem: {
    color: "#6E6E9B",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 12,
  },
  selectedPickerItem: {
    color: Colors.primary.text,
    fontSize: 24,
    fontWeight: "bold",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  skipButton: {
    marginTop: 12,
  },
});