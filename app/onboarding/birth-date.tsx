import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import ZodiacWheel from "@/components/ZodiacWheel";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function BirthDateScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [day, setDay] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2025 - i);
  
  const handleNext = () => {
    if (day && month && year) {
      updateProfile({
        birthDate: {
          day,
          month: month + 1, // Adjust for 0-based index
          year,
        },
      });
      router.push("./birth-time");
    }
  };
  
  const isNextDisabled = !day || !month || !year;
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Date of Birth</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.14} 
        totalSteps={7} 
        currentStep={0} 
      />
      
      <View style={styles.content}>
        <ZodiacWheel size={280} />
        
        <Text style={styles.description}>
          This date is important to determine your sun sign, numerology, and compatibility.
        </Text>
        
        <View style={styles.pickerContainer}>
          <ScrollView 
            style={styles.pickerColumn}
            showsVerticalScrollIndicator={false}
          >
            {days.map((d) => (
              <Text
                key={`day-${d}`}
                style={[
                  styles.pickerItem,
                  day === d && styles.selectedPickerItem,
                ]}
                onPress={() => setDay(d)}
              >
                {d < 10 ? `0${d}` : d}
              </Text>
            ))}
          </ScrollView>
          
          <ScrollView 
            style={styles.pickerColumn}
            showsVerticalScrollIndicator={false}
          >
            {months.map((m, index) => (
              <Text
                key={`month-${index}`}
                style={[
                  styles.pickerItem,
                  month === index && styles.selectedPickerItem,
                ]}
                onPress={() => setMonth(index)}
              >
                {m}
              </Text>
            ))}
          </ScrollView>
          
          <ScrollView 
            style={styles.pickerColumn}
            showsVerticalScrollIndicator={false}
          >
            {years.map((y) => (
              <Text
                key={`year-${y}`}
                style={[
                  styles.pickerItem,
                  year === y && styles.selectedPickerItem,
                ]}
                onPress={() => setYear(y)}
              >
                {y}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Next" 
          onPress={handleNext} 
          disabled={isNextDisabled}
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
    marginVertical: 24,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 200,
    marginTop: 20,
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
});