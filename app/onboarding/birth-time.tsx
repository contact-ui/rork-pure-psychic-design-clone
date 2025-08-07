import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import StarryBackground from "@/components/StarryBackground";
import Colors from "@/constants/colors";
import { useUserProfile } from "@/hooks/useUserProfile";
import Svg, { Path, Circle, Text as SvgText } from "react-native-svg";

export default function BirthTimeScreen() {
  const router = useRouter();
  const { updateProfile } = useUserProfile();
  
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  
  const handleNext = () => {
    if (hour !== null && minute !== null) {
      updateProfile({
        birthTime: {
          hour,
          minute,
        },
      });
      router.push("./birth-place");
    } else {
      // If user doesn't know the time
      updateProfile({
        birthTime: {
          hour: 12,
          minute: 0,
        },
      });
      router.push("./birth-place");
    }
  };
  
  const handleDontKnow = () => {
    updateProfile({
      birthTime: {
        hour: 12,
        minute: 0,
      },
    });
    router.push("./birth-place");
  };
  
  return (
    <View style={styles.container}>
      <StarryBackground />
      
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Birth Time</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ProgressBar 
        progress={0.28} 
        totalSteps={7} 
        currentStep={1} 
      />
      
      <View style={styles.content}>
        <View style={styles.chartContainer}>
          <Svg width={280} height={140} viewBox="0 0 280 140">
            {/* Outer arc */}
            <Path
              d="M 10 140 A 130 130 0 0 1 270 140"
              stroke={Colors.primary.border}
              strokeWidth={1}
              fill="transparent"
            />
            
            {/* Inner arc */}
            <Path
              d="M 70 140 A 70 70 0 0 1 210 140"
              stroke={Colors.primary.border}
              strokeWidth={1}
              fill="transparent"
            />
            
            {/* House markers */}
            <Path d="M 140 140 L 140 10" stroke={Colors.primary.border} strokeWidth={1} />
            <Path d="M 70 140 L 30 40" stroke={Colors.primary.border} strokeWidth={1} />
            <Path d="M 210 140 L 250 40" stroke={Colors.primary.border} strokeWidth={1} />
            
            {/* Labels */}
            <SvgText x="140" y="5" fontSize={12} fill={Colors.primary.text} textAnchor="middle">MC</SvgText>
            <SvgText x="10" y="140" fontSize={12} fill={Colors.primary.text} textAnchor="start">AC</SvgText>
            <SvgText x="270" y="140" fontSize={12} fill={Colors.primary.text} textAnchor="end">DC</SvgText>
            
            {/* Zodiac symbols */}
            <SvgText x="50" y="70" fontSize={16} fill="#5D9CEC" textAnchor="middle">♊</SvgText>
            <SvgText x="100" y="50" fontSize={16} fill="#7B68EE" textAnchor="middle">♋</SvgText>
            <SvgText x="180" y="50" fontSize={16} fill="#FF9636" textAnchor="middle">♌</SvgText>
            <SvgText x="230" y="70" fontSize={16} fill="#A2D1B1" textAnchor="middle">♍</SvgText>
            
            {/* House numbers */}
            <Circle cx="140" cy="80" r="30" fill="transparent" stroke={Colors.primary.border} strokeWidth={1} />
            <SvgText x="125" y="75" fontSize={10} fill={Colors.primary.text}>VII</SvgText>
            <SvgText x="140" y="75" fontSize={10} fill={Colors.primary.text}>VIII</SvgText>
            <SvgText x="155" y="75" fontSize={10} fill={Colors.primary.text}>IX</SvgText>
            <SvgText x="125" y="90" fontSize={10} fill={Colors.primary.text}>X</SvgText>
            <SvgText x="140" y="90" fontSize={10} fill={Colors.primary.text}>XI</SvgText>
            <SvgText x="155" y="90" fontSize={10} fill={Colors.primary.text}>XII</SvgText>
          </Svg>
        </View>
        
        <Text style={styles.description}>
          This time is important to determine your houses, rising sign and the exact position of the Moon.
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
          title="I DON'T KNOW" 
          onPress={handleDontKnow} 
          variant="text"
          style={styles.dontKnowButton}
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
  chartContainer: {
    marginVertical: 20,
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
  dontKnowButton: {
    marginTop: 12,
  },
});