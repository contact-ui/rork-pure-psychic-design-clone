import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import Colors from "@/constants/colors";

type HoroscopeIconProps = {
  sign: string;
  size?: number;
  color?: string;
};

const HoroscopeIcon: React.FC<HoroscopeIconProps> = ({ 
  sign, 
  size = 32,
  color = Colors.primary.accent
}) => {
  const getPath = () => {
    switch (sign.toLowerCase()) {
      case "aries":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "taurus":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "gemini":
        return (
          <>
            <Circle cx={12} cy={10} r={6} fill={color} />
            <Circle cx={20} cy={10} r={6} fill={color} />
          </>
        );
      case "cancer":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "leo":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "virgo":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "libra":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "scorpio":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "sagittarius":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "capricorn":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "aquarius":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      case "pisces":
        return (
          <Path
            d="M16 4C19.5 4 22 6.5 22 10C22 13.5 19.5 16 16 16C12.5 16 10 13.5 10 10C10 6.5 12.5 4 16 4ZM16 18C23 18 28 22 28 28H4C4 22 9 18 16 18Z"
            fill={color}
          />
        );
      default:
        return (
          <Circle cx={16} cy={16} r={12} fill={color} />
        );
    }
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox="0 0 32 32">
        {getPath()}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HoroscopeIcon;