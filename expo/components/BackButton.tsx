import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";

type BackButtonProps = {
  onPress?: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={handlePress}
      testID="back-button"
    >
      <ChevronLeft color={Colors.primary.text} size={28} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 20,
  },
});

export default BackButton;