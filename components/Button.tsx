import React from "react";
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity, 
  ActivityIndicator,
  ViewStyle,
  TextStyle
} from "react-native";
import Colors from "@/constants/colors";

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline" | "text";
  testID?: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  loading = false,
  variant = "primary",
  testID,
  icon,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      case "outline":
        return styles.outlineButton;
      case "text":
        return styles.textButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "primary":
      case "secondary":
        return styles.primaryButtonText;
      case "outline":
        return styles.outlineButtonText;
      case "text":
        return styles.textButtonText;
      default:
        return styles.primaryButtonText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator color={Colors.primary.buttonText} />
      ) : (
        <>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: Colors.primary.button,
  },
  secondaryButton: {
    backgroundColor: Colors.primary.card,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary.button,
  },
  textButton: {
    backgroundColor: "transparent",
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: Colors.primary.buttonText,
    fontSize: 16,
    fontWeight: "600",
  },
  outlineButtonText: {
    color: Colors.primary.button,
    fontSize: 16,
    fontWeight: "600",
  },
  textButtonText: {
    color: Colors.primary.button,
    fontSize: 16,
    fontWeight: "600",
  },
  iconContainer: {
    marginRight: 8,
  },
});

export default Button;