import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "@/constants/colors";

type ProgressBarProps = {
  progress: number; // 0 to 1
  totalSteps: number;
  currentStep: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  totalSteps, 
  currentStep 
}) => {
  // Calculate positions for step indicators
  const stepPositions = Array.from({ length: totalSteps }, (_, i) => {
    return (i / (totalSteps - 1)) * 100;
  });

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View 
          style={[
            styles.progress, 
            { width: `${progress * 100}%` }
          ]} 
        />
      </View>
      {stepPositions.map((position, index) => (
        <View
          key={index}
          style={[
            styles.stepIndicator,
            { 
              left: `${position}%`, 
              backgroundColor: index <= currentStep 
                ? Colors.primary.accent 
                : Colors.primary.border 
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 4,
    marginVertical: 10,
    position: "relative",
  },
  track: {
    width: "100%",
    height: 4,
    backgroundColor: Colors.primary.border,
    borderRadius: 2,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: Colors.primary.accent,
    borderRadius: 2,
  },
  stepIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    top: -2,
    marginLeft: -4,
  },
});

export default ProgressBar;