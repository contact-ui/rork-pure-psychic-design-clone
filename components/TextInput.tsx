import React from "react";
import { 
  StyleSheet, 
  TextInput as RNTextInput, 
  View, 
  Text,
  ViewStyle,
  TextStyle,
  TextInputProps as RNTextInputProps
} from "react-native";
import Colors from "@/constants/colors";

type TextInputProps = RNTextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <RNTextInput
        style={[
          styles.input,
          error ? styles.inputError : null,
          inputStyle,
        ]}
        placeholderTextColor="#6E6E9B"
        {...props}
      />
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: Colors.primary.text,
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.primary.card,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: Colors.primary.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.primary.border,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});

export default TextInput;