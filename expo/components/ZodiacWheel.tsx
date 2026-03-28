import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Circle, Text as SvgText } from "react-native-svg";
import Colors from "@/constants/colors";
import zodiacSigns from "@/constants/zodiacSigns";

type ZodiacWheelProps = {
  selectedSign?: string;
  size?: number;
};

const ZodiacWheel: React.FC<ZodiacWheelProps> = ({ 
  selectedSign,
  size = 300
}) => {
  const radius = size / 2;
  const centerX = radius;
  const centerY = radius;
  const innerRadius = radius * 0.6;
  
  // Create an array of zodiac signs in the correct order
  const signs = Object.values(zodiacSigns);
  
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Outer circle */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius - 2}
          stroke={Colors.primary.border}
          strokeWidth={1}
          fill="transparent"
        />
        
        {/* Inner circle */}
        <Circle
          cx={centerX}
          cy={centerY}
          r={innerRadius}
          stroke={Colors.primary.border}
          strokeWidth={1}
          fill="transparent"
        />
        
        {/* Zodiac segments */}
        {signs.map((sign, index) => {
          const startAngle = (index * 30 - 90) * (Math.PI / 180);
          const endAngle = ((index + 1) * 30 - 90) * (Math.PI / 180);
          
          const isSelected = selectedSign === sign.name.toLowerCase();
          
          // Calculate points for the segment path
          const x1 = centerX + innerRadius * Math.cos(startAngle);
          const y1 = centerY + innerRadius * Math.sin(startAngle);
          const x2 = centerX + radius * Math.cos(startAngle);
          const y2 = centerY + radius * Math.sin(startAngle);
          
          // Calculate text position
          const textAngle = (index * 30 + 15 - 90) * (Math.PI / 180);
          const textRadius = (innerRadius + radius) / 2;
          const textX = centerX + textRadius * Math.cos(textAngle);
          const textY = centerY + textRadius * Math.sin(textAngle);
          
          // Create the segment path
          const path = `
            M ${x1} ${y1}
            L ${x2} ${y2}
            A ${radius} ${radius} 0 0 1 ${centerX + radius * Math.cos(endAngle)} ${centerY + radius * Math.sin(endAngle)}
            L ${centerX + innerRadius * Math.cos(endAngle)} ${centerY + innerRadius * Math.sin(endAngle)}
            A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1}
            Z
          `;
          
          return (
            <React.Fragment key={sign.name}>
              <Path
                d={path}
                fill={isSelected ? `${sign.color}50` : "transparent"}
                stroke={Colors.primary.border}
                strokeWidth={1}
              />
              <SvgText
                x={textX}
                y={textY}
                fontSize={14}
                fill={isSelected ? sign.color : Colors.primary.text}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {sign.symbol}
              </SvgText>
            </React.Fragment>
          );
        })}
        
        {/* Highlight for selected sign */}
        {selectedSign && (
          <Path
            d={`M ${centerX} ${centerY} L ${centerX} ${centerY - radius}`}
            stroke={Colors.primary.accent}
            strokeWidth={2}
            fill="none"
          />
        )}
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

export default ZodiacWheel;