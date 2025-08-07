import React from "react";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ViewStyle
} from "react-native";
import Colors from "@/constants/colors";

type SelectionCardProps = {
  title: string;
  icon: React.ReactNode;
  selected?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  testID?: string;
};

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  icon,
  selected = false,
  onPress,
  style,
  testID,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        selected && styles.selectedCard,
        style,
      ]}
      onPress={onPress}
      testID={testID}
    >
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary.card,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    margin: 8,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: Colors.primary.accent,
    backgroundColor: `${Colors.primary.card}CC`,
  },
  iconContainer: {
    marginBottom: 8,
  },
  title: {
    color: Colors.primary.text,
    fontSize: 14,
    textAlign: "center",
  },
});

export default SelectionCard;